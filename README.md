# FahrendraKhoirul.github.io

This repository hosts the source for the personal website and portfolio for Fahrendra Khoirul. The site is a GitHub Pages site built with static HTML, JavaScript, and a Tailwind CSS build step.

## About

- Owner: Fahrendra Khoirul (https://github.com/FahrendraKhoirul)
- Purpose: Personal website / portfolio served via GitHub Pages

## Language composition

This repository is primarily composed of:

- HTML: 52.9%
- CSS: 36.2%
- JavaScript: 10.9%

## Running locally

1. Clone the repository:

   git clone https://github.com/FahrendraKhoirul/fahrendrakhoirul.github.io.git

2. Install the Tailwind CLI dependency and build the deployable stylesheet:

  ```bash
  npm install
  npm run build
  ```

3. Open the site locally by opening `index.html` in a browser, or run a simple local server for a better experience:

   - Python 3:
     ```bash
     python -m http.server 8000
     # then open http://localhost:8000 in your browser
     ```

   - Node (http-server):
     ```bash
     npx http-server -p 8000
     # then open http://localhost:8000
     ```

## Contributing

Contributions are welcome. To propose changes:

1. Fork the repository.
2. Create a feature branch (e.g., `feature/update-homepage`).
3. Make your changes and commit them with a clear message.
4. Open a pull request back to this repository.

If you'd like to report an issue or request a feature, open an issue in this repository.

## Deployment

This repository is intended to be served by GitHub Pages. The generated stylesheet at `assets/css/site.css` is committed to the repository, so GitHub Pages only needs to serve the static files.

Before pushing a styling change, run:

```bash
npm run build
```

For local Tailwind development, use:

```bash
npm run dev
```

Pushing the built files to the repository's default branch will update the live site according to the repository's Pages settings.

## Contact

For questions or requests, open an issue or contact the owner via their GitHub profile: https://github.com/FahrendraKhoirul

---

*Generated README updated on 2026-08-24.*
