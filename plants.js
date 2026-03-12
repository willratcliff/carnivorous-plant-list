// ================================================================
//  PLANTS.JS  —  Edit this file to update your listings
// ================================================================
//
//  Each plant entry has these fields:
//
//    name        : Common name shown on the card
//    species     : Scientific name (shown in italic below the name)
//    price       : Object with size tiers — omit or set to "" to hide a size
//                    { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" }
//    description : Short blurb shown on the card and in the detail modal
//    image       : Main photo shown on the card, e.g. "images/vft-main.jpg"
//    images      : Optional gallery for the detail modal — one photo per size.
//                  Each entry: { label: "Small", file: "images/vft-small.jpg" }
//                  If empty [], the modal just shows the main image.
//    status      : "available"  → green badge
//                  "limited"   → amber badge  (only a few left)
//                  "sold"      → red badge    (greyed out)
//                  "new"       → purple badge
//
//  To ADD a plant:    copy one block and paste it before the ]; at the bottom
//  To REMOVE a plant: delete its entire { ... }, block
//  To mark SOLD:      change status to "sold"
// ================================================================

const plants = [

  {
    name: "Maroon Monster Venus Flytrap",
    species: "Dionaea muscipula 'Maroon Monster'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "A striking clone with deep red-maroon coloring inside the traps. Fast-growing and perennial.",
    image: "images/maroon-monster.jpg",
    images: [
      // Add size photos here when available, e.g.:
      // { label: "Small",    file: "images/maroon-monster-small.jpg" },
      // { label: "Medium",   file: "images/maroon-monster-medium.jpg" },
      // { label: "Large",    file: "images/maroon-monster-large.jpg" },
      // { label: "Specimen", file: "images/maroon-monster-specimen.jpg" },
    ],
    status: "available",
  },

  {
    name: "Gigantic Venus Flytrap",
    species: "Dionaea muscipula",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "One of the largest Venus flytraps you'll find — oversized traps on a robust, well-established plant.",
    image: "images/gigantic-vft.jpg",
    images: [],
    status: "available",
  },

  {
    name: "B52 Venus Flytrap",
    species: "Dionaea muscipula 'B52'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "One of the most famous giant clones, known for producing exceptionally large traps. Fast-growing and perennial.",
    image: "images/b52.jpg",
    images: [],
    status: "available",
  },

  {
    name: "Red Piranha Venus Flytrap",
    species: "Dionaea muscipula 'Red Piranha'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "Jagged-toothed traps with vivid red interiors. Fast-growing and striking.",
    image: "images/red-piranha.jpg",
    images: [],
    status: "available",
  },

];
