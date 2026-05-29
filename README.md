# Beesploitz

## Deploy to Netlify via GitHub

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Netlify auto-deploys on every push to `main`.

## Local Dev

```bash
npm install
npm run dev
```
