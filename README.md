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

## Optional traffic analytics

1. In [Umami Cloud](https://cloud.umami.is/), add `morcellinus.github.io` as a website and copy its Website ID from **Tracking code**.
2. In this repository's **Settings → Secrets and variables → Actions → Variables**, add `NEXT_PUBLIC_UMAMI_WEBSITE_ID` with that Website ID. The ID is public; do not use an API key or account credential.
3. Run **Deploy static site to Pages** from the **Actions** tab. Then visit the deployed site and check the Umami dashboard.

The tracker is omitted if the variable is blank. It records traffic on `morcellinus.github.io`, excluding the page URL's query string and fragment. To disable it, remove the variable and redeploy.
