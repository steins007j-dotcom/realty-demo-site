# Skyline Meridian — Progress Notes

Live site: https://steins007j-dotcom.github.io/realty-demo-site/
GitHub repo: https://github.com/steins007j-dotcom/realty-demo-site
Local folder: ~/realty-demo-site

## Done
- 4-page site built: index.html (Home), residences.html, amenities.html, contact.html
- Shared style.css: sticky nav, mobile menu, scroll-reveal animations, animated stat counters,
  Ken Burns hero slideshow, gallery lightbox, hover effects
- Shared script.js: nav scroll state, mobile menu toggle, IntersectionObserver reveal/counters,
  lightbox click handler, active nav highlighting
- All photography currently uses picsum.photos (free stock placeholder images) — NOT real
  project photos, no video file (used animated image crossfade instead of literal video)
- Pushed to GitHub, deployed via GitHub Pages (free `.github.io` subdomain)

## In progress / needs checking tomorrow
- Hero slideshow on index.html: in the last screenshot, the background image behind the
  dark overlay wasn't visibly showing (could just be animation timing at 0% opacity when
  the screenshot was taken, or the picsum background-image could be failing to load —
  needs a re-check with a short wait after page load, and check network requests if still blank)

## Next steps (not started yet)
- Swap picsum.photos placeholders for real project photos when available
- Replace "Skyline Meridian" placeholder branding with real project name + RERA number
- Connect the enquiry form to a real backend (Formspree free tier or CRM) — currently just
  shows a JS alert on submit
- Optional: real custom domain (paid, ~$10-15/yr) instead of the free .github.io subdomain
