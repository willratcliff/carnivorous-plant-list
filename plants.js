// ================================================================
//  PLANTS.JS  —  Edit this file to update your listings
// ================================================================
//
//  Each plant entry has these fields:
//
//    name        : Common name shown on the card
//    species     : Scientific name (shown in italic below the name)
//    price       : Object with size tiers — set any to "" to hide that size
//                    { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" }
//    description : Short blurb shown on the card
//    image       : Path to photo in the images/ folder.
//                  Use "" (empty) if you don't have a photo yet
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
    status: "available",
  },

  {
    name: "Gigantic Venus Flytrap",
    species: "Dionaea muscipula",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "One of the largest Venus flytraps you'll find — oversized traps on a robust, well-established plant.",
    image: "images/gigantic-vft.jpg",
    status: "available",
  },

  {
    name: "B52 Venus Flytrap",
    species: "Dionaea muscipula 'B52'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "One of the most famous giant clones, known for producing exceptionally large traps. Fast-growing and perennial.",
    image: "images/b52.jpg",
    status: "available",
  },

  {
    name: "Red Piranha Venus Flytrap",
    species: "Dionaea muscipula 'Red Piranha'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    description: "Jagged-toothed traps with vivid red interiors. Fast-growing and striking.",
    image: "images/red-piranha.jpg",
    status: "available",
  },

];
