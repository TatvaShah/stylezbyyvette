import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Stylez by Yvette",
  tagline: "Versatile hairstylist in Scarborough for frontal installs, sew-ins, and ponytails.",
  category: "Hairstylist",
  schemaType: "BeautySalon",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://stylezbyyvette.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8b4058" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Scarborough hairstylist",
    headline: "Frontal installs, sew-ins, and ponytails",
    subhead:
      "Self taught versatile stylist in Scarborough. Book online or send a DM with your date and the look you want.",
    images: [
      { src: "/images/post-1.jpg", alt: "Half up half down frontal install by Stylez by Yvette", width: 720, height: 960 },
      { src: "/images/post-3.jpg", alt: "Colourful frontal install look", width: 1080, height: 1439 },
      { src: "/images/post-5.jpg", alt: "Frontal pony french roll", width: 720, height: 960 },
    ],
    primaryCta: { label: "DM to book", href: "#order" },
    secondaryCta: { label: "See the styles", href: "#gallery" },
  },

  highlights: [
    "Self taught versatile stylist",
    "Frontal installs and sew-ins",
    "$20 non refundable deposit",
    "Closed Sundays",
  ],

  about: {
    title: "Styled with care",
    body: [
      "Stylez by Yvette is a self taught versatile hairstylist in Scarborough, Toronto. From clean frontal installs and leave out sew-ins to frontal ponytails, every look is finished with care.",
      "Book through the online scheduling link or send an Instagram DM with your preferred date and style. A $20 non refundable deposit is required. Closed Sundays.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Clean leave out sew-in by Stylez by Yvette", width: 720, height: 960 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Popular styles from recent work. Message or book online for current pricing and availability.",
    variant: "list",
    showPrices: false,
    priceNote: "Pricing shared when you book. A $20 non refundable deposit holds your appointment.",
    groups: [
      {
        title: "Hair services",
        items: [
          { name: "Frontal installs", description: "Including half up half down and custom partings." },
          { name: "Sew-ins", description: "Leave out and closure sew-ins for a clean, flat finish." },
          { name: "Frontal ponytails", description: "Including french roll and other pony styles." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent styles",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 720,
        height: 960,
        alt: "Half up half down frontal install",
        caption: "Half up half down frontal",
        href: "https://www.instagram.com/p/Ddwkp92kabs/",
      },
      {
        src: "/images/post-2.jpg",
        width: 720,
        height: 960,
        alt: "Clean leave out sew-in",
        caption: "Leave out sew-in",
        href: "https://www.instagram.com/p/DcuUGJQkeRp/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1080,
        height: 1439,
        alt: "Cotton candy colourful frontal look",
        caption: "Cotton candy look",
        href: "https://www.instagram.com/p/Dcmq1oSEbBz/",
      },
      {
        src: "/images/post-5.jpg",
        width: 720,
        height: 960,
        alt: "Frontal pony french roll",
        caption: "Frontal pony french roll",
        href: "https://www.instagram.com/p/DboW0pgGm7k/",
      },
      {
        src: "/images/post-6.jpg",
        width: 720,
        height: 960,
        alt: "2x6 closure sew-in",
        caption: "Closure sew-in",
        href: "https://www.instagram.com/p/Dbl7GpSkQyX/",
      },
      {
        src: "/images/post-7.jpg",
        width: 1080,
        height: 1432,
        alt: "Celebrity hair styling look",
        caption: "On set styling",
        href: "https://www.instagram.com/p/DbQy3F9EQYX/",
      },
      {
        src: "/images/post-8.jpg",
        width: 720,
        height: 960,
        alt: "Pretty frontal install",
        caption: "Pretty hair",
        href: "https://www.instagram.com/p/DbLd_ZMEdSI/",
      },
      {
        src: "/images/post-9.jpg",
        width: 720,
        height: 960,
        alt: "Frontal pony",
        caption: "Frontal pony",
        href: "https://www.instagram.com/p/DbD0iZSEfnf/",
      },
      {
        src: "/images/post-10.jpg",
        width: 720,
        height: 960,
        alt: "Cutesy frontal style",
        caption: "Cutesy frontal",
        href: "https://www.instagram.com/p/DbDwJSRkYfv/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "stylezbyyvette",
    embeds: [
      "https://www.instagram.com/p/Ddwkp92kabs/",
      "https://www.instagram.com/p/DcuUGJQkeRp/",
      "https://www.instagram.com/p/DboW0pgGm7k/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Use the booking link or tap below to open an Instagram chat with a starter message. A $20 non refundable deposit is required.",
    dmMessage:
      "Hi Stylez by Yvette! I would like to book.\nPreferred date:\nStyle or service (frontal install, sew-in, ponytail):\nHair length or unit notes:\nDesign idea or inspo:",
    links: [
      { label: "Book online", href: "https://stylezbyyvettee.as.me/" },
    ],
    note: "Closed Sundays. $20 non refundable deposit required.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Use the online booking link or send an Instagram DM with your preferred date, style, and any inspo. A $20 non refundable deposit is required.",
    },
    {
      q: "Where are you based?",
      a: "Stylez by Yvette is based in Scarborough, Toronto.",
    },
    {
      q: "Is there a deposit?",
      a: "Yes. A $20 non refundable deposit is required to hold your appointment.",
    },
    {
      q: "What days are you open?",
      a: "Closed Sundays. Message or book online for available times on other days.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Scarborough, Toronto, Ontario",
    socials: [
      { label: "Booking", href: "https://stylezbyyvettee.as.me/" },
    ],
  },

  seo: {
    title: "Stylez by Yvette | Hairstylist in Scarborough",
    description:
      "Versatile Scarborough hairstylist for frontal installs, sew-ins, and ponytails. Book online or by Instagram DM. $20 deposit. Closed Sundays.",
    keywords: [
      "Scarborough hairstylist",
      "frontal install Toronto",
      "sew-in Scarborough",
      "frontal ponytail Toronto",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
