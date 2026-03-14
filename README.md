# QRights — simple static website

This is a small static website for an IGCSE Global Perspectives project: **QR-based access to your legal rights** (Kyrgyz Republic constitution).

## Pages

- `index.html` — home + 3 case buttons
- `cases/detention.html` — police stop / detention
- `cases/speech.html` — speech / assembly
- `cases/workplace.html` — workplace issue

## Languages

- **English (default)**: `index.html` + `cases/*`
- **Russian**: `ru/index.html` + `ru/cases/*`
- **Kyrgyz**: `ky/index.html` + `ky/cases/*` (placeholder pages until full Kyrgyz text is added)

Each page shows a **QR code** for its own URL and a **Copy link** button.

## Run locally (recommended)

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Edit the content

Open the case pages in `cases/` and replace the “student summary” text with:

- exact quotes from the Constitution text you used
- the correct article numbers
- official source links

## Deploy

Because this is static HTML/CSS/JS, you can host it on:

- GitHub Pages
- Netlify / Vercel
- any basic web hosting

