export const business = {
  name: "Baba Biswanath Stone Crusher",
  shortName: "Baba Biswanath",
  place: "Badasiajang, Odisha",
  country: "India",
  established: "2005",
  legalStatus: "Individual – Proprietor",
  nature: "Wholesale trader",
  employees: "40–70",
  gst: "19GYEPS7755E1ZR",
  coordinates: "22°32'40.8\"N 86°04'17.8\"E",
  phoneDisplay: "+91 7978608967",
  phoneTel: "+917978608967",
  phoneWhatsApp: "917978608967",
  email: "tiringjitu@gmail.com",
  web3formsUrl: "https://api.web3forms.com/submit",
  web3formsKey: "b8f39fc1-0fba-4758-b983-62063a7992e7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d707.1003941217377!2d86.07162429728395!3d22.54469600425425!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725116043091!5m2!1sen!2sin",
  mapLink: "https://www.google.com/maps/search/?api=1&query=22.5446667,86.0716111",
} as const

export const nav = [
  { href: "#materials", label: "Materials" },
  { href: "#delivery", label: "Delivery" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100009220690510&mibextid=ZbWKwL",
  },
  {
    label: "X",
    href: "https://x.com/Nikhilsaha_?t=QvP9m2Al1df1bjDQ6rhf_w&s=08",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nikhil_kumar_saha?utm_source=qr&igsh=MWpqaGFuZjBwbGh6Zg==",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-kumar-saha-21b3601a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nikhilkumarsaha",
  },
] as const

export const trustPoints = [
  { title: "On-site delivery available", icon: "truck" },
  { title: "Wholesale stone supply", icon: "boxes" },
  { title: "Trusted since 2005", icon: "shield" },
] as const

export const materials = [
  {
    number: "01",
    name: "Fine stone",
    size: "Half inch · 8mm",
    description: "Clean, well-graded aggregate for a wide range of construction needs.",
    image: "/images/product-half-inch.jpg",
    alt: "Half inch stone chips",
  },
  {
    number: "02",
    name: "Coarse stone",
    size: "3/4 & 5/8 inch",
    description: "Strong and durable aggregate for major structural work.",
    image: "/images/product-three-quarter.jpg",
    alt: "3/4 and 5/8 inch stone chips",
  },
  {
    number: "03",
    name: "Stone dust",
    size: "For filling and concrete",
    description: "High quality stone dust suitable for construction and filling work.",
    image: "/images/product-dust.jpg",
    alt: "Stone dust",
  },
  {
    number: "04",
    name: "Bajri",
    size: "Small gravel",
    description: "Clean and durable bajri for concrete, drainage and general use.",
    image: "/images/product-bajri.jpg",
    alt: "Bajri gravel",
  },
] as const

export const steps = [
  {
    number: "1",
    title: "Choose material",
    description: "Tell us which stone or dust you need.",
    icon: "layers",
  },
  {
    number: "2",
    title: "Share quantity & location",
    description: "Let us know the quantity and your delivery location.",
    icon: "pin",
  },
  {
    number: "3",
    title: "Receive your quote",
    description: "We'll confirm the final rate and delivery details.",
    icon: "truck",
  },
] as const

export const gallery = [
  { src: "/images/gallery-1.jpg", alt: "Stone stockpile at the crusher yard" },
  { src: "/images/gallery-2.jpg", alt: "Wide view of the crusher yard" },
  { src: "/images/gallery-3.jpg", alt: "Material piles at the yard" },
  { src: "/images/gallery-4.jpg", alt: "Close-up of stone aggregate" },
  { src: "/images/gallery-5.jpg", alt: "Close-up of graded stone chips" },
  { src: "/images/gallery-6.jpg", alt: "Yard and conveyor line" },
  { src: "/images/gallery-7.jpg", alt: "Crushed stone chips" },
  { src: "/images/gallery-8.jpg", alt: "Fine aggregate" },
] as const

export const whatsAppHref = `https://wa.me/${business.phoneWhatsApp}?text=${encodeURIComponent(
  "Hello, I would like a quote for stone aggregates from Baba Biswanath Stone Crusher.",
)}`

export const facts = [
  { value: business.established, label: "Year of establishment" },
  { value: business.nature, label: "Nature of business" },
  { value: business.place, label: "Location" },
  { value: business.legalStatus, label: "Legal status" },
  { value: business.employees, label: "Employees" },
  { value: business.gst, label: "GST" },
] as const
