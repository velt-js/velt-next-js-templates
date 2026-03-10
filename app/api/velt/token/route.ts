import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_VELT_API_KEY;
    const authToken = process.env.VELT_AUTH_TOKEN;

    if (!apiKey || !authToken) {
      return NextResponse.json(
        {
          error:
            'Missing Velt credentials. Set NEXT_PUBLIC_VELT_API_KEY and VELT_AUTH_TOKEN in your environment variables. Get them from https://console.velt.dev',
        },
        { status: 500 }
      );
    }

    const { userId, organizationId, email, isAdmin } = await req.json();
    if (!userId || !organizationId) {
      return NextResponse.json({ error: 'Missing userId or organizationId' }, { status: 400 });
    }

    const body = {
      data: {
        userId,
        userProperties: {
          organizationId,
          ...(typeof isAdmin === 'boolean' ? { isAdmin } : {}),
          ...(email ? { email } : {}),
        },
      },
    };

    const res = await fetch('https://api.velt.dev/v2/auth/token/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-velt-api-key': apiKey,
        'x-velt-auth-token': authToken,
      },
      body: JSON.stringify(body),
    });

    const json = await res.json();
    const token = json?.result?.data?.token;
    if (!res.ok || !token) {
      return NextResponse.json(
        { error: json?.error?.message || 'Failed to generate token' },
        { status: 500 }
      );
    }
    return NextResponse.json({ token });
  } catch {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
