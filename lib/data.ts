export type Project = {
  num: string;
  name: string;
  featured: boolean;
  url: string;
  domain: string;
  description: string;
  tags: string[];
  thumbKind: 'opal' | 'kurom' | 'mina' | 'motexiz' | 'tourghana' | 'chezkeke';
};

export const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'Opal Edge Wellness',
    featured: true,
    url: 'https://opaledgewellness.vercel.app',
    domain: 'opaledgewellness.vercel.app',
    description: 'International skincare e-commerce store. Full customer portal, wishlist, cart, admin dashboard, and 12 product categories with 240+ products.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'E-commerce'],
    thumbKind: 'opal',
  },
  {
    num: '02',
    name: 'Kurom',
    featured: false,
    url: 'https://kurom.vercel.app',
    domain: 'kurom.vercel.app',
    description: 'Gadget e-commerce store with product listings, cart, newsletter, and subscription pricing plans.',
    tags: ['Next.js', 'React', 'E-commerce'],
    thumbKind: 'kurom',
  },
  {
    num: '03',
    name: "Mina's Haus",
    featured: false,
    url: 'https://minashauss.vercel.app',
    domain: 'minashauss.vercel.app',
    description: 'Home and business service booking platform covering 6 service categories with a verified professional dispatch system.',
    tags: ['Next.js', 'Tailwind CSS', 'Booking Platform'],
    thumbKind: 'mina',
  },
  {
    num: '04',
    name: 'Motexiz',
    featured: false,
    url: 'https://motexiz.vercel.app',
    domain: 'motexiz.vercel.app',
    description: 'Trusted car rental platform with a curated vehicle inventory and a smooth browse-to-book customer experience.',
    tags: ['Next.js', 'Tailwind CSS', 'Car Rental'],
    thumbKind: 'motexiz',
  },
  {
    num: '05',
    name: 'Tour Ghana',
    featured: false,
    url: 'https://tourghana-alpha.vercel.app',
    domain: 'tourghana-alpha.vercel.app',
    description: 'Ghana tourism platform showcasing curated destinations, six tour categories — cultural, adventure, safari, coastal, historical, and festivals — with package booking.',
    tags: ['Next.js', 'Tailwind CSS', 'Tourism', 'Booking Platform'],
    thumbKind: 'tourghana',
  },
  {
    num: '06',
    name: 'Chez Keke POS',
    featured: false,
    url: 'https://chezkeke.vercel.app',
    domain: 'chezkeke.vercel.app',
    description: 'Restaurant POS built for an Ivorian–Ghanaian kitchen. Features a live ticket dashboard, categorised menu catalog, basket session ordering, and an admin panel covering orders, sales reports, and user management. WiFi-gated: the order number becomes the table\'s WiFi password on purchase.',
    tags: ['Next.js', 'TypeScript', 'POS System', 'Real-time', 'Client Work'],
    thumbKind: 'chezkeke',
  },
];

export type Service = {
  title: string;
  description: string;
  icon: 'landing' | 'commerce' | 'building' | 'refresh' | 'search' | 'user';
};

export const SERVICES: Service[] = [
  { title: 'Landing Pages',      description: 'High-converting one-pagers built for campaigns and launches.',         icon: 'landing'  },
  { title: 'E-commerce Stores',  description: 'Full storefronts with cart, checkout, and admin tooling.',             icon: 'commerce' },
  { title: 'Business Websites',  description: 'Marketing sites that turn visitors into qualified leads.',             icon: 'building' },
  { title: 'Website Redesign',   description: 'Modernise an aging site without losing its hard-won SEO.',            icon: 'refresh'  },
  { title: 'SEO Optimization',   description: 'Technical SEO, Core Web Vitals, and clean information architecture.',  icon: 'search'   },
  { title: 'Portfolio Websites', description: 'Editorial portfolios for creatives, founders, and freelancers.',      icon: 'user'     },
];

export const NAV_LINKS = [
  { id: 'work',     label: 'Work'     },
  { id: 'services', label: 'Services' },
  { id: 'about',    label: 'About'    },
  { id: 'contact',  label: 'Contact'  },
];

export const STATS = [
  { value: '5+',    label: 'Projects Shipped'  },
  { value: '3+',    label: 'Industries Served' },
  { value: '100%',  label: 'Built to Convert'  },
  { value: 'GH 🇬🇭', label: 'Based in Accra'  },
];

export const STACK = [
  { label: 'Next.js',      mono: 'N'  },
  { label: 'React',        mono: 'R'  },
  { label: 'Node.js',      mono: 'No' },
  { label: 'TypeScript',   mono: 'Ts' },
  { label: 'Tailwind CSS', mono: 'Tw' },
  { label: 'PostgreSQL',   mono: 'Pg' },
];

export const TIMELINE = [
  {
    year: '2026',
    title: "Mina's Haus",
    sub: 'Shipped',
    body: 'Booking platform with verified-pro dispatch across 6 service categories.',
    chip: 'Launched',
  },
  {
    year: '2025',
    title: 'Opal Edge Wellness',
    sub: 'Featured',
    body: '240-product international skincare store with full customer portal and admin.',
    chip: 'Production',
  },
  {
    year: '2024',
    title: 'Kurom',
    sub: 'Shipped',
    body: 'Gadget e-commerce with subscription pricing and newsletter automations.',
    chip: 'Launched',
  },
  {
    year: '2023',
    title: 'Prime Tech Support',
    sub: 'Founded',
    body: 'Started a small studio in Accra building web products for African and global businesses.',
    chip: 'Origin',
  },
];
