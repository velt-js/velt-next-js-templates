// Icon assets from public/icons directory
export const imgTablerIconBold = "/icons/bold.svg"
export const imgTablerIconItalic = "/icons/italic.svg"
export const imgTablerIconUnderline = "/icons/underline.svg"
export const imgTablerIconStrikethrough = "/icons/strikethrough.svg"

export const initialContent = `
<p><span data-heading="h1">Welcome to Your Collaborative Document</span></p>
<p>This is a real-time collaborative editor powered by <strong>Velt</strong> and <strong>TipTap</strong>. Multiple users can edit this document simultaneously with live cursor tracking and CRDT-based conflict resolution.</p>

<p><span data-heading="h2">Getting Started</span></p>
<p>Start typing to see real-time collaboration in action. Share the URL with others to collaborate together. Select text to see the formatting toolbar, or highlight text and add comments using the comment button.</p>

<p><span data-heading="h2">Features</span></p>
<p><strong>Real-time CRDT Editing</strong> — Changes sync instantly across all connected users with conflict-free resolution powered by Yjs.</p>
<p><strong>Inline Comments</strong> — Select any text and add contextual comments. Comments appear as highlighted markers in the document.</p>
<p><strong>Presence Awareness</strong> — See who else is viewing and editing the document in real-time with live cursors.</p>
<p><strong>Notifications</strong> — Get notified when someone mentions you or replies to your comments.</p>

<p><span data-heading="h2">Customization</span></p>
<p>This template is designed to be customized. Replace the authentication logic with your own auth system, modify the editor extensions, and adjust the styling to match your brand. See the README for detailed customization guidance.</p>
`
