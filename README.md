# Pro UI Boilerplate

  A Claude Code-optimized Next.js starter with everything pre-configured for building high-end UIs.

  ## Stack

  - **Next.js 15** (App Router)
  - **TypeScript**
  - **Tailwind CSS**
  - **Framer Motion** — animations and micro-interactions
  - **Lucide React** — icon library
  - **clsx + tailwind-merge** — class utility (shadcn/ui & 21st.dev compatible)

  ## Getting Started

  ```bash
  npm install
  npm run dev
  ```

  Open [http://localhost:3000](http://localhost:3000) to view the app.

  ## Folder Structure

  ```
  ├── app/              # Next.js App Router pages & layouts
  ├── components/
  │   └── ui/           # Drop-in UI components (shadcn/ui, 21st.dev)
  ├── lib/
  │   └── utils.ts      # cn() utility (clsx + tailwind-merge)
  ├── public/           # Static assets
  └── claude-instructions.md  # Claude Code context
  ```

  ## Claude Code Integration

  Feed `claude-instructions.md` to Claude Code when starting a session so it understands the project context and can generate polished, animation-rich UI from the start.
  