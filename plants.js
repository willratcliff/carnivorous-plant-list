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
    name: "Chinese Dumpling VFT",
    species: "Dionaea muscipula 'Chinese Dumpling' · Rare Cultivar",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    bulkTiers: [
      { label: "Medium · 10+ ea.", price: "$10" },
    ],
    shortDescription: "Rare cultivar with short, rounded traps and frilly, twisted teeth at maturity. One of the most distinctive mutant flytraps in the hobby.",
    description: "Chinese Dumpling is one of the most distinctive and sought-after flytrap cultivars to hit the hobby in recent years. It gets its name from the unique shape of its traps, which are short, rounded, and reminiscent of a dumpling. At maturity, the trap margins become twisted and the cilia take on a frilly, almost serrated look that gives the whole plant a wonderfully sinister appearance. In a world full of mutant flytraps, this one still manages to stand out.\n\nGrown in strong light, the traps will blush a deep red while the petioles stay a vibrant green, making for a striking contrast. Younger and winter traps tend to look more typical, without much visible mutation to the teeth. As the plants mature and the warmer, sunnier months arrive, the characteristic dumpling shape really starts to express itself. This is also a clone that puts on impressive rhizome development for its size.\n\n",
    image: "images/chinese-dumpling-large.jpg",
    images: [
      { label: "Small",    file: "images/chinese-dumpling-small.jpg"   },
      { label: "Medium",   file: "images/chinese-dumpling-medium.jpg"  },
      { label: "Mediums",  file: "images/chinese-dumpling-mediums.jpg" },
      { label: "Large",    file: "images/chinese-dumpling-large.jpg"   },
      { label: "Large 2",  file: "images/chinese-dumpling-large-2.jpg" },
    ],
    status: "available",
  },

  {
    name: "B52 VFT",
    species: "Dionaea muscipula 'B52'",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    bulkTiers: [
      { label: "Medium · 10+ ea.", price: "$10" },
    ],
    shortDescription: "The most famous giant clone in the hobby. Mature traps exceed 2 inches, the plant clumps readily, and it grows fast. A must-have for any collection.",
    description: "B52 is one of the most famous Venus flytrap cultivars in the hobby, and probably the first giant clone most growers hear about. It was developed by Henning von Schmeling in Georgia as part of a larger breeding program, where 'B52' was simply his internal label for the plant (generation B, number 52, though he switched the labels with 13 and 52 IIRC because this clone was head and shoulders above the rest, and B52 had a better ring to it). The name stuck, and it's easy to see why. Mature traps can exceed 2 inches in length, roughly double the size of a typical flytrap, and the plant clumps readily, producing a dense carpet of oversized traps.\n\nIn good light, the trap interiors color up to a bright, vivid red while the petioles stay a clean green, making for a bold contrast. This is also a notably vigorous grower. Where some large-trapping clones can be fussy or slow, B52 puts on size quickly and tends to divide on its own, which is part of what has made it such a staple. If you're looking for a flytrap that makes an impression even from across the room, this is the one.\n\n",
    image: "images/b52-large.jpg",
    images: [
      { label: "Small",      file: "images/b52-small.jpg" },
      { label: "Medium",     file: "images/b52-medium.jpg" },
      { label: "Large",      file: "images/b52-large.jpg" },
      { label: "Specimen",   file: "images/b52-specimen.jpg" },
    ],
    status: "available",
  },

  {
    name: "FTS Maroon Monster VFT",
    species: "Dionaea muscipula 'FTS Maroon Monster' · ICPS Registered Cultivar",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    shortDescription: "One of the most sought-after red clones in the hobby. Fast-growing with oversized traps that color up to a deep maroon, almost purple-black in strong light. ICPS registered cultivar.",
    description: "This is an ICPS registered cultivar developed by Matt Miller through the Flytrap Store's breeding program, and it has become one of the most sought-after red clones in the hobby for good reason. Where most red Venus flytraps tend to be slow, finicky growers, Maroon Monster breaks the mold entirely. It grows fast, puts out thick and sturdy leaves, and produces oversized traps that color up to an incredible deep maroon, almost purple-black in strong light.\n\nThe contrast between those dark trap interiors and the bright lime-green edging along the trap margins is what really sets this clone apart visually. If you've grown Akai Ryu before and wished for something with more substance, bigger traps, and a more compact growth habit, this is the plant you've been looking for.\n\n",
    image: "images/maroon-monster-new.jpg",
    images: [
      { label: "Medium",         file: "images/maroon-monster-medium-packed.jpg" },
      { label: "Community Pot", file: "images/maroon-monster-primary.jpg"      },
    ],
    status: "available",
  },

  {
    name: "Unknown Giant VFT",
    species: "Dionaea muscipula · Unidentified Giant Clone",
    price: { small: "$10", medium: "$15", large: "$20" },
    shortDescription: "An unidentified giant clone that consistently outperforms many named cultivars: oversized traps, tall upright petioles, and outstanding vigor. Multiple available.",
    description: "Up for sale is one large Venus flytrap from a giant clone whose label was unfortunately lost. The plant pictured is representative of what you will receive: a mature specimen with solid rhizome development and traps that are already sizing up nicely for the season. Multiple available, first come first served.\n\nWHY THIS CLONE?\nI grow dozens of named cultivars, and this unidentified clone is among the most impressive performers in my entire collection. It produces oversized traps on tall, upright petioles with a strong, sturdy growth habit that gives the whole plant real presence. The traps color up easily in good light, developing rich red interiors without needing to be pushed hard, and the overall vigor of the plant is outstanding.\n\nThis is the kind of flytrap that makes people stop and look. The combination of trap size, upright stature, and reliable coloration puts it in rare company, and it has consistently outperformed many of the named giants I grow alongside it. If you're the type of grower who cares more about the plant in front of you than the name on the tag, this one will not disappoint.",
    image: "images/unknown-giant-1.jpg",
    images: [
      { label: "Community Pot", file: "images/unknown-giant-fertilizer.jpg" },
      { label: "For Scale",      file: "images/unknown-giant-oliver.jpg"     },
      { label: "Packed & Ready", file: "images/unknown-giant-packed.jpg"     },
      { label: "Plant",          file: "images/unknown-giant-1.jpg"          },
      { label: "Close-Up",       file: "images/unknown-giant-2.jpg"          },
    ],
    status: "available",
  },

  {
    name: "Specimen Typical VFT",
    species: "Dionaea muscipula · Typical",
    flatPrice: "$25",
    shortDescription: "Large, vigorous typical clones with big traps and well-developed rhizomes. These divide rapidly and are the source of our wholesale medium divisions.",
    description: "These are large, mature Venus flytraps grown from typical clones selected for vigor, trap size, and rhizome development. They are not named cultivars, but they perform like plants twice their price: big traps, strong constitutions, and a growth rate that keeps the community pots constantly overflowing.\n\nWHY TYPICALS?\nTypicals are underrated. The best ones produce traps that rival many named clones, and because they haven't been through years of hobbyist selection pressure for looks alone, they tend to be robust and forgiving growers. These particular plants are the source stock for our wholesale medium division program — we divide them repeatedly, they bounce back fast, and the cycle keeps going. A single specimen can realistically produce dozens of divisions per year under good conditions.\n\nIf you're looking to build a collection quickly, or just want a large, impressive plant that will reward neglect with vigorous growth, this is the place to start.",
    image: "images/typical-specimen-1.jpg",
    images: [
      { label: "Specimen",  file: "images/typical-specimen-1.jpg" },
      { label: "Close-Up",  file: "images/typical-specimen-2.jpg" },
    ],
    status: "available",
  },

  {
    name: "Red Piranha VFT",
    species: "Dionaea muscipula 'Red Piranha' · ICPS Registered Cultivar",
    price: { small: "$10", medium: "$15", large: "$20", specimen: "Inquire" },
    shortDescription: "ICPS registered sawtooth cultivar with chili-pepper-red traps, jagged teeth, and a striking golden-green margin. A hobby classic since 1999.",
    description: "Red Piranha is an ICPS registered cultivar developed by Ed Reed and first published in the Carnivorous Plant Newsletter back in 1999. It has been a staple of the hobby ever since. This is a red sawtooth type that produces bright, chili-pepper-red traps lined with short, jagged teeth that give the whole plant a distinctly piranha-like appearance.\n\nWhat really makes Red Piranha pop is the thick band of golden-green edging that runs along the trap margins just below those jagged teeth, contrasting against the deep red of the trap interior. As individual traps age, they tend to suffuse fully red, darkening over time. The plant grows upright with an open habit and colors up beautifully in strong light.\n\n",
    image: "images/red-piranha.jpg",
    images: [],
    status: "available",
  },

  {
    name: "Giant VFT",
    species: "Dionaea muscipula 'Giant'",
    price: { small: "$10", medium: "$15", large: "$20" },
    bulkTiers: [
      { label: "Medium · 10+ ea.", price: "$10" },
    ],
    shortDescription: "A large-trapping cultivar that does exactly what the name promises: oversized traps that color up to a vivid red in strong light, on a vigorous, upright plant that divides reliably.",
    description: "Giant is a large-trapping cultivar that does exactly what the name promises: oversized traps that color up to a vivid red in strong light, on a vigorous, upright plant that divides reliably. Not a novelty mutant — just a genuinely large, well-performing flytrap.",
    image: "images/giant.jpg",
    images: [],
    status: "new",
  },

  {
    name: "FTS Towering Giant VFT",
    species: "Dionaea muscipula 'FTS Towering Giant'",
    price: { small: "$10", medium: "$15", large: "$20" },
    bulkTiers: [
      { label: "Medium · 10+ ea.", price: "$10" },
    ],
    shortDescription: "Developed by Matt Miller, Towering Giant earns its name through extraordinarily tall, upright petioles that push large traps high into the air — one of the most architecturally dramatic flytraps you can grow.",
    description: "Developed by Matt Miller and named in 2014, Towering Giant earns its name through extraordinarily tall, upright petioles that push large traps high into the air — spring leaves can reach six inches or more. The coloration leans lime green to chartreuse with a contrasting red throat. One of the most architecturally dramatic flytraps in the hobby.",
    image: "images/towering-giant.jpg",
    images: [
      { label: "Full Plant", file: "images/towering-giant.jpg"          },
      { label: "Up Close",   file: "images/towering-giant-up-close.jpg" },
    ],
    status: "new",
  },

  {
    name: "Big Mouth VFT",
    species: "Dionaea muscipula 'Big Mouth'",
    price: { small: "$10", medium: "$15", large: "$20" },
    shortDescription: "A stunning clone. Big Mouth produces large, low-slung traps with vivid red-purple interiors, extraordinarily long and shapely cilia, and a wide-open, flat profile unlike anything else in the hobby.",
    description: "A stunning clone. First propagated in 1998 by Tony Camilleri, Big Mouth is defined by the exceptional width of its trap opening, vivid red-purple interior coloration, and extraordinarily long and shapely cilia that give the traps a striking, almost ornate appearance. Traps are carried on short petioles in a low, ground-hugging rosette. A plant that genuinely looks different from every other flytrap in a collection.",
    image: "images/big-mouth-nursery-tray.jpg",
    images: [
      { label: "Nursery Tray", file: "images/big-mouth-nursery-tray.jpg" },
      { label: "Up Close",     file: "images/big-mouth-up-close.jpg"     },
    ],
    status: "new",
  },

  {
    name: "Ginormous VFT",
    species: "Dionaea muscipula 'Ginormous' · ICPS Registered Cultivar",
    price: { small: "$10", medium: "$15", large: "$20" },
    shortDescription: "ICPS registered cultivar from Damon Collingsworth of California Carnivores. Traps rival B52 in size but on notably longer petioles, giving the plant a larger, more open stance with vivid candy-apple-red interiors.",
    description: "Ginormous is an ICPS registered cultivar bred by Damon Collingsworth of California Carnivores and officially registered in 2013. It earns its name: traps regularly reach 2.25 inches or more, putting it in the same tier as B52 for raw trap size. What sets it apart from B52 is the notably longer petioles, which give the plant a more open, sprawling stance and make the traps feel even more imposing. The interiors color up to a bright candy-apple red against lime-green petioles — bold, clean contrast. A vigorous grower that clumps readily and performs especially well outdoors.",
    image: "images/ginormous.jpg",
    images: [],
    status: "new",
  },

  {
    name: "<em>Drosera binata</em> var. multifida extrema",
    species: "Drosera binata var. multifida extrema",
    priceTiers: [
      { label: "1 Division",  price: "$12" },
      { label: "2 Divisions", price: "$20" },
    ],
    shortDescription: "One of the easiest and most rewarding sundews. Gets enormous, blooms freely, and is all but unkillable. Highly recommended for beginners and collectors alike.",
    description: "Up for sale are divisions of <em>Drosera binata</em> var. multifida extrema, one of the most spectacular and forgiving sundews you can grow. This variety produces a dense crown of forked, Y-shaped leaves that subdivide again and again into a mass of glistening, dew-covered tentacles. A mature plant in good light is a genuinely impressive sight.\n\nIn my experience, this plant is all but unkillable. I once ripped one apart while separating it from a Utricularia pot, shredded roots and all, and ended up with 15 new plants sprouting from the root fragments. That regenerative capacity is part of what makes it such a satisfying grower. It does not punish neglect, it rewards attention, and it practically propagates itself.\n\nGROWING\nGrow it like a Venus flytrap: pure peat or peat/perlite mix, mineral-free water (distilled, RO, or rain), and as much light as you can give it. It does well under grow lights or in a sunny window, and it tolerates a wide range of temperatures. It will reward good conditions with size and flower stalks, but it is remarkably tolerant of less-than-ideal setups.\n\nDivisions are shipped bare root.",
    image: "images/d-binata-multifida-extrema.jpg",
    images: [],
    status: "available",
  },

  {
    name: "<em>Stylidium debile</em> — Trigger Plant",
    species: "Stylidium debile",
    flatPrice: "$10",
    price: {},
    bulkTiers: [
      { label: "10 Plants", price: "$75" },
    ],
    shortDescription: "The trigger plant: its spring-loaded anther snaps down to smack pollinating insects in milliseconds. Easy to grow in pure peat, and irresistible for kids pretending to be bees.",
    description: "Up for sale are divisions of <em>Stylidium debile</em>, the trigger plant. This quirky Australian native has a party trick unlike anything else in the plant world: a spring-loaded anther column that snaps down and smacks any insect that lands on the flower, coating it in pollen in milliseconds. It's the fastest movement in the plant kingdom, and it never gets old to watch.\n\nKids absolutely love it. Have them pretend to be a bee, touch the flower column with a fingertip or toothpick, and watch it fire.\n\nGROWING\n<em>Stylidium debile</em> is easy. It thrives in pure peat moss kept consistently moist, the same conditions you'd use for a Venus flytrap or sundew. It tolerates a wide range of light levels and will bloom prolifically under grow lights or in a bright window, sending up wiry stalks tipped with small pink flowers. Each flower is a loaded trigger waiting to go off.\n\nDivisions are shipped bare root. Size is representative of plants shown in the divisions photo.",
    image: "images/stylidium-community.jpg",
    images: [
      { label: "Mature 3.5\" pot several months after a single division was added", file: "images/stylidium-community.jpg" },
      { label: "Divisions",      file: "images/stylidium-divisions.jpg" },
    ],
    status: "available",
  },

  {
    name: "<em>Utricularia alpina</em> — Mature Specimen",
    species: "Utricularia alpina",
    flatPrice: "$25",
    price: {},
    shortDescription: "A large, elegant epiphytic bladderwort growing in a bed of live sphagnum. Mature specimen with well-established stolons and stunning white flowers.",
    description: "Up for sale is a mature specimen of <em>Utricularia alpina</em>, one of the most elegant bladderworts in cultivation. This epiphytic species from the tropical Americas produces broad, strap-like leaves and stunning large white flowers with a yellow patch, striking enough to compete with any orchid on a windowsill. The plant is established in live sphagnum moss, with well-developed stolons running through the medium.\n\nWHY U. ALPINA?\nMost <em>Utricularia</em> are tiny, threadlike things that disappear into their pots. Alpina is the opposite: it grows large, makes a real presence, and when it blooms, it stops people in their tracks. The flowers are among the showiest in the genus, and a well-grown specimen in live sphagnum looks genuinely spectacular.\n\nGROWING\nGrow it just like a Venus flytrap or sundew: pot it in pure sphagnum and sit it in a tray of distilled or rain water. It does well under grow lights or in a bright window. Once established, it grows steadily and blooms reliably.",
    image: "images/u-alpina.jpg",
    images: [],
    status: "available",
  },

  {
    name: "<em>Utricularia calycifida</em> — Established Clump",
    species: "Utricularia calycifida",
    flatPrice: "$20",
    price: {},
    shortDescription: "Established clump in active growth with multiple flower stalks emerging. Bare root, ready to pot. Optional free Drosera binata hitchhiker; just mention your preference when ordering.",
    description: "Up for sale is an established clump of <em>Utricularia calycifida</em>, currently in active growth with multiple flower stalks emerging. The plant is shown growing in a 2.5\" pot for scale, and you will receive this exact specimen. As shown in the root photos, this clump has developed an impressive network of stolons and fine roots that fill the entire pot, and if you look closely you can see the tiny bladder traps studded throughout, the structures the plant uses to catch and digest microscopic prey in the soil. This kind of root and trap development is a clear sign of a healthy, vigorous plant that should settle in quickly after repotting and continue growing without missing a beat.\n\nAs a bonus, this purchase includes an optional free <em>Drosera binata</em> hitchhiker plant; just state your preference for one (or not) in your email when ordering.\n\nWHY U. CALYCIFIDA?\n<em>Utricularia calycifida</em> is a terrestrial bladderwort native to South America, and it is one of the best species in the genus for growers who want a plant that flowers reliably and looks great doing it. It produces delicate violet blooms on wiry stalks that rise well above the rosette of spoon-shaped leaves, often putting out multiple flower stalks at once. The flowers punch well above their weight for a plant this size.\n\nWhat makes this species particularly appealing is how easy it is to maintain compared to many tropical <em>Utricularia</em>. It does well on a bright windowsill or under grow lights, tolerates a range of humidity levels, and spreads steadily through underground stolons. It's a great entry point into the world of bladderworts for growers who are used to flytraps and sundews, and an equally good addition for experienced collectors looking for something that flowers without fuss.",
    image: "images/u-calycifida-flowers.jpg",
    images: [
      { label: "In Bloom",          file: "images/u-calycifida-flowers.jpg" },
      { label: "Root Ball",         file: "images/u-calycifida-root-ball.jpg" },
      { label: "Root Detail",       file: "images/u-calycifida-roots.jpg" },
      { label: "Growing Collection",file: "images/u-calycifida-pots.jpg" },
    ],
    status: "available",
  },

  {
    name: "Nutricote 360 + Fluval Bug Bites Fertilizer Kit",
    species: "1 lb Nutricote 18-6-8 · 2 oz Bug Bites Pellets",
    flatPrice: "$15",
    price: {},
    shortDescription: "Everything you need to supercharge your flytraps with the trap feeding method: 1 lb Nutricote 360 controlled-release fertilizer (18-6-8) and 2 oz Fluval Bug Bites pellets.",
    description: "Up for sale is 1 lb of Nutricote 360 controlled release fertilizer (18-6-8 with micronutrients) and 2 oz of Fluval Bug Bites pellets, a mix of insect and fish protein. This is everything you need to supercharge your flytraps using the trap feeding method described below. One pound of Nutricote is a lot of fertilizer: a single prill contains roughly the same amount of nutrient as 200 foliar feedings with 100ppm Maxsea, and you will have thousands of prills to work with. This will last most hobbyists a very long time.\n\nWHY NUTRICOTE?\nFeeding insects to your flytraps works, but the nutrient payload of a single bug is modest, especially for phosphorus and potassium, which are quite low in meat relative to nitrogen. Nutricote changes the equation. A single prill delivers 5 to 10 times the nutrient density of a typical insect, and because it is coated in a resin shell, those nutrients release slowly over time rather than all at once. Feed a prill into a trap and you are giving the plant a sustained, high-density nutrient drip straight through the leaf tissue. I have been getting biomass doubling times on the order of two and a half weeks with this method, and I have taken plants from seed to flowering size in about eight months. It basically removes nutrient limitation as a bottleneck and lets the plants luxury feed.\n\nHOW TO USE IT\nVenus flytraps will reject a dry fertilizer pellet as inorganic debris, so the Bug Bites are essential. Start by rehydrating as many Bug Bites pellets as you plan to feed traps. Pour boiling water over them for about 15 seconds, then decant. You are aiming for a play dough texture: firm and moldable, not spongy or wet. If the pellets feel sponge-like, they are too wet, and excess moisture in the trap can lead to rot.\n\nOnce your Bug Bites are at the right consistency, place one Nutricote prill and one rehydrated pellet into an open trap, then massage the trap gently for about 20 seconds to stimulate the trigger hairs and induce closure. The trap will seal and begin absorbing nutrients over the following days and weeks.\n\nThe occasional prill, maybe 1 in 10, will release too aggressively and burn the leaf. That is normal; just remove the dead trap. The rest will deliver a sustained flow of NPK and micronutrients directly into the plant, fueling growth at a rate that insect feeding alone cannot touch.\n\nNote: Nutricote 360 is not the same thing as Osmocote. Osmocote releases far too quickly and will burn the traps. The 360-day Nutricote formula is gentle enough that the vast majority of traps handle it without issue.",
    image: "images/fertilizer-product.jpg",
    images: [
      { label: "Before",        file: "images/fertilizer-before.jpg" },
      { label: "After 1 Month", file: "images/fertilizer-after.jpg" },
      { label: "The Kit",       file: "images/fertilizer-product.jpg" },
    ],
    videoLink: "https://www.instagram.com/p/DU6h58gCRjB/",
    status: "available",
  },

];

// ================================================================
//  BULK PLANTS  —  Quantity-priced listings shown in the
//  "Bulk & Wholesale" section at the bottom of the page.
//
//  Same fields as above, but use priceTiers instead of price:
//    priceTiers: [
//      { label: "5 Plants",  price: "$30" },
//      { label: "20 Plants", price: "$60" },
//    ]
// ================================================================

const bulkPlants = [];
