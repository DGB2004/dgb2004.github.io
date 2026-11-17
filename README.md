# Every Bottleneck website

Static site: plain HTML, CSS and a small script. No build step and no backend. Hosted on GitHub Pages.

## Structure

- `index.html`, `prices/`, `about/`, `map-application/`, `privacy/`, `terms/`, `404.html`: one folder per page, so addresses stay clean (`/prices/`).
- `assets/css/site.css`: all styles.
- `assets/js/site.js`: phone menu and the sticky phone button.
- `assets/fonts/`: Inter (SIL Open Font License, see `LICENSE.txt`), a Latin subset of the variable font.
- `assets/brand/`: logo and icons.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.

## Rules

- Every internal link and asset uses a root-relative path (`/assets/...`, `/prices/`). Nothing hardcodes a domain, so switching to a custom domain needs no code changes.
- The header and footer are repeated in every page. Change them in every page in the same commit.
- Text marked `[PLACEHOLDER: ...]` is waiting for real content. Never replace it with invented details.

## Before launch

- Fill every placeholder.
- Remove the `<meta name="robots" content="noindex">` line from every page.
- When the custom domain is connected: add canonical tags, `sitemap.xml`, link-preview tags, and the sitemap line in `robots.txt`.
