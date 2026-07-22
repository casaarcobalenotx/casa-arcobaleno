export type Service = {
  title: string;
  slug: string;
  href: string;
  shortDescription: string;
  intro: string;
  description: string;
  who: string;
  examples: string[];
  how: string[];
  idealFor: string[];
  image: string;
  alt: string;
};

export const site = {
  name: "Casa Arcobaleno",
  email: "casa.arcobalenotx@gmail.com",
  location: "Austin, Texas",
  tagline: "Thoughtful support for your home, family, and everyday life.",
  description:
    "Casa Arcobaleno helps busy families, professionals, and homeowners simplify their lives through thoughtful home, family, and lifestyle support throughout Austin."
};

export const services: Service[] = [
  {
    title: "Home Organization",
    slug: "home-organization",
    href: "/services/home-organization",
    shortDescription: "Calm, functional systems for kitchens, closets, playrooms, entries, and storage areas.",
    intro: "Create spaces that feel beautiful, practical, and easier to maintain.",
    description:
      "Casa Arcobaleno brings thoughtful structure to the parts of your home that carry the most daily pressure. Each project is shaped around how you really live, not a one-size-fits-all method.",
    who: "Families, professionals, new homeowners, and anyone ready for a calmer home.",
    examples: ["Pantries", "Closets", "Entryways", "Kitchens", "Laundry rooms", "Storage areas"],
    how: ["Sort and edit belongings", "Create intuitive categories", "Set up maintainable systems"],
    idealFor: ["Busy homes", "Seasonal resets", "Life transitions", "Overwhelming storage spaces"],
    image: "/images/pantry-organization.webp",
    alt: "Warm organized pantry with baskets, jars, and natural wood shelving"
  },
  {
    title: "Packing & Moving Support",
    slug: "packing-moving",
    href: "/services/packing-moving",
    shortDescription: "Support before, during, and after a move so the transition feels lighter.",
    intro: "Move with less overwhelm and more thoughtful support at every step.",
    description:
      "From preparing a family home to unpacking a new space, Casa Arcobaleno helps coordinate the details that make moving smoother, calmer, and more organized.",
    who: "Households preparing to move, families settling into Austin, and professionals with limited time.",
    examples: ["Packing plans", "Room-by-room packing", "Unpacking", "Move-in setup", "Donation coordination", "Supply lists"],
    how: ["Understand your timeline", "Plan the project by room", "Pack, unpack, and reset the essentials"],
    idealFor: ["Family moves", "Apartment moves", "Busy professionals", "Move-in organization"],
    image: "/images/packing-boxes.webp",
    alt: "Hands carefully packing ceramics into a moving box with neutral packing materials"
  },
  {
    title: "Cleaning & Home Reset",
    slug: "cleaning-home-reset",
    href: "/services/cleaning-home-reset",
    shortDescription: "Home reset support and trusted cleaning coordination for a fresher everyday rhythm.",
    intro: "Refresh the spaces that need attention without managing every detail yourself.",
    description:
      "Casa Arcobaleno can help coordinate trusted local cleaning support, prepare your home for guests, reset spaces after busy seasons, and bring order back to everyday rooms.",
    who: "Homes preparing for guests, returning from travel, or needing a thoughtful reset.",
    examples: ["Cleaning coordination", "Guest-ready resets", "Post-event resets", "Laundry room refreshes", "Kitchen resets", "Surface styling"],
    how: ["Clarify your priorities", "Coordinate the right support", "Reset the home with thoughtful finishing touches"],
    idealFor: ["Hosting preparation", "Seasonal resets", "Post-move refreshes", "Busy households"],
    image: "/images/home-reset.webp",
    alt: "Warm living room after a home reset with folded throw and natural greenery"
  },
  {
    title: "Events",
    slug: "events",
    href: "/services/events",
    shortDescription: "Thoughtful support for intimate gatherings, resident events, and family-friendly experiences.",
    intro: "Create gatherings that feel warm, polished, and easy to enjoy.",
    description:
      "Casa Arcobaleno supports small events with planning, setup, activity styling, coordination, and day-of details for homes and apartment communities.",
    who: "Private hosts, families, apartment communities, and small teams planning meaningful gatherings.",
    examples: ["Apartment community events", "Craft tables", "Family gatherings", "Setup and styling", "Vendor coordination", "Day-of support"],
    how: ["Define the event vision", "Coordinate materials and support", "Set up the details with care"],
    idealFor: ["Resident events", "Small celebrations", "Family activities", "Community gatherings"],
    image: "/images/apartment-event.webp",
    alt: "Elegant apartment community event table with flowers, craft materials, and warm lighting"
  },
  {
    title: "Family & Childcare Support",
    slug: "family-childcare",
    href: "/services/family-childcare",
    shortDescription: "Practical family support, child-focused activities, and extra hands when life is full.",
    intro: "Reliable help for the moving pieces of family life.",
    description:
      "Casa Arcobaleno offers warm, practical assistance for families who need thoughtful support around children, activities, home routines, and special moments.",
    who: "Families balancing work, home responsibilities, events, and busy calendars.",
    examples: ["Child-focused activities", "Family event support", "Routine support", "Activity setup", "Household errands", "After-school help coordination"],
    how: ["Listen to your family rhythm", "Create a simple support plan", "Provide calm help where it matters most"],
    idealFor: ["Busy parents", "Special events", "School-year transitions", "Family routines"],
    image: "/images/family-craft-table.webp",
    alt: "Organized family-friendly craft table with natural materials and soft colors"
  },
  {
    title: "Personal Assistance",
    slug: "personal-assistance",
    href: "/services/personal-assistance",
    shortDescription: "Errands, planning, household coordination, and detail management for busy lives.",
    intro: "Let someone thoughtful handle the details that keep piling up.",
    description:
      "Casa Arcobaleno helps clients keep everyday life moving with personal assistance, home coordination, errands, vendor communication, and project planning.",
    who: "Professionals, families, homeowners, and anyone who needs trusted help staying organized.",
    examples: ["Errands", "Vendor scheduling", "Home project coordination", "Gift planning", "Appointment support", "Household admin"],
    how: ["Share what would make life easier", "Receive a clear support plan", "Let Casa Arcobaleno manage the details"],
    idealFor: ["Full calendars", "Home projects", "Life transitions", "Recurring support"],
    image: "/images/personal-assistant-planning.webp",
    alt: "Elegant home office planning scene with notebook, closed laptop, flowers, and coffee"
  }
];

export const gallery = [
  { title: "Pantry Organization", category: "Organization", image: "/images/pantry-organization.webp", alt: services[0].alt },
  { title: "Closet Organization", category: "Organization", image: "/images/closet-organization.webp", alt: "Beautiful organized closet with neutral clothing, linen bins, and wood hangers" },
  { title: "Packing a Family Home", category: "Packing", image: "/images/packing-boxes.webp", alt: services[1].alt },
  { title: "Move-In Setup", category: "Unpacking", image: "/images/move-in-setup.webp", alt: "Elegant move-in kitchen setup with boxes, linens, flowers, and organized counters" },
  { title: "Home Reset", category: "Cleaning", image: "/images/home-reset.webp", alt: services[2].alt },
  { title: "Apartment Community Event", category: "Events", image: "/images/apartment-event.webp", alt: services[3].alt },
  { title: "Family Activity Table", category: "Family Support", image: "/images/family-craft-table.webp", alt: services[4].alt },
  { title: "Personal Assistant Project", category: "Organization", image: "/images/personal-assistant-planning.webp", alt: services[5].alt }
];

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];
