# Next.js + Velt Collaboration Starter

A minimal, production-ready Next.js template with [Velt](https://velt.dev) SDK pre-integrated for real-time collaboration. Add comments, presence, and notifications to any Next.js app in minutes.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvelt-js%2Fnextjs-velt-collaboration&env=NEXT_PUBLIC_VELT_API_KEY,VELT_AUTH_TOKEN&envDescription=Get%20your%20Velt%20credentials%20from%20console.velt.dev&envLink=https%3A%2F%2Fconsole.velt.dev)

## Features

- **Inline Comments** — Pin contextual comments on any UI element
- **Live Presence** — See who's viewing the same page in real time
- **Notifications** — Get notified on mentions and replies
- **Comments Sidebar** — Browse all comments in a slide-in panel
- **Customizable Wireframes** — Themed comment bubbles, tools, and notifications
- **Light & Dark Mode** — Full Velt CSS variable support for both themes

## Getting Started

### Prerequisites

1. Create a free account at [console.velt.dev](https://console.velt.dev)
2. Create a project and copy your **API Key** and **Auth Token**

### Local Development

```bash
# Clone the repo
git clone https://github.com/velt-js/nextjs-velt-collaboration.git
cd nextjs-velt-collaboration

# Install dependencies
npm install

# Create your env file
cp .env.example .env.local
# Edit .env.local with your Velt credentials

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Open a second browser window to see real-time collaboration.

### Deploy to Vercel

Click the **Deploy with Vercel** button above, or:

```bash
vercel deploy
```

Set `NEXT_PUBLIC_VELT_API_KEY` and `VELT_AUTH_TOKEN` in your Vercel project's environment variables.

## Project Structure

```
app/
  layout.tsx                  # Root layout with Inter font and providers
  page.tsx                    # VeltProvider wrapper + main content
  api/velt/token/route.ts     # JWT token endpoint (server-side)
  userAuth/                   # Demo user context (replace with your auth)
  document/                   # Document ID management
components/
  velt/                       # Velt integration layer (don't modify)
    VeltCollaboration.tsx     # Comments + document init + customization
    VeltInitializeUser.tsx    # Auth provider with JWT
    VeltInitializeDocument.tsx # Document setup
    VeltTools.tsx             # Presence + notifications
    ui-customization/         # Wireframes + CSS theming
  content/                    # Template content (replace with your UI)
    content-area.tsx          # Main layout with sidebar
    feature-card.tsx          # Commentable card component
    hero-section.tsx          # Page header
  header/                     # App header with Velt tools
```

## Customization

### Replace the content

Swap the files in `components/content/` with your own UI. The Velt integration in `components/velt/` works independently.

### Make any element commentable

```tsx
import { VeltCommentBubble, VeltCommentTool } from "@veltdev/react";

function YourComponent() {
  return (
    <div id="unique-element-id">
      {/* Your content */}
      <VeltCommentBubble targetElementId="unique-element-id" />
      <VeltCommentTool targetElementId="unique-element-id" />
    </div>
  );
}
```

### Use your own authentication

Replace `app/userAuth/` with your real auth system. The demo generates random users for testing. See the comments in `AppUserContext.tsx` for guidance.

### Theming

- Global styles: `styles/globals.css` (Tailwind HSL variables)
- Velt theme: `components/velt/ui-customization/styles.css` (light + dark mode)
- Add `className="dark"` to `<html>` in `layout.tsx` for dark mode

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Velt SDK](https://velt.dev/) (Comments, Presence, Notifications)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)

## Learn More

- [Velt Documentation](https://docs.velt.dev/)
- [Velt Console](https://console.velt.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
