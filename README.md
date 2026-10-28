# Kanishk — personal website

Plain HTML/CSS/JS. No build step.

## Files
- index.html      Home
- writing.html    All posts (paginated, 4 per page)
- post.html       Single post template
- projects.html   All projects (2x2 grid, paginated)
- project.html    Single project template
- contact.html    Email / LinkedIn / GitHub
- styles.css      All styling (colours are variables at the top)
- script.js       Paginator (arrows + dots)
- images/         Photo and starfield

## Editing
- Replace every [BRACKETED PLACEHOLDER] with your own text.
- To add a post: copy post.html to e.g. my-first-post.html, edit it,
  and point a tile in writing.html at it. Same for projects.
- Pages in the paginator: each <ul class="page ..."> is one page of 4 tiles.
  Add or remove <ul> blocks; the dots update automatically.

## Publish on GitHub Pages
1. Create a public repo named <your-username>.github.io
2. Upload all files (index.html at the top level) and commit.
3. Settings -> Pages -> Deploy from a branch -> main / (root) -> Save.
4. Visit https://<your-username>.github.io after a minute.
