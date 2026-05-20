# Sky Studios

Premium photography portfolio site built with React, Vite, Tailwind CSS, and React Router.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option A — Vercel Dashboard

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects **Vite** automatically. Confirm:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**.

`vercel.json` in the repo configures SPA routing (client-side routes like `/portfolio` and `/about`).

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts for the first deploy. Production:

```bash
vercel --prod
```

### Environment variables

None required for the current static site.

### Custom domain

In the Vercel project: **Settings → Domains** → add your domain and follow DNS instructions.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
