import { type FilledIconName } from "@/components/site/FilledIcon";

export type IconItem = {
  icon: FilledIconName;
  label: string;
};

export type ServiceItem = {
  icon: FilledIconName;
  title: string;
  text: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  mobile: string;
  office?: string;
  email: string;
  address: string;
};

export const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#quote" },
];

export const propertyTypes: IconItem[] = [
  { icon: "users", label: "HOA Communities" },
  { icon: "building", label: "Commercial Properties" },
  { icon: "shopping-bag", label: "Shopping Centers" },
  { icon: "shield", label: "Gated Communities" },
];

export const heroSlides = [
  {
    image: "/images/hero-lawn-care.png",
    alt: "BR Lonestar team member on a mower maintaining a premium lawn at sunset",
    label: "Premium Lawn Care",
    headline: "Premium Lawn Care for a Healthier Property",
    text: "Sharp mowing, clean edges, and year-round lawn care.",
  },
  {
    image: "/images/hero-landscape-design.png",
    alt: "BR Lonestar crew installing custom landscape planting along a luxury property pathway",
    label: "Landscape Design",
    headline: "Custom Landscapes Built to Impress",
    text: "Elegant designs, fresh planting, and expert installation.",
  },
  {
    image: "/images/hero-irrigation-care.png",
    alt: "BR Lonestar irrigation and outdoor care crew working at dusk with sprinklers and landscape lighting",
    label: "Irrigation & Care",
    headline: "Smart Irrigation & Outdoor Care",
    text: "Efficient watering, seasonal cleanup, and complete maintenance.",
  },
];

export const services: ServiceItem[] = [
  {
    icon: "leaf",
    title: "Lawn Care & Maintenance",
    text: "Healthy lawns and sharp curb appeal all year long.",
    image: "/images/gallery-5.jpg",
  },
  {
    icon: "compass",
    title: "Landscape Design & Installation",
    text: "Custom designs and expert installations that impress.",
    image: "/images/hoa-community.jpg",
  },
  {
    icon: "tree",
    title: "Tree & Shrub Care",
    text: "Pruning, trimming, and care for healthy, beautiful trees.",
    image: "/images/gated-community.jpg",
  },
  {
    icon: "droplet",
    title: "Irrigation Systems",
    text: "Efficient systems that conserve water and time.",
    image: "/images/gallery-2.jpg",
  },
  {
    icon: "flower",
    title: "Seasonal Cleanups",
    text: "Keep properties clean and well-maintained in every season.",
    image: "/images/gallery-1.jpg",
  },
  {
    icon: "home",
    title: "Property Maintenance",
    text: "Reliable maintenance for grounds and common areas.",
    image: "/images/commercial-property.jpg",
  },
];

export const projects = [
  {
    title: "HOA Entrance Refresh",
    text: "Seasonal color, trimmed hedges, and clean borders that make community entrances feel maintained.",
    image: "/images/hoa-community.jpg",
  },
  {
    title: "Commercial Curb Appeal",
    text: "Reliable lawn care and planting standards for professional office and retail properties.",
    image: "/images/commercial-property.jpg",
  },
  {
    title: "Gated Community Grounds",
    text: "Premium entry landscaping, lighting, pathways, and common-area maintenance with a polished finish.",
    image: "/images/gated-community.jpg",
  },
  {
    title: "Shopping Center Landscape Care",
    text: "Clean, visible, and welcoming exterior landscaping for high-traffic commercial environments.",
    image: "/images/shopping-center.jpg",
  },
];

export const testimonials = [
  {
    name: "Community Board Member",
    type: "HOA Property",
    quote:
      "BR Lonestar keeps our entrances and common areas clean, sharp, and consistent. Communication is easy and the work always looks professional.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Commercial Property Manager",
    type: "Office Property",
    quote:
      "Their team understands managed properties. They are responsive, reliable, and keep the site looking ready for tenants and visitors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Retail Center Owner",
    type: "Shopping Center",
    quote:
      "The property looks more polished and welcoming. Seasonal maintenance and quick follow-up have made a clear difference.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Estate Manager",
    type: "Gated Community",
    quote:
      "The level of detail BR Lonestar brings to our neighborhood is unmatched. The lawns and seasonal plantings always look spectacular.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Facilities Director",
    type: "Corporate Campus",
    quote:
      "Reliability is key for us, and they deliver every time. From lawn care to tree maintenance, everything is handled perfectly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Condo Association President",
    type: "Luxury High Rise",
    quote:
      "Our outdoor amenity spaces have never looked better. They proactively suggest improvements and execute flawlessly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Business Park Owner",
    type: "Commercial Real Estate",
    quote:
      "Great communication and excellent results. They transformed our aging landscape into a modern, welcoming environment.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide lawn care, landscape design and installation, tree and shrub care, irrigation, seasonal cleanups, and ongoing property maintenance.",
  },
  {
    question: "Do you offer maintenance plans?",
    answer:
      "Yes. We build maintenance plans around the property type, traffic patterns, seasonal needs, and the level of presentation your site requires.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote form on this page or call the office. Our team will follow up to understand your property and recommend the right service plan.",
  },
  {
    question: "Do you handle residential and commercial properties?",
    answer:
      "Yes. We serve HOAs, commercial properties, shopping centers, gated communities, luxury residential high rises, and managed residential properties.",
  },
  {
    question: "Can I request custom landscaping?",
    answer:
      "Absolutely. We can plan custom plantings, seasonal color, entrance upgrades, irrigation improvements, and complete outdoor refreshes.",
  },
  {
    question: "Do you provide cleanup services?",
    answer:
      "Yes. Seasonal cleanups, bed detailing, debris removal, and common-area refreshes are part of our property maintenance offering.",
  },
];

export const insights = [
  {
    category: "Outdoor Care",
    title: "Seasonal Outdoor Care Tips",
    text: "Simple ways to keep turf, beds, and entrances clean through changing Texas conditions.",
    image: "/images/gallery-4.jpg",
  },
  {
    category: "Maintenance",
    title: "Smarter Plans for Managed Properties",
    text: "How consistent scheduling helps protect curb appeal, property value, and resident confidence.",
    image: "/images/gallery-2.jpg",
  },
  {
    category: "Design",
    title: "Small Landscape Changes With Big Impact",
    text: "Where fresh color, lighting, edging, and plant selection can quickly improve first impressions.",
    image: "/images/gallery-3.jpg",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    title: "Seasonal color beds",
    alt: "Colorful landscaped flower beds with clean mulch and trimmed borders",
  },
  {
    src: "/images/gallery-2.jpg",
    title: "Pathways and lighting",
    alt: "Clean pathway lighting through premium residential or commercial landscaping",
  },
  {
    src: "/images/gallery-3.jpg",
    title: "Entry monument care",
    alt: "Community entrance landscaping with flowers, hedges, and maintained turf",
  },
  {
    src: "/images/gallery-4.jpg",
    title: "Professional site walks",
    alt: "Professional landscaper meeting with a property manager at a maintained property",
  },
  {
    src: "/images/gallery-5.jpg",
    title: "Clean lawn standards",
    alt: "Perfectly maintained lawn with trimmed hedges and premium property landscaping",
  },
];

export const stats = [
  { value: "24hr", label: "quote response" },
  { value: "4", label: "property classes served" },
  { value: "12mo", label: "maintenance planning" },
];

export const benefits = [
  {
    title: "Reliable & On Time",
    text: "We show up and get the job done right.",
  },
  {
    title: "Professional Team",
    text: "Experienced, trained, and customer focused.",
  },
  {
    title: "High Quality Work",
    text: "Attention to detail you can see and count on.",
  },
  {
    title: "Responsive Service",
    text: "Fast communication and quick turnarounds.",
  },
  {
    title: "Custom Maintenance Plans",
    text: "Solutions built for your property’s unique needs.",
  },
  {
    title: "Industry Understanding",
    text: "Deep knowledge of HOA and commercial properties.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Bill Rushakoff",
    role: "President",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 16%",
    mobile: "214-901-7228",
    office: "214-790-7996",
    email: "bill@brlonestar.com",
    address: "7300 State Highway 121, Suite 300, McKinney, TX 75070",
  },
  {
    name: "Rodney Riepenhoff",
    role: "Vice President",
    image: "/images/rodney-riepenhoff.jpg",
    imagePosition: "center 34%",
    mobile: "903-456-4060",
    email: "rodney@brlonestar.com",
    address: "7300 State Highway 121, Suite 300, McKinney, TX 75070",
  },
];

export const industries = [
  {
    title: "HOA Communities",
    image: "/images/hoa-community.jpg",
  },
  {
    title: "Luxury Residential High Rises",
    image: "/images/luxury-high-rise.jpg",
  },
  {
    title: "Gated Communities",
    image: "/images/gated-community.jpg",
  },
  {
    title: "Commercial Properties",
    image: "/images/commercial-property.jpg",
  },
  {
    title: "Shopping Centers",
    image: "/images/shopping-center.jpg",
  },
];

export const propertyTypeOptions = [
  "HOA Community",
  "Commercial Property",
  "Shopping Center",
  "Gated Community",
  "Luxury Residential High Rise",
  "Other",
];

export const serviceOptions = [
  "Lawn Care & Maintenance",
  "Landscape Design & Installation",
  "Tree & Shrub Care",
  "Irrigation Systems",
  "Seasonal Cleanups",
  "Property Maintenance",
  "Full Maintenance Plan",
];

export const footerServices = serviceOptions.filter((service) => service !== "Full Maintenance Plan");

export const contactInfo = {
  address: "7300 State Highway 121, Suite 300, McKinney, TX 75070",
  office: "214-790-7996",
  officeHref: "tel:+12147907996",
  cell: "214-901-7228",
  cellHref: "tel:+12149017228",
  whatsappHref: "https://wa.me/12149017228?text=Hi%20BR%20Lonestar%2C%20I%20need%20urgent%20landscaping%20or%20property%20maintenance%20help.",
  email: "info@brlonestar.com",
  emailHref: "mailto:info@brlonestar.com",
};
