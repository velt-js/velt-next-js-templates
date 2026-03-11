# Velt + TipTap Collaborative Editor

A real-time collaborative document editor built with [Velt](https://velt.dev), [TipTap](https://tiptap.dev), and [Next.js](https://nextjs.org).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSnippyly-Docs%2Fvelt-next-js-templates%2Ftree%2Fmain%2Ftiptap&env=NEXT_PUBLIC_VELT_API_KEY,VELT_AUTH_TOKEN&envDescription=Get%20your%20Velt%20API%20key%20and%20auth%20token%20from%20console.velt.dev&envLink=https%3A%2F%2Fconsole.velt.dev)

## Features

- **Real-time CRDT Editing** — Multiple users can edit simultaneously with conflict-free resolution powered by Yjs
- **Inline Comments** — Select text and add contextual comments with threaded replies
- **Presence Awareness** — See who's online with live cursors and avatars
- **Notifications** — Get notified when mentioned or when comments are replied to
- **Huddle / Video Calls** — Start video calls with collaborators directly in the editor
- **Rich Text Formatting** — Bold, italic, underline, strikethrough, headings via bubble menu
- **Dark Theme** — Polished dark UI with customized Velt wireframe components

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Editor:** [TipTap 3](https://tiptap.dev) with extensions
- **Collaboration:** [Velt SDK 5](https://docs.velt.dev) (CRDT + Comments + Presence)
- **CRDT Engine:** [Yjs](https://yjs.dev)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com)
- **Language:** TypeScript 5

## Getting Started

### 1. Get Velt credentials

Sign up at [console.velt.dev](https://console.velt.dev) and create a new project to get your API key and auth token.

### 2. Clone and configure

```bash
git clone <repository-url>
cd tiptap
cp .env.example .env
```

Edit `.env` with your credentials:

```
NEXT_PUBLIC_VELT_API_KEY=your_api_key
VELT_AUTH_TOKEN=your_auth_token
```

### 3. Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the editor. Share the URL (with `?documentId=...`) with others to collaborate.

## Project Structure

```
tiptap/
├── app/
│   ├── layout.tsx                 # Root layout with user provider
│   ├── page.tsx                   # Main page with VeltProvider
│   ├── api/velt/token/route.ts    # JWT token generation API
│   ├── document/                  # Document ID management
│   └── userAuth/                  # User authentication context
├── components/
│   ├── document/
│   │   ├── document-canvas.tsx    # Main editor container
│   │   └── TipTapComponent/       # TipTap editor with CRDT + Comments
│   ├── header/                    # Top bar with Velt tools
│   ├── sidebar/                   # Table of contents navigation
│   └── velt/                      # Velt integration components
│       ├── VeltCollaboration.tsx   # Comments + sidebar setup
│       ├── VeltInitializeDocument.tsx
│       ├── VeltInitializeUser.tsx  # Auth provider hook
│       ├── VeltTools.tsx          # Presence, notifications, huddle
│       └── ui-customization/      # Custom wireframe components
├── lib/utils.ts                   # Tailwind utility (cn)
└── styles/globals.css             # Global + editor styles
```

## Customization

### Replace Authentication

The template uses demo user generation (`app/userAuth/AppUserContext.tsx`). Replace with your auth system:

```typescript
// Instead of generateRandomUser(), use your auth:
const currentUser = await yourAuthSystem.getCurrentUser();
setUser({
  userId: currentUser.id,
  name: currentUser.name,
  email: currentUser.email,
  organizationId: currentUser.orgId,
});
```

### Modify Editor Content

Edit `components/document/TipTapComponent/constants.ts` to change the initial document content.

### Add TipTap Extensions

Add extensions in `components/document/TipTapComponent/TipTapComponent.tsx` within the `extensions` array. Keep `undoRedo: false` in StarterKit (CRDT handles undo/redo).

### Customize Velt Theme

Modify CSS variables in `components/velt/ui-customization/styles.css` to match your brand colors.

## Learn More

- [Velt Documentation](https://docs.velt.dev)
- [TipTap Documentation](https://tiptap.dev/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Yjs Documentation](https://docs.yjs.dev)
