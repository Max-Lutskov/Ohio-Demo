# Ohio Transit Company — concept redesign

Static Nuxt 4 site. All content lives in `app/site.config.ts`; photos in `public/img` (WebP, 640/1280/1920).

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static output in .output/public
```

Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).
To build for a sub-path, set `NUXT_APP_BASE_URL=/repo-name/`.
