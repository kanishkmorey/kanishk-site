# Kanishk — personal website

Jekyll site (no plugins beyond GitHub Pages defaults). Writing and Projects are
driven by Markdown files; everything else is plain HTML/CSS/JS.

## Files
- `_config.yml`    Site title, contact details, tiles per page, URLs
- `_posts/`        One Markdown file per post
- `_projects/`     One Markdown file per project
- `_layouts/`      `default` (page shell + header), `post`, `project`
- `_includes/`     `pager.html` (arrows + dots)
- `index.html`, `writing.html`, `projects.html`, `contact.html`   The pages
- `styles.css`     All styling (colours are variables at the top)
- `script.js`      Paginator (arrows, dots, left/right keys)
- `images/`        Photo, starfield, favicon

## Add a post
Create `_posts/YYYY-MM-DD-my-title.md`:

    ---
    title: "My title"
    summary: "One line shown on the Writing page."
    ---
    Markdown here. Use `## Heading`, `> quote`, lists, links, images, code.

The date comes from the filename (future-dated posts stay hidden), and the
"min read" is calculated automatically. "Next" at the bottom links to the
next-older post.

## Add a project
Create `_projects/my-project.md`:

    ---
    title: "My project"
    summary: "One line shown on the tile."
    order: 6                  # position on the Projects page (also the 01, 02… number)
    year: "2026"
    role: "Designer & developer"
    stack: "HTML, CSS, JS"
    live: "https://…"         # optional
    github: "https://github.com/…"   # optional
    image: images/my-project.jpg     # optional screenshot
    caption: "Shown under the screenshot and used as its alt text"
    ---
    ## The problem
    …

Omit any optional field and its block disappears from the page.

## Pagination
Tiles are split into pages of `per_page` (default 4, in `_config.yml`).
Pages and dots are generated automatically; with one page the pager hides.

## Run locally
    bundle install
    bundle exec jekyll serve      # http://localhost:4000

## Publish on GitHub Pages
1. Push to a repo; for `<username>.github.io` leave `baseurl` empty. For a
   project repo set `baseurl: "/repo-name"` in `_config.yml`.
2. Settings -> Pages -> Deploy from a branch -> main / (root) -> Save.

## Still to fill in
Set `email`, `linkedin` and `github` in `_config.yml`, and add your own posts
and projects alongside the starter ones in `_posts/` and `_projects/`.
