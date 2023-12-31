import { SideNavItemType } from "@/types/types";
import { Home, Mail, User, Users, FilePlus } from "lucide-react";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/pricing", key: "pricing ", label: "Pricing " },
  { href: "/contact", key: "contact_us", label: "Contact" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-5.png",
  "/person-6.png",
  "/person-7.png",
  "/person-8.png",
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Offline Maps",
    icon: "/map.svg",
    variant: "green",
    description:
      "Experience uninterrupted exploration with our offline maps, perfect for activities signal-challenged locations.",
  },
  {
    title: "Remind schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Set a reminder to organize a holiday adventure with friends, taking advantage of the enticing offers, streamlining the planning process.",
  },
  {
    title: "Augmented Reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Using augmented reality technology, our guide seamlessly navigates you from forests to mountains.",
  },
  {
    title: "New locations",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Explore new locations monthly with insights from our community, and stay updated on hidden gems, including shops and restaurants.",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: ["About Vietwander", "Jobs", "Privacy Policy"],
  },
  {
    title: "Our Community",
    links: ["Solo wander", "Couple wander", "Group wander", "Family wander"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "+84 93-456-789" },
    { label: "Email Officer", value: "vwcs@vietwander.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: ["/facebook.svg", "/instagram.svg", "/youtube.svg"],
};

// PRICING SECTION
export const pricingPlans = [
  {
    title: "Explorer",
    price: 0,
    currency: "USD",
    frequency: " / month",
    description:
      "Get started with our free plan and discover Vietnam's hidden gems.",
    features: ["Access to 50 popular destinations", "Basic travel guides"],
    cta: "Start for free",
    mostPopular: false,
  },
  {
    title: "Adventurer",
    price: 9,
    currency: "USD",
    frequency: " / month",
    description: "Perfect for solo travelers and explorers of all levels.",
    features: [
      "Access to 200+ destinations",
      "Detailed travel guides",
      "Priority customer support",
    ],
    cta: "Get started",
    mostPopular: true,
  },
];

// COSMETICS TYPES
export const COSMETICS_TYPES = [
  {
    id: 1,
    name: "Makeup remover",
  },
  {
    id: 2,
    name: "Cleanser",
  },
  {
    id: 3,
    name: "Toner",
  },
  {
    id: 4,
    name: "Serum",
  },
  {
    id: 5,
    name: "Eye cream",
  },
  {
    id: 6,
    name: "Treatment",
  },
  {
    id: 7,
    name: "Exfoliator",
  },
  {
    id: 8,
    name: "Retinol",
  },
  {
    id: 9,
    name: "Face mask",
  },
  {
    id: 10,
    name: "Sunscreen",
  },
];

// SKIN TYPES 
export const SKIN_TYPES = [
  {
    id: 1,
    name: "Dry",
  },
  {
    id: 2,
    name: "Oily",
  },
  {
    id: 3,
    name: "Combination",
  },
];

// SIDEBAR
export const SIDENAV_ITEMS: SideNavItemType[] = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    title: "Profile",
    path: "/profile/",
    icon: <User />,
  },
  {
    title: "Community",
    path: "/community",
    icon: <Users />,
  },
  {
    title: "Create routine",
    path: "/createroutine",
    icon: <FilePlus />
  },
]
