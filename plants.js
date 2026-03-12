// ================================================================
//  PLANTS.JS  —  Edit this file to update your listings
// ================================================================
//
//  Each plant entry has these fields:
//
//    name        : Common name shown on the card
//    species     : Scientific name (shown in italic below the name)
//    price       : e.g. "$10"  or  "$10–$15"
//    description : Short blurb shown on the card
//    image       : Path to your photo, e.g. "images/vft.jpg"
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
    name: "Venus Flytrap",
    species: "Dionaea muscipula",
    price: "$10",
    description: "Classic vigorous clone, healthy and well established in a 4\" pot.",
    image: "",     // ← e.g. "images/vft.jpg"
    status: "available",
  },

  {
    name: "Tropical Pitcher Plant",
    species: "Nepenthes sp.",
    price: "$25",
    description: "Rooted cutting with active pitchers, ready to ship.",
    image: "",
    status: "available",
  },

  {
    name: "Cape Sundew",
    species: "Drosera capensis",
    price: "$8",
    description: "Easy to grow, covered in glistening sticky tentacles. Great beginner plant.",
    image: "",
    status: "limited",
  },

];
