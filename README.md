# Kanishk — personal website

Jekyll site (no plugins beyond GitHub Pages defaults). Writing and Projects are
driven by Markdown files; everything else is plain HTML/CSS/JS.

## Files
- `_config.yml`    Site title, contact details, tiles per page, URLs
- `_posts/`        One Markdown file per post
- `_projects/`     One Markdown file per project
- `_layouts/`      `default` (page shell + header), `post`, `project`
- `_includes/`     `pager.html` (arrows + dots), `footer.html` (© line + back to top)
- `_templates/`    Starter files to copy for a new post or project
- `404.html`, `feed.xml`, `sitemap.xml`, `robots.txt`   Not-found page, RSS feed, search-engine files
- `index.html`, `writing.html`, `projects.html`, `contact.html`   The pages
- `styles.css`     All styling (colours are variables at the top)
- `script.js`      Paginator (arrows, dots, left/right keys) and article extras (code Copy button, captions)
- `images/`        Photo, starfield, favicon

## Add a post or project (quick version)
Copy a starter file, rename it, fill it in:

- `_templates/post.md`    -> `_posts/YYYY-MM-DD-short-title.md`
- `_templates/project.md` -> `_projects/short-name.md`

Only `title` is required. Every other line at the top is optional; delete it
and that part of the page disappears. If `summary` is left out, the start of
the post is used.

## Writing in Markdown (what you get for free)
Plain Markdown works; these are the extras you don't have to configure:

- ` ```go ` code fence: syntax colours, a language label and a Copy button
- `![alt](/images/x.jpg "Caption")`: the text in quotes becomes a caption
- `## Heading` / `### Subheading`: get a `#` link on hover so sections can be linked
- Tables, quotes (`>`), lists, `---` dividers are all styled
- Links to other sites open in a new tab
- "min read" is calculated; the date comes from the file name (or `date:` in the header)

Post header fields: `title`, `summary`, `tags: [a, b]`, `updated: YYYY-MM-DD`.
Project header fields: `title`, `summary`, `order`, `status`, `year`, `role`,
`stack`, `live`, `github`, `image`, `caption`.

Put images in `images/` and refer to them as `/images/name.jpg`.

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
