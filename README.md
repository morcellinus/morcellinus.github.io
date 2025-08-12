# Jinmo Lee — Personal Site (Next.js + Tailwind)

## Run locally
```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)
1. Push this repo as **morcellinus/morcellinus.github.io**.
2. In GitHub → Settings → Pages, set **Build and deployment** to **GitHub Actions**.
3. Push to `main`. The included workflow builds `next export` and publishes `/out` to Pages.
4. Your site will be at: https://morcellinus.github.io

## Add your assets
- Put your headshot at `public/profile.jpg`.
- (Optional) Add `public/cv.pdf` and `public/favicon.ico`.

## Customize
- Edit copy in `app/**/*.tsx`.
- Add new tabs by creating `app/<route>/page.tsx` and linking it in `components/NavBar.tsx`.
