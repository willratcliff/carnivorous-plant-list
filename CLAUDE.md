# Will's Carnivorous Plants — Project Guide

## Purpose

Static single-page website for selling hand-grown carnivorous plants.
Hosted on GitHub Pages at: https://willratcliff.github.io/carnivorous-plants-list

The site lists current inventory with photos, tiered pricing, and contact links.
It is shared on social media (Instagram, Facebook, Reddit) and links to the eBay store.

## Workflow

This project is regularly updated via Claude Code. Common tasks include:

- **Adding/removing plants** — edit `plants.js`
- **Updating prices or descriptions** — edit `plants.js`
- **Adding photos** — convert HEIC to JPG using `sips`, drop into `images/`, reference in `plants.js`
- **Marking plants sold** — change `status` to `"sold"` in `plants.js`
- **Committing and pushing** — commit via Claude Code, push via GitHub Desktop

After changes are committed, the user pushes via **GitHub Desktop**.
GitHub Pages redeploys automatically within ~30 seconds of a push.

## File Structure

```
index.html        — page structure and modal/rendering JS (rarely needs editing)
style.css         — all styling (rarely needs editing)
plants.js         — ALL inventory data lives here (edit this to update the site)
images/           — plant photos (JPG, web-optimized at 1200px wide)
CLAUDE.md         — this file
```

## plants.js Format

```javascript
{
  name:        "Common Name",
  species:     "Genus species 'Clone'",
  price:       { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
  description: "Short description shown on card and in modal.",
  image:       "images/main-photo.jpg",   // card thumbnail
  images: [                               // modal gallery (empty [] = just shows main image)
    { label: "Small",    file: "images/plant-small.jpg" },
    { label: "Medium",   file: "images/plant-medium.jpg" },
    { label: "Large",    file: "images/plant-large.jpg" },
    { label: "Specimen", file: "images/plant-specimen.jpg" },
  ],
  status: "available",  // available | limited | sold | new
},
```

## Photo Workflow

1. Take photos, transfer to Mac (likely as HEIC from iPhone)
2. Convert and resize with sips:
   ```
   sips -s format jpeg --resampleWidth 1200 "input.HEIC" --out "images/output.jpg"
   ```
3. Add the image path to `plants.js`

## Contact Info on Site

- Email: will@phamcliff.com
- Instagram: @willhascoolplants
- Facebook: https://www.facebook.com/profile.php?id=61586990360469
- Reddit: u/Berberis — https://www.reddit.com/user/Berberis/
- eBay: thepitcherpeople — https://www.ebay.com/usr/thepitcherpeople
