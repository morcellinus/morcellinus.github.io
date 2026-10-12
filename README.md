# Jinmo Lee — Personal Site (Next.js + Tailwind)

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push this repo as **morcellinus/morcellinus.github.io**.
2. In GitHub → Settings → Pages, set **Build and deployment** to **GitHub Actions**.
3. Push to `main`. The included workflow runs `next build` with static export enabled and publishes `/out` to Pages.
4. Your site will be at: https://morcellinus.github.io

## Add your assets
- Put your headshot at `public/profile.jpg`.
- Replace `public/CV-jinmolee.pdf` when updating the CV, and update the month in `app/cv/page.tsx`.

## Customize
- Edit copy in `app/**/*.tsx`.
- Update publications, awards, talks, and teaching in `lib/profile.ts`. Publication URLs are attached to their titles.
- Update professional profile links in `components/ContactLinks.tsx`.
- Shared mobile layouts and typography are in `app/globals.css`; navigation is in `components/NavBar.tsx`.
- Add new tabs by creating `app/<route>/page.tsx` and linking it in `components/NavBar.tsx`.
