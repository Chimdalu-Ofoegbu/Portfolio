/* ══════════════════════════════════
   PROJECT / CASE STUDY DATA

   NOTE: Figma asset URLs expire after 7 days.
   Replace these with local paths once you download the assets:
   e.g. "/images/blocknads/hero.png"
   ══════════════════════════════════ */

export const projects = {
  blocknads: {
    slug: "blocknads",
    title: "BlockNads",
    subtitle: "Ad Blocker for Web3",
    description: "Blurb on Project Description, Info and stuffs",
    logo: "/images/blocknads-logo.png",
    cardImage: "/images/blocknads-card.jpg",
    spotlights: [
      {
        src: "/images/blocknads/spotlight-1.jpg",
        alt: "BlockNads — Hero / Landing",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-2.png",
        alt: "BlockNads — Brand Identity",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-3.png",
        alt: "BlockNads — Who We Are",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-4.png",
        alt: "BlockNads — Team",
        height: 1425,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-5.png",
        alt: "BlockNads — Gallery",
        height: 1006,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-6.png",
        alt: "BlockNads — Footer",
        height: 713,
        hasBorder: false,
      },
      {
        src: "/images/blocknads/spotlight-7.png",
        alt: "BlockNads — Factions",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/blocknads/spotlight-8.png",
        alt: "BlockNads — Brand Kit",
        height: 728,
        hasBorder: true,
      },
    ],
  },
  rigit: {
    slug: "rigit",
    title: "RigIt",
    subtitle: "Solana Block Explorer",
    description: "Ritualized On-Chain games where players Participate in time-based Explorations, Select Rigs and compete for the winner pool. 9 rounds daily, each lasting 2 hours.",
    logo: "/images/rigit-logo.png",
    cardImage: "/images/rigit-card.jpg",
    cardBg: "#BEFE46",
    spotlights: [
      {
        src: "/images/rigit/spotlight-1.jpg",
        alt: "RigIt — Landing",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/rigit/spotlight-2.jpg",
        alt: "RigIt — Hero",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/rigit/spotlight-3.jpg",
        alt: "RigIt — Featured",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/rigit/spotlight-4.jpg",
        alt: "RigIt — Active Footer",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/rigit/spotlight-5.jpg",
        alt: "RigIt — SOL Blocks",
        height: 728,
        hasBorder: true,
      },
      {
        src: "/images/rigit/spotlight-6.jpg",
        alt: "RigIt — Exploration History",
        height: 728,
        hasBorder: true,
      },
    ],
  },
};

export const experience = [
  {
    company: "Beradrome",
    role: "Product Designer",
    duration: "June 2023 - February 2025",
    location: "Remote",
    description:
      "Beradrome is a decentralized finance (DeFi) platform on the Berachain ecosystem, functioning as a native restaking and liquidity marketplace. It aims to provide protocols with efficient ways to build deep liquidity while addressing high interest rates and liquidation risks common in DeFi.",
    achievements: [
      { text: "Revamped the complete ", bold: "Beradrome dApp", after: ", enhancing its functionality and user experience." },
      { text: "Designed and Crafted ", bold: "bespoke illustration assets", after: " to elevate the visual aesthetic of the revamped Beradrome dApp." },
    ],
  },
  {
    company: "Fedix Labs",
    role: "UI UX Designer",
    duration: "Nov 2022 - July 2023",
    location: "Remote",
    description:
      "Fedix Labs provide the infrastructure for financial freedom by building products on a trustless and permission-less financial system. Fedix Finance is one of the many DeFi products to be rolled out of their product hub.",
    achievements: [
      { text: "Designed the landing page for ", bold: "Fedix Labs", after: "" },
      { text: "Designing the ", bold: "Fedix Finance", after: " on-chain perpetual swap for seamless user experience" },
    ],
  },
  {
    company: "Ayoken\nLabs",
    role: "Lead Designer",
    duration: "Nov 2021 - Nov 2022",
    location: "Remote",
    description:
      "Ayoken Labs is launching Ayoken, the first digital collectibles marketplace dedicated to empowering musicians and creatives.",
    achievements: [
      { text: "Designed and Prototyped the ", bold: "Ayoken NFT Marketplace", after: " components and assets" },
      { text: "Designed marketing pitch decks utilized in proposal meetings by the executives of Ayoken Labs", bold: "", after: "" },
    ],
  },
  {
    company: "1Hive DAO",
    role: "Product Designer",
    duration: "Aug 2021 - Sep 2022",
    location: "Remote",
    description:
      "The 1Hive DAO has several products that are built on top of its decentralized platform, namely:",
    descriptionBold: "Honeyswap, Gardens, and Quests",
    achievements: [
      { text: "Contributed user interface and experience design to ", bold: "Gardens", after: " product serving over 10 communities (3000 users+), including Bright ID, the social identity network" },
      { text: "Conducted user research and gathered feedback to inform the design of the ", bold: "Gardens & Quests", after: " product for managing community-driven projects and initiatives" },
      { text: "Developed wireframes, prototypes, and high-fidelity designs for ", bold: "Gardens & Quest", after: " product, incorporating user-centered design principles and ensuring accessibility for diverse audiences." },
      { text: "Collaborated with engineers and DAO council members to aid the implementation of new features on ", bold: "Gardens", after: " and also approve the wireframes and high-fidelity designs for Quests" },
    ],
  },
];

export const skills = {
  design: [
    "User Interface Design",
    "User Experience Design",
    "Interaction Design",
    "Wireframing",
    "Rapid Prototyping",
  ],
  other: [
    "User Research",
    "Usability Testing",
    "User Journey Mapping",
    "A/B Testing",
  ],
  tools: [
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Notion",
  ],
};

export const contact = {
  linkedin: "https://www.linkedin.com/in/ofoegbuchimdalu/",
  twitter: "https://x.com/bensage",
  email: "bensagesol@gmail.com",
};
