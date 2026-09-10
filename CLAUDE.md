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
index.html        — page structure, section/jump-bar rendering, modal + cart JS (rarely needs editing)
style.css         — all styling; design tokens live in :root at the top (rarely needs editing)
plants.js         — ALL inventory data lives here (edit this to update the site)
sales.js          — time-boxed promotions, discount codes, and the EXPERIMENT toggle
apps-script.gs    — Google Apps Script the cart posts to (emails + experiment sheet); redeploy after edits
experiment/       — no-dormancy experiment tracker (README + gitignored participants.csv)
images/           — full-size plant photos (JPG, 1200px wide) used in the detail modal
images/thumbs/    — 700px card thumbnails, same filenames (regenerate when adding a photo)
CLAUDE.md         — this file
```

## plants.js Format

```javascript
{
  name:        "Common Name",
  species:     "Genus species 'Clone'",
  category:    "flytrap",   // flytrap | drosera | pinguicula | nepenthes | oddities | supplies
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
3. Generate the card thumbnail (same filename, in `images/thumbs/`):
   ```
   sips -s format jpeg -s formatOptions 78 --resampleWidth 700 "images/output.jpg" --out "images/thumbs/output.jpg"
   ```
   Cards fall back to the full-size photo if the thumb is missing, so this is a perf nicety, not a blocker.
4. Add the image path to `plants.js` (always the `images/` path; the code derives the thumb path)

Card videos (`video:` field) should be re-encoded before committing so they stay under ~2 MB:
```
ffmpeg -i input.mp4 -vf "scale=540:-2" -c:v libx264 -crf 27 -preset slow -pix_fmt yuv420p -movflags +faststart -an images/output.mp4
```
The card shows the plant's `image` as a poster and only loads the video once the card scrolls into view.

## Sale Page Layout

The sale page groups cards into sections by `category`. Section titles, order, and
jump-bar chip labels are defined in the `SECTIONS` array near the top of the inline
script in `index.html`. Plants with an unknown or missing category land in a trailing
"Other" section, so a typo never hides a listing. On phones (≤640px) every section
except the first starts collapsed; tapping a section header or a jump chip expands it.

## Contact Info on Site

- Email: will@phamcliff.com
- Instagram: @willhascoolplants
- Facebook: https://www.facebook.com/profile.php?id=61586990360469
- Reddit: u/Berberis — https://www.reddit.com/user/Berberis/
- eBay: thepitcherpeople — https://www.ebay.com/usr/thepitcherpeople

## No-Dormancy Experiment Bonus

A featured block at the top of the sale page offers a free division of the
no-dormancy Target clone with any order. Customers opt in via the block's
button or the checkbox in the cart, choose a growing setup, and the order email
gains a `No-Dormancy Experiment: YES` block. The Apps Script logs each
participant to a Google Sheet with a first check-in date one year out; see
`experiment/README.md` for the local mirror and check-in workflow.

- **Turn it off:** set `active: false` in `window.EXPERIMENT` in `sales.js`
  (or set `ends` to an ISO date with offset).
- **Copy and photos:** the `#experiment-feature` block in `index.html`;
  photos are `images/target-clone-tray.jpg` and `images/target-clone-closeup.jpg`.
- **Sheet logging only works after the updated `apps-script.gs` is pasted
  into the Apps Script project and redeployed as a new version.**
