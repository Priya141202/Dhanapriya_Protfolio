# Neon AI Specialist Portfolio Dashboard

A responsive React + Vite portfolio dashboard recreated from the supplied neon blue / violet AI portfolio reference.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Personalize it

Open `src/main.jsx` and update:

- `PROFILE.name`, role, about text and links
- `GITHUB_USERNAME` with your real GitHub username (public profile counts will then load from GitHub's public API)
- `projects` with your actual project names, descriptions, GitHub URLs and demo URLs
- `stacks` and `expertise` to match your real skills

The GitHub analytics card currently uses sample contribution / star / streak / language values as visual placeholders. Replace them with verified data or connect a GitHub stats service if you want live values for those metrics.

## Project structure

```text
neon-ai-portfolio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── style.css
```
