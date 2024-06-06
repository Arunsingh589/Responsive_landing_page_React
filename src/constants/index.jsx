import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { HiOutlineClipboardCheck } from "react-icons/hi"
import { CiShoppingBasket } from "react-icons/ci";
import { MdStorage } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Industry", href: "#" },
  { label: "Customer Stories", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },

];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <HiOutlineClipboardCheck />,
    text: "What to order",
    description:
      "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
  },
  {
    icon: <CiShoppingBasket />,
    text: "When to order",
    description:
      "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
  },
  {
    icon: <MdStorage />,
    text: "How much to stock",
    description:
      "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
  },
  {
    icon: <FaWarehouse />,
    text: "Where to place",
    description:
      "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
  },
  // {
  //   icon: <PlugZap />,
  //   text: "Collaboration Tools",
  //   description:
  //     "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  // },
  // {
  //   icon: <GlobeLock />,
  //   text: "Analytics Dashboard",
  //   description:
  //     "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  // },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Product" },
  { href: "#", text: "Pricing" },
  { href: "#", text: "Customer Stories" },
  { href: "#", text: "Career" },
];
export const paragraph = [
  { href: "#", text: "Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order." },
  
];

export const platformLinks = [
  { href: "#", text: "About Us" },
  { href: "#", text: "Blog" },
  // { href: "#", text: "System Requirements" },
  // { href: "#", text: "Downloads" },
  // { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "sales@getcrest.ai" },
  { href: "#", text: "Registered Office:1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102" },
  { href: "#", text: "Corporate Office: 291, All Time Space, 4th Floor,15th A Cross, Sector - 6,HSR Layout, Bengaluru, India. 560102" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];
export const locations = [
  { href: "#", text: "Conifer Innovations Private Limited" },
  { href: "#", text: " CIN: U72900KA2022PTC163144" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];