// Public assets live under the deploy base (e.g. /cirro-vape/ on GitHub Pages).
const BASE = import.meta.env.BASE_URL

export const shop = {
  name: 'Cirro',
  wordmark: 'CIRRO',
  tagline: 'Vape hardware & accessories',
  minimumAge: 21,
  phone: '+1 (503) 555 0164',
  email: 'support@cirro.example',
  address: '48 Kestrel Way, Unit 3, Bellhaven, OR 97204',
  hours: 'Mon – Sat: 10.00 – 19.00 · Sun: closed',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#categories' },
  { label: 'Featured', href: '#featured' },
  { label: 'Guide', href: '#guide' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Cirro Hardware',
  titleLead: 'Built For',
  titleAccent: 'Everyday Use',
  text: 'Pod systems, regulated mods, tanks and coils from manufacturers we actually stock and service. Straight specifications, honest stock levels, no hype.',
  cta: 'Browse Hardware',
  secondary: 'Read The Guide',
  callouts: [
    { name: 'Cirro Core 40', text: 'Regulated pod-mod, 1400 mAh, USB-C.' },
    { name: 'Cirro Slim 18', text: 'Draw-activated pod, pocket format.' },
  ],
}

export const services = [
  { icon: 'truck', title: 'Tracked Delivery', text: 'Dispatched same day on orders placed before 3pm, with tracking on every parcel.' },
  { icon: 'shield', title: '12 Month Warranty', text: 'Hardware faults covered for twelve months from the date shown on your receipt.' },
  { icon: 'returns', title: '30 Day Returns', text: 'Unopened hardware can be returned within thirty days for a full refund.' },
  { icon: 'lock', title: 'Age Verified', text: `Every order is age-checked at checkout and again on delivery. Strictly ${21}+.` },
]

export const about = {
  eyebrow: 'The Shop',
  title: 'A Counter, Not A Warehouse',
  paras: [
    'Cirro started as a single bricks-and-mortar counter in Bellhaven. We stocked what we could explain, and we serviced what we sold. That has not changed now that most orders arrive online.',
    'Every device listed here is one we keep on the shelf, have taken apart at least once, and can talk you through on the phone. If we do not stock a spare for it, we do not sell it.',
  ],
  points: [
    'Spares and coils held for every device we list',
    'Bench-tested before dispatch, not drop-shipped',
    'Staff who can talk you through a build',
  ],
}

/**
 * Categories describe hardware function only. Product naming stays descriptive —
 * no flavour marketing, and no health or cessation claims anywhere in this file.
 */
export const categories = [
  { key: 'starter', icon: 'kit', title: 'Starter Kits', text: 'Complete pod systems with charger, coils and instructions in the box.', featured: true, count: 18 },
  { key: 'mods', icon: 'mod', title: 'Mods & Devices', text: 'Regulated devices with adjustable wattage and safety cut-offs.', count: 34 },
  { key: 'tanks', icon: 'tank', title: 'Tanks & Coils', text: 'Replacement tanks, glass, seals and coil heads by resistance.', count: 62 },
  { key: 'accessories', icon: 'tool', title: 'Accessories', text: 'Cases, lanyards, build tools, batteries and charging docks.', count: 47 },
  { key: 'liquids', icon: 'bottle', title: 'E-Liquids', text: 'Bottled liquids listed by nicotine strength and PG/VG ratio.', count: 90 },
]

export const featured = {
  eyebrow: 'Best Seller',
  name: 'Cirro Core 40',
  price: 74,
  wasPrice: 89,
  text: 'A regulated pod-mod built around a replaceable 1400 mAh cell, USB-C fast charge and a five-level output dial. Machined aluminium chassis, magnetic pod retention, and a full set of spares held in stock.',
  specs: [
    { label: 'Battery Life', value: 90 },
    { label: 'Build Quality', value: 85 },
    { label: 'Safety Cut-offs', value: 98 },
    { label: 'Airflow Control', value: 75 },
    { label: 'Coil Longevity', value: 88 },
  ],
}

export const products = [
  { name: 'Cirro Core 40', category: 'Mods & Devices', price: 74, was: 89, tone: 'mod', badge: 'Best Seller' },
  { name: 'Cirro Slim 18', category: 'Starter Kits', price: 32, tone: 'pod' },
  { name: 'Cirro Tank Pro', category: 'Tanks & Coils', price: 27, tone: 'tank' },
  { name: 'Mesh Coil Pack ×5', category: 'Tanks & Coils', price: 14, tone: 'coil', badge: 'Low Stock' },
  { name: 'Cirro Dock Duo', category: 'Accessories', price: 22, tone: 'dock' },
  { name: 'Carry Case Hard', category: 'Accessories', price: 18, tone: 'case' },
  { name: 'Cirro Core 40 Pro', category: 'Mods & Devices', price: 96, tone: 'mod' },
  { name: 'Spare Glass ×2', category: 'Tanks & Coils', price: 9, tone: 'tank' },
]

/**
 * Replaces the source layout's comparative-claim slot with a neutral buying
 * guide. No modified-risk, cessation or health-benefit statements.
 */
export const guide = {
  eyebrow: 'Before You Buy',
  title: 'How To Choose A Device',
  text: 'Four things worth settling before you spend anything. If you are still unsure after reading, call the shop — we would rather talk it through than process a return.',
  steps: [
    { n: '01', title: 'Decide On Format', text: 'Pod systems are sealed, pocketable and need the least maintenance. Mods are larger, adjustable and take replaceable cells.' },
    { n: '02', title: 'Check The Coil Supply', text: 'A device is only as good as the coils you can still buy for it in a year. Check the resistance range and whether we hold spares.' },
    { n: '03', title: 'Match The Strength', text: 'Nicotine strength is printed on every bottle we list. Higher-output devices are generally paired with lower strengths.' },
    { n: '04', title: 'Read The Safety Notes', text: 'Battery handling, charging and storage guidance ships with every device. Read it before first use, particularly for replaceable cells.' },
  ],
}

export const testimonials = [
  { quote: 'Ordered a replacement tank on the Thursday and it arrived Friday morning, correctly packed with the spare seals I asked about on the phone.', name: 'Rowan Ellery', role: 'Verified buyer', avatar: `${BASE}images/avatar-1.jpg` },
  { quote: 'They talked me out of the more expensive device because the one I wanted needed coils they could not reliably get. Not many shops would do that.', name: 'Nadia Kaur', role: 'Verified buyer', avatar: `${BASE}images/avatar-2.jpg` },
  { quote: 'Warranty claim handled in four days with no argument. Replacement arrived bench-tested with a note showing the output reading.', name: 'Idris Bello', role: 'Verified buyer', avatar: `${BASE}images/avatar-3.jpg` },
]

export const posts = [
  { slug: 'battery-safety', date: '18 Aug 2026', category: 'Safety', title: 'Handling And Storing Replaceable Cells', excerpt: 'Wraps, cases, charging habits and when to retire a cell. The maintenance guidance we give every customer buying a mod.' },
  { slug: 'coil-lifespan', date: '04 Aug 2026', category: 'Maintenance', title: 'What Actually Shortens Coil Life', excerpt: 'Priming, wattage and liquid composition all matter. Here is what we see most often on coils brought back to the counter.' },
  { slug: 'pod-vs-mod', date: '21 Jul 2026', category: 'Buying Guide', title: 'Pod Systems Versus Regulated Mods', excerpt: 'Size, servicing, running cost and adjustability compared, so you can work out which format suits how you actually use it.' },
  { slug: 'reading-resistance', date: '09 Jul 2026', category: 'Buying Guide', title: 'Reading Coil Resistance And Wattage Ranges', excerpt: 'The numbers printed on the box explained in plain terms, and how to match a coil to the device you already own.' },
]

export const team = [
  { name: 'Dara Whitlock', role: 'Shop Manager', avatar: `${BASE}images/avatar-4.jpg` },
  { name: 'Malachi Okoro', role: 'Hardware & Repairs', avatar: `${BASE}images/avatar-5.jpg` },
  { name: 'Sabine Holloway', role: 'Orders & Returns', avatar: `${BASE}images/avatar-6.jpg` },
]

export const stats = [
  { value: 1240, suffix: '+', label: 'Orders shipped' },
  { value: 260, suffix: '+', label: 'Lines in stock' },
  { value: 12, suffix: '', label: 'Years trading' },
  { value: 98, suffix: '%', label: 'Dispatched same day' },
]
