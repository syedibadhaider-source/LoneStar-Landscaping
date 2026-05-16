import { type FilledIconName } from "@/components/site/FilledIcon";

export type IconItem = {
  icon: FilledIconName;
  label: string;
};

export type ServiceItem = {
  icon: FilledIconName;
  title: string;
  text: string;
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
  { label: "Industries", href: "#industries" },
  { label: "Gallery", href: "#gallery" },
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
    image: "/images/hero-landscape.jpg",
    alt: "Luxury property exterior at dusk with maintained landscaping, warm lighting, pathways, and colorful flowers",
    label: "Full Maintenance Plans",
    text: "HOA entrances, common areas, and grounds kept clean year round.",
  },
  {
    image: "/images/hero-commercial.jpg",
    alt: "Modern commercial office property with maintained lawns, hedges, flower beds, and walkways",
    label: "Commercial Property Care",
    text: "Sharp lawns, seasonal color, irrigation, and site-ready curb appeal.",
  },
  {
    image: "/images/hero-gated-community.jpg",
    alt: "Upscale gated community entrance with manicured turf, trimmed shrubs, flowers, and landscape lighting",
    label: "Gated Community Landscaping",
    text: "Premium entrances, pathways, beds, and lighting maintained with care.",
  },
];

export const services: ServiceItem[] = [
  {
    icon: "leaf",
    title: "Lawn Care & Maintenance",
    text: "Healthy lawns and sharp curb appeal all year long.",
  },
  {
    icon: "compass",
    title: "Landscape Design & Installation",
    text: "Custom designs and expert installations that impress.",
  },
  {
    icon: "tree",
    title: "Tree & Shrub Care",
    text: "Pruning, trimming, and care for healthy, beautiful trees.",
  },
  {
    icon: "droplet",
    title: "Irrigation Systems",
    text: "Efficient systems that conserve water and time.",
  },
  {
    icon: "flower",
    title: "Seasonal Cleanups",
    text: "Keep properties clean and well-maintained in every season.",
  },
  {
    icon: "home",
    title: "Property Maintenance",
    text: "Reliable maintenance for grounds and common areas.",
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
