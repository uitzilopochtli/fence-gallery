// Fence Types Data - Updated with Real Images + Aluminum
const fenceTypes = [
    {
        id: 1,
        name: "Cedar Solid Dog Ear with Cedar Posts",
        category: "wood",
        images: [
            "images/cedar-dog-ear-cedar-posts-1_jpg.jpg",
            "images/cedar-dog-ear-cedar-posts-2_jpg.jpg"
        ],
        description: "Classic solid cedar dog ear privacy fence with traditional cedar posts. Provides complete privacy with the timeless dog ear picket style.",
        materials: {
            pickets: "Premium Cedar",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws - NOT nails like many companies use. This ensures superior holding power and eliminates nail pops.",
        pros: [
            "Natural wood beauty and cedar aroma",
            "100% privacy coverage",
            "Timeless dog ear style",
            "Cedar naturally resists rot and insects"
        ],
        cons: [
            "Cedar posts require replacement in 8-10 years (Chicago weather)",
            "Requires staining/sealing every 2-3 years",
            "Posts can rot at ground level from freeze-thaw cycles"
        ],
        maintenance: "Stain or seal every 2-3 years. Inspect posts annually for rot.",
        priceRange: "$$"
    },
    {
        id: 2,
        name: "Cedar Solid Dog Ear with Post Master (Galvanized Steel)",
        category: "wood",
        images: [
            "images/cedar-dog-ear-steel-posts-1_jpg.jpg",
            "images/cedar-dog-ear-steel-posts-2_jpg.jpg",
            "images/postmaster.JPG"
        ],
        description: "Premium cedar dog ear fence with galvanized steel Post Master system. Best of both worlds: natural wood beauty with commercial-grade steel durability.",
        materials: {
            pickets: "Premium Cedar",
            rails: "Cedar",
            posts: "Galvanized Steel (Post Master System)"
        },
        construction: "Built with coated screws - NOT nails. Steel posts set in concrete never rot, eliminating the #1 failure point of wood fences.",
        pros: [
            "Posts NEVER rot - steel handles Chicago weather perfectly",
            "Fence lasts 20+ years instead of 10",
            "No post replacement costs down the road",
            "Stronger in high winds",
            "If pickets need replacing in 20 years, posts stay",
            "Saves thousands in long-term maintenance"
        ],
        cons: [
            "Higher upfront cost than cedar posts",
            "Still requires picket staining every 2-3 years"
        ],
        maintenance: "Stain or seal pickets every 2-3 years. Posts require ZERO maintenance.",
        priceRange: "$$$",
        recommended: true,
        badge: "BEST VALUE"
    },
    {
        id: 3,
        name: "Cedar Traditional with Cedar Posts",
        category: "wood",
        images: [
            "images/cedar-traditional-cedar-1_jpg.jpg"
        ],
        description: "Classic cedar board-on-board traditional fence with flat-top pickets and cedar posts. Elegant straight-line appearance.",
        materials: {
            pickets: "Premium Cedar (flat-top)",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws - NOT nails. Superior holding power and durability.",
        pros: [
            "Clean, elegant flat-top design",
            "100% privacy",
            "Natural cedar beauty",
            "Board-on-board construction for strength"
        ],
        cons: [
            "Cedar posts rot in 8-10 years",
            "Requires regular staining",
            "Posts vulnerable to Chicago freeze-thaw"
        ],
        maintenance: "Stain every 2-3 years. Monitor posts for ground-level rot.",
        priceRange: "$$"
    },
    {
        id: 4,
        name: "Cedar Board-on-Batten (Vertical with Battens) with Cedar Posts",
        category: "wood",
        images: [
            "images/Board_on_Batten_cedar_posts.jfif"
        ],
        description: "Premium cedar board-on-batten fence with vertical boards and decorative battens. More labor-intensive design creates dimensional, upscale appearance.",
        materials: {
            boards: "Premium Cedar (vertical)",
            battens: "Cedar (decorative vertical strips)",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws - NOT nails. Battens add dimensional character and require precise installation.",
        pros: [
            "Distinctive architectural look",
            "Dimensional appearance adds visual interest",
            "100% privacy",
            "Natural cedar beauty",
            "Upscale appearance"
        ],
        cons: [
            "Cedar posts rot in 8-10 years",
            "More expensive due to additional labor",
            "Requires staining every 2-3 years",
            "Battens need individual attention when staining"
        ],
        maintenance: "Stain every 2-3 years including all battens. Monitor posts.",
        priceRange: "$$$"
    },
    {
        id: 5,
        name: "Cedar Traditional with Post Master (Galvanized Steel)",
        category: "wood",
        images: [
            "images/Traditional-Cedar-W-Posts-Master.jpg",
            "images/postmaster.JPG"
        ],
        description: "Premium cedar traditional board-on-board fence with galvanized steel Post Master system. Natural beauty meets lifetime durability.",
        materials: {
            pickets: "Premium Cedar (flat-top)",
            rails: "Cedar",
            posts: "Galvanized Steel (Post Master System)"
        },
        construction: "Built with coated screws - NOT nails. Steel posts provide ultimate durability while maintaining classic wood appearance.",
        pros: [
            "Posts NEVER rot - handles any Chicago weather",
            "20+ year fence lifespan",
            "No post replacement costs ever",
            "Elegant traditional appearance",
            "Stronger than wood posts in storms"
        ],
        cons: [
            "Higher upfront cost",
            "Pickets still require staining"
        ],
        maintenance: "Stain pickets every 2-3 years. Posts are maintenance-free forever.",
        priceRange: "$$",
        recommended: true,
        badge: "BEST VALUE"
    },
    {
        id: 6,
        name: "Cedar Board-on-Batten with Post Master (Galvanized Steel)",
        category: "wood",
        images: [
            "images/Board_on_Batten_With_Posts_Master.jpg",
            "images/postmaster.JPG"
        ],
        description: "Premium board-on-batten fence with galvanized steel Post Master system. Architectural design with posts that never rot.",
        materials: {
            boards: "Premium Cedar (vertical)",
            battens: "Cedar (decorative vertical strips)",
            rails: "Cedar",
            posts: "Galvanized Steel (Post Master System)"
        },
        construction: "Built with coated screws - NOT nails. Steel posts combined with dimensional batten design for ultimate quality.",
        pros: [
            "Posts NEVER rot - 20+ year lifespan",
            "Distinctive architectural appearance",
            "No post replacement costs",
            "Handles Chicago weather perfectly",
            "Premium dimensional look"
        ],
        cons: [
            "Premium pricing",
            "Boards and battens require staining",
            "More labor-intensive"
        ],
        maintenance: "Stain boards and battens every 2-3 years. Posts maintenance-free.",
        priceRange: "$$$"
    },
    {
        id: 7,
        name: "Cedar Traditional with Black Coated Galvanized Posts",
        category: "wood",
        images: [
            "images/Board_on_Batten_With_Black_Metal_posts.jfif",
            "images/Cedar_Traditional_with_Black_Coated_Galvanized_Posts-1_jpj.jpg"
        ],
        description: "Premium cedar traditional fence with black powder-coated galvanized steel posts. Modern aesthetic meets commercial durability.",
        materials: {
            pickets: "Premium Cedar (flat-top)",
            rails: "Cedar",
            posts: "Black Powder-Coated Galvanized Steel"
        },
        construction: "Built with coated screws. Black steel posts provide stunning modern look with ultimate durability.",
        pros: [
            "Sleek black posts create modern, upscale appearance",
            "Posts NEVER rot - handles any weather",
            "Extra corrosion protection from powder coating",
            "UV-resistant coating won't fade",
            "Perfect for contemporary homes",
            "20+ year lifespan"
        ],
        cons: [
            "Premium price point",
            "Pickets still require staining"
        ],
        maintenance: "Stain pickets every 2-3 years. Posts are maintenance-free forever.",
        priceRange: "$$$$",
        badge: "PREMIUM"
    },
    {
        id: 8,
        name: "Cedar Board-on-Batten with Black Coated Galvanized Posts",
        category: "wood",
        images: [
            "images/Board_on_Batten_With_Black_Metal_posts.jfif"
        ],
        description: "Ultimate board-on-batten fence with black powder-coated steel posts. Architectural luxury meets lifetime durability.",
        materials: {
            boards: "Premium Cedar (vertical)",
            battens: "Cedar (decorative vertical strips)",
            rails: "Cedar",
            posts: "Black Powder-Coated Galvanized Steel"
        },
        construction: "Built with coated screws. Black steel posts create dramatic modern look with dimensional cedar design.",
        pros: [
            "Stunning modern architectural design",
            "Posts never rot - lifetime durability",
            "Black posts create dramatic visual impact",
            "Perfect for luxury contemporary homes",
            "Dimensional batten design adds character"
        ],
        cons: [
            "Highest price tier",
            "Requires staining boards and battens",
            "Premium labor and materials cost"
        ],
        maintenance: "Stain boards and battens every 2-3 years. Posts maintenance-free.",
        priceRange: "$$$$",
        badge: "LUXURY"
    },
    {
        id: 9,
        name: "Cedar Shadow Box with Cedar Posts",
        category: "wood",
        images: [
            "images/cedar-shadowbox-cedar-1_jpg.jpg"
        ],
        description: "Beautiful cedar shadow box design with alternating pickets. Provides privacy while allowing airflow. Good-looking on BOTH sides.",
        materials: {
            pickets: "Premium Cedar (alternating pattern)",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws. Shadow box design requires precise craftsmanship - pickets alternate for dimensional appearance.",
        pros: [
            "Attractive on both sides (no 'bad' side)",
            "Better airflow than solid fence",
            "Dimensional, elegant appearance",
            "Good neighbor fence - both sides look finished"
        ],
        cons: [
            "Less privacy than solid (small gaps between pickets)",
            "Cedar posts rot in 8-10 years",
            "More labor-intensive = higher cost",
            "Requires staining both sides"
        ],
        maintenance: "Stain both sides every 2-3 years. Check posts annually.",
        priceRange: "$$$"
    },
    {
        id: 10,
        name: "Cedar Shadow Box with Post Master (Galvanized Steel)",
        category: "wood",
        images: [
            "images/cedar-shadowbox-steel-1_jpg.jpg",
            "images/postmaster.JPG"
        ],
        description: "Premium shadow box fence with galvanized steel Post Master system. Beautiful on both sides with posts that last forever.",
        materials: {
            pickets: "Premium Cedar (alternating pattern)",
            rails: "Cedar",
            posts: "Galvanized Steel (Post Master System)"
        },
        construction: "Built with coated screws. Steel posts eliminate the main failure point while maintaining elegant shadow box design.",
        pros: [
            "Beautiful both sides + posts that never rot",
            "20+ year fence lifespan",
            "Handles Chicago weather perfectly",
            "Good airflow and dimensional look",
            "No post replacement costs ever"
        ],
        cons: [
            "Premium price (worth it for longevity)",
            "Less privacy than solid fence",
            "Must stain both sides"
        ],
        maintenance: "Stain pickets (both sides) every 2-3 years. Posts maintenance-free.",
        priceRange: "$$$$",
        recommended: true
    },
    {
        id: 11,
        name: "Cedar Shadow Box with Black Coated Galvanized Posts",
        category: "wood",
        images: [
            "images/Cedar_Shadow_Box_with_Black_Coated_Galvanized_Posts-.jpg"
        ],
        description: "Ultimate shadow box fence with black powder-coated steel posts. Modern luxury meets lifetime durability.",
        materials: {
            pickets: "Premium Cedar (alternating pattern)",
            rails: "Cedar",
            posts: "Black Powder-Coated Galvanized Steel"
        },
        construction: "Built with coated screws. Premium black posts create stunning contrast with natural cedar.",
        pros: [
            "Absolutely stunning modern aesthetic",
            "Posts never rot - lifetime durability",
            "UV-resistant black coating",
            "Architectural-grade appearance",
            "Perfect for upscale properties"
        ],
        cons: [
            "Highest price point",
            "Staining required both sides",
            "Less privacy than solid"
        ],
        maintenance: "Stain pickets every 2-3 years. Posts require zero maintenance.",
        priceRange: "$$$$$",
        badge: "LUXURY"
    },
    {
        id: 12,
        name: "Cedar with Diamond Lattice Top and Cedar Posts",
        category: "wood",
        images: [
            "images/Cedar_with_Diamond_Lattice_Top_and_Cedar_Posts__1_.jfif"
        ],
        description: "Elegant cedar privacy fence with decorative diamond lattice top. Adds height and visual interest while maintaining privacy.",
        materials: {
            pickets: "Premium Cedar",
            lattice: "Cedar Diamond Pattern",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws. Lattice sections carefully integrated for decorative appeal.",
        pros: [
            "Beautiful decorative accent",
            "Adds extra height without being imposing",
            "Classic, elegant design",
            "Great for backyard entertaining areas"
        ],
        cons: [
            "Cedar posts rot in 8-10 years",
            "Lattice requires more maintenance",
            "Lattice can trap debris",
            "Higher cost due to additional materials"
        ],
        maintenance: "Stain every 2-3 years including lattice. Clean debris from lattice regularly.",
        priceRange: "$$$"
    },
    {
        id: 13,
        name: "Cedar with Square Lattice Top and Cedar Posts",
        category: "wood",
        images: [
            "images/Cedar_with_Square_Lattice_Top_and_Cedar_Posts.jfif"
        ],
        description: "Traditional cedar fence with square lattice top panel. Clean, geometric look adds decorative height.",
        materials: {
            pickets: "Premium Cedar",
            lattice: "Cedar Square Pattern",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws. Square lattice provides modern geometric accent.",
        pros: [
            "Modern geometric design",
            "Adds height and visual interest",
            "Cleaner look than diamond lattice",
            "Good for contemporary homes"
        ],
        cons: [
            "Cedar posts rot in 8-10 years",
            "Lattice maintenance required",
            "More expensive than standard fence"
        ],
        maintenance: "Stain every 2-3 years. Inspect lattice for damage.",
        priceRange: "$$$"
    },
    {
        id: 14,
        name: "Treated Pine Dog Ear with Cedar Posts",
        category: "wood",
        images: [
            "images/Treated_Pine_Dog_Ear_with_Cedar_Posts-1.jpg"
        ],
        description: "Budget-friendly treated pine dog ear fence with cedar posts and rails. We use cedar posts and rails because treated posts/rails warp easily.",
        materials: {
            pickets: "Pressure-Treated Pine",
            rails: "Cedar (resists warping)",
            posts: "Cedar (resists warping)"
        },
        construction: "Built with coated screws. We specifically use cedar posts/rails with treated pickets because treated posts and rails warp badly.",
        pros: [
            "Most budget-friendly wood option",
            "Pressure treatment resists rot",
            "Cedar posts/rails prevent warping issues",
            "Good for temporary fencing or rentals"
        ],
        cons: [
            "Not as attractive as cedar",
            "Green tint when new (weathers to gray)",
            "Cedar posts still rot in 8-10 years",
            "Treated wood can have chemical smell initially"
        ],
        maintenance: "Can leave natural to weather gray, or stain every 2-3 years.",
        priceRange: "$"
    },
    {
        id: 15,
        name: "Treated Pine Shadow Box with Cedar Posts",
        category: "wood",
        images: [
            "images/Treated_Pine_Shadow_Box_with_Cedar_Posts-1_jpg.jfif"
        ],
        description: "Budget shadow box fence using treated pine with cedar posts/rails to prevent warping. Good-looking both sides.",
        materials: {
            pickets: "Pressure-Treated Pine (alternating)",
            rails: "Cedar (resists warping)",
            posts: "Cedar (resists warping)"
        },
        construction: "Built with coated screws. Cedar posts/rails prevent warping that occurs with treated lumber.",
        pros: [
            "Affordable shadow box option",
            "Attractive on both sides",
            "Better airflow than solid",
            "Treated pickets resist decay"
        ],
        cons: [
            "Green tint when new",
            "Cedar posts rot in 8-10 years",
            "More expensive than solid pine",
            "Less attractive than all-cedar"
        ],
        maintenance: "Optional staining. Cedar components need monitoring.",
        priceRange: "$$"
    },
    {
        id: 16,
        name: "Cedar Horizontal with Cedar Posts",
        category: "wood",
        images: [
            "images/cedar-horizontal-cedar-1_jpg.jpg"
        ],
        description: "Modern horizontal cedar fence with contemporary clean lines. Popular with modern and ranch-style homes.",
        materials: {
            boards: "Premium Cedar (horizontal orientation)",
            frame: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws. Horizontal boards require precise installation for clean, modern appearance.",
        pros: [
            "Stunning modern aesthetic",
            "Expands visual space (horizontal lines)",
            "Perfect for contemporary homes",
            "Unique, architectural look"
        ],
        cons: [
            "Cedar posts rot in 8-10 years",
            "Higher labor cost (more precise installation)",
            "Requires staining both sides",
            "Can be more expensive"
        ],
        maintenance: "Stain both sides every 2-3 years. Monitor posts.",
        priceRange: "$$$"
    },
    {
        id: 17,
        name: "Cedar Horizontal with Black Coated Galvanized Posts",
        category: "wood",
        images: [
            "images/cedar-horizontal-black-1_jpg.jpg"
        ],
        description: "Ultimate modern horizontal fence with black powder-coated steel posts. Architectural masterpiece that lasts forever.",
        materials: {
            boards: "Premium Cedar (horizontal orientation)",
            frame: "Cedar",
            posts: "Black Powder-Coated Galvanized Steel"
        },
        construction: "Built with coated screws. Black steel posts create dramatic contrast with natural cedar horizontal boards.",
        pros: [
            "Absolutely stunning modern design",
            "Posts never rot - lifetime durability",
            "Black posts create dramatic visual impact",
            "Perfect for luxury modern homes",
            "Handles Chicago weather perfectly",
            "Architectural-grade appearance"
        ],
        cons: [
            "Premium price (highest tier)",
            "Requires staining both sides",
            "Higher labor cost"
        ],
        maintenance: "Stain cedar boards every 2-3 years. Posts maintenance-free forever.",
        priceRange: "$$$$$",
        badge: "SIGNATURE",
        recommended: true
    },
    {
        id: 18,
        name: "Traditional Picket Fence 4ft with Cedar Posts",
        category: "wood",
        images: [
            "images/Traditional_Picket_Fence_4ft_with_Cedar_Posts-1_jpg.jpg",
            "images/Spaced-Picket-Fence.jpg"
        ],
        description: "Classic American picket fence at 4 feet height. Perfect for front yards, gardens, or decorative boundaries.",
        materials: {
            pickets: "Premium Cedar (pointed or flat top)",
            rails: "Cedar",
            posts: "Cedar (4x4)"
        },
        construction: "Built with coated screws - NOT nails. Provides charm without blocking views.",
        pros: [
            "Timeless classic American look",
            "Defines boundary without blocking views",
            "Perfect for front yards",
            "Pet and child containment for small dogs/kids",
            "Welcomes visitors while marking property"
        ],
        cons: [
            "No privacy (open design)",
            "Won't contain large dogs",
            "Cedar posts rot in 8-10 years",
            "Not for security"
        ],
        maintenance: "Stain every 2-3 years. Monitor posts.",
        priceRange: "$$"
    },
    {
        id: 19,
        name: "Vinyl Privacy Fence (White, Tan, and Color Options)",
        category: "vinyl",
        images: [
            "images/6-Ht_-Viny-Tan-Vinyl-Fence-Chicago_-1.jpg",
            "images/Lowes_Vinyl_Fence.jpg",
            "images/Whit_Vinyl_Fence.jfif",
            "images/Vinyl-Khaki-Fence_-1.jpg",
            "images/Vinyl_Brazilian_Blend.jpg",
            "images/Vinyl_W_Lattice.jpg"
        ],
        description: "Premium vinyl privacy fence available in multiple colors: White, Tan/Beige, Brazilian Walnut, and more. The ultimate set-it-and-forget-it option. Never needs painting, staining, or sealing.",
        materials: {
            panels: "Virgin Vinyl (UV-protected, multiple colors)",
            posts: "Vinyl (reinforced)",
            hardware: "Stainless steel"
        },
        construction: "Professional vinyl installation with reinforced posts set in concrete. ZERO maintenance required. Available with lattice top accent for decorative appeal.",
        pros: [
            "ZERO maintenance - spray with hose once a year",
            "Never rots, warps, or splinters",
            "Will look new 20+ years from now",
            "No painting or staining EVER",
            "Won't fade or peel",
            "Perfect for busy families",
            "Increases home value",
            "Great for resale - buyers love low maintenance",
            "Multiple color options to match any home",
            "White stays bright, tan hides dirt better"
        ],
        cons: [
            "Higher upfront cost than wood (about 30-40% more)",
            "Can't change color later",
            "Can crack in extreme cold (rare)",
            "Less natural look than wood"
        ],
        maintenance: "Spray with garden hose annually. That's it.",
        priceRange: "$$$$",
        recommended: true,
        badge: "ZERO MAINTENANCE",
        notes: "Available colors: Classic White, Tan/Khaki/Beige, Brazilian Walnut Brown, and custom colors. Optional lattice top available for decorative accent."
    },
    {
        id: 20,
        name: "Aluminum Ornamental Fence (4ft & 5ft Heights)",
        category: "aluminum",
        images: [
            "images/aluminum_fence_flat_top.jpeg",
            "images/Aluminum_Fence_gate.jpeg",
            "images/aluminum_fence_spear.jpeg",
            "images/Aluminum_Flat_top_2.jpg"
        ],
        description: "Premium powder-coated aluminum ornamental fencing available in 4-foot and 5-foot heights. Combines the elegant look of wrought iron with modern durability and zero rust. Perfect for front yards, pool enclosures, and decorative boundaries.",
        materials: {
            pickets: "Powder-Coated Aluminum (flat-top or spear-top)",
            rails: "Aluminum",
            posts: "Aluminum (reinforced)"
        },
        construction: "Commercial-grade aluminum with durable powder-coated finish. Available in flat-top (contemporary) or spear-top (traditional) styles. All hardware is rust-resistant.",
        pros: [
            "NEVER rusts - aluminum won't corrode like iron",
            "Virtually maintenance-free - no painting needed",
            "Elegant ornamental appearance",
            "Stronger and more durable than wrought iron",
            "Powder coating won't chip or peel",
            "Available in black (most popular) or custom colors",
            "Perfect for pool code compliance",
            "Lighter weight = easier installation",
            "Great for front yards and decorative applications",
            "Won't rot, warp, or deteriorate"
        ],
        cons: [
            "No privacy (open design)",
            "Higher cost than chain link",
            "Can be dented by heavy impact (rare)",
            "Not for security applications"
        ],
        maintenance: "Virtually zero maintenance. Occasional hosing off to remove dirt. Powder coating lasts 20+ years.",
        priceRange: "$$$",
        badge: "ELEGANT",
        notes: "Available in 4-foot and 5-foot heights. Flat-top style for contemporary homes, spear-top for traditional elegance. Black is standard; custom colors available. Ideal for pool enclosures (meets code), front yards, side yards, and decorative boundaries. Gates available with self-closing hinges for pool safety."
    },
    {
        id: 21,
        name: "Chain Link Fence (Galvanized and Black Coated)",
        category: "chain-link",
        images: [
            "images/Galvanized_Chain_link_fence.jpg",
            "images/Black_Coated_chain_Link_fence.jpg"
        ],
        description: "Classic chain link fencing available in galvanized (silver) or black vinyl-coated. Most affordable option for secure pet/child containment and property boundaries.",
        materials: {
            mesh: "Galvanized steel or Black vinyl-coated (rust-resistant)",
            posts: "Galvanized steel or Black coated",
            top_rail: "Galvanized steel or Black coated"
        },
        construction: "Commercial-grade chain link with galvanized or black vinyl coating for rust protection. Available in various heights. Black coated option provides more upscale appearance.",
        pros: [
            "Most budget-friendly option",
            "Excellent for pet containment",
            "Low maintenance",
            "Durable and long-lasting",
            "See-through design maintains openness",
            "Good for backyards and side yards",
            "Won't block breezes or light",
            "Black coated looks more upscale than silver"
        ],
        cons: [
            "No privacy (completely see-through)",
            "Utilitarian appearance (not decorative)",
            "Won't match homes wanting curb appeal",
            "Can rust over time (galvanized coating wears)",
            "Not ideal for front yards"
        ],
        maintenance: "Minimal - inspect for damage annually. Black coating may last longer than galvanized.",
        priceRange: "$",
        notes: "Privacy slats can be added for partial privacy at additional cost. Black vinyl-coated option available for more attractive appearance."
    }
];

// Available filters
const categories = {
    all: "All Fences",
    wood: "Wood Fences",
    vinyl: "Vinyl Fences",
    aluminum: "Aluminum Fences",
    "chain-link": "Chain Link"
};
