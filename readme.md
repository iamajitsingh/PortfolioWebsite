# Ajit Singh — Portfolio Website

This is an example of a personal portfolio, built using React, Vite, Tailwind CSS, and deployed via GitHub Pages.

## Tech Stack

- React + Vite (Frontend Framework + Dev Server)
- Tailwind CSS (Styling)
- GitHub Pages (Static Hosting)
- gh-pages (Deployment)


## Deployment Instructions

1. Install dependencies:
 npm install
 Run locally:
 npm run dev

2. Deploy to GitHub Pages:
 npm run deploy
 Deployment uses the gh-pages branch to serve static content.

Vite Config Notes
- This project uses a conditional base path:
 base: mode === 'production' ? '/PortfolioWebsite/' : '/',
 Ensures local dev runs at /

- Production build uses GitHub Pages path

👨‍💻 Author
Ajit Singh
📍 Mumbai, India
💼 Ex-Capgemini Engineering. Reach out @ iamajit41@gmail.com

License: MIT

Feel free to fork for inspiration, but this is a personal project and not open to contributions.