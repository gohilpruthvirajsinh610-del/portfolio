# Gohil — Personal Developer Portfolio

A clean, modern, responsive personal portfolio website built with plain HTML, CSS, and JavaScript. Designed to feel like a real developer portfolio — not a generic template.

**No build step required.** Just edit the config and deploy.

---

## Quick Start

1. Open the `portfolio` folder.
2. Edit `js/config.js` with your real information.
3. Drop your resume into `assets/resume.pdf`.
4. Open `index.html` in a browser (or use a local server).

```bash
# Optional: simple local server
npx serve .
# or
python -m http.server 8000
```

---

## Folder Structure

```
portfolio/
├── index.html              # Main page
├── css/
│   └── style.css           # All styles + theme variables
├── js/
│   ├── config.js           # ← EDIT THIS (personal data, skills, projects…)
│   └── main.js             # Interactions (theme, filters, animations…)
├── assets/
│   ├── images/             # Project images / placeholders
│   ├── resume.pdf          # Your resume (add this)
│   └── favicon.svg
└── README.md
```

---

## Customization Guide

### 1. Personal Information & Social Links

Open **`js/config.js`** and update:

```js
name: "Gohil",
role: "Aspiring Software Developer",
email: "your.email@example.com",   // ← real email

social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
},

githubUsername: "yourusername",
```

All social icons and the GitHub button read from this object.

### 2. About Text & “Currently Exploring”

Still in `config.js`:

```js
about: { ... },
currentlyExploring: ["Python", "Web Development", ...],
```

The About section text is also duplicated in `index.html` for SEO/readability. You can keep them in sync or make the About section fully dynamic later.

### 3. Skills

```js
skills: {
  programming: ["Python", "JavaScript", "HTML", "CSS"],
  web: ["Frontend development", "Responsive design", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code"],
},
```

Add or remove items freely. They are rendered as tags — no proficiency claims.

### 4. Projects (Most Important)

Replace the three placeholder projects with your real ones:

```js
projects: [
  {
    id: 1,
    title: "My Real Project",
    description: "Short, honest description of what it does.",
    image: "assets/images/my-project.png",   // add your screenshot
    technologies: ["Python", "Flask", ...],
    features: [
      "Feature one",
      "Feature two",
    ],
    github: "https://github.com/you/repo",
    live: "https://your-live-demo.com",      // or "#" if none
    category: "python",   // "python" | "web" | "other"
    isPlaceholder: false, // set to false for real projects
  },
  // ...
],
```

**Tips:**
- Use real screenshots (1200×750 or similar).
- Keep descriptions concise and honest.
- The filter buttons (`All | Python | Web | Other`) use the `category` field.

### 5. Journey / Timeline

Edit the `journey` array in `config.js`. Each item has `title` and `description`.

### 6. Resume

1. Export your resume as PDF.
2. Place it at: `assets/resume.pdf`
3. The “Download Resume” button already points there.

### 7. Favicon & Meta

- Favicon: replace `assets/favicon.svg` (or add a `.ico`).
- Update the `<title>`, meta description, and Open Graph tags in `index.html` once you have a live URL.

---

## Connecting the Contact Form

The form is currently frontend-only (it shows a helpful alert).

### Option A — Formspree (easiest)

1. Go to [formspree.io](https://formspree.io) and create a form.
2. In `index.html`, change the form tag to:

```html
<form class="contact-form reveal" id="contact-form"
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST">
```

3. Remove or simplify the JavaScript submit handler in `main.js` if you want pure Formspree behavior.

### Option B — EmailJS

Follow their docs to add the SDK and send emails from the client.

---

## Theme

Dark theme is the default. Users can toggle light/dark mode (preference is saved in `localStorage`).

CSS variables live at the top of `css/style.css`. Change `--accent` if you want a different brand color.

---

## Deployment

### GitHub Pages

1. Create a new repository (e.g. `yourusername.github.io` or `portfolio`).
2. Push the contents of the `portfolio` folder.
3. In repo Settings → Pages → set source to the main branch (or `/docs` if you put files there).
4. Your site will be live at `https://yourusername.github.io` (or `/portfolio`).

### Netlify / Vercel

1. Drag & drop the `portfolio` folder, **or**
2. Connect the GitHub repo.
3. No build command needed — publish directory is the root of the folder.

### Other static hosts

Any static host works (Cloudflare Pages, Render, Surge, etc.).

---

## Accessibility & Performance Notes

- Semantic HTML landmarks and heading hierarchy
- Keyboard-navigable interactive elements
- Focus styles and ARIA labels on buttons/menus
- Respects `prefers-reduced-motion`
- Lazy-loaded project images
- Minimal JS, no heavy frameworks

---

## What’s Intentionally Left as Placeholders

- Project cards (clearly marked)
- GitHub contribution grid & stats (not real data)
- Social links (`#` until you fill them)
- Resume file (you must add `assets/resume.pdf`)
- Contact form backend

This keeps the portfolio honest and recruiter-friendly.

---

## Making It Yours

Small personal touches already included:
- Terminal-style intro in the About section
- “Currently exploring…” tags
- Clean timeline instead of fake work experience
- Subtle hover and scroll animations

Feel free to tweak colors, spacing, or add a small easter egg — just keep it professional enough to send to recruiters.

---

## License

You can use this portfolio structure freely for your personal site. Attribution is appreciated but not required.

Happy building!  
— Gohil’s starter portfolio