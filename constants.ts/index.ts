// nav
export const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const GRID_ITEMS = [
  {
    id: 1,
    title:
      "I prioritize collaboration with stakeholders and fostering open communication",
    description: "",
    className: "md:row-span-4 md:col-span-6 lg:col-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    secondImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "md:row-span-2 md:col-span-3 lg:col-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    secondImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:row-span-2 md:col-span-3 lg:col-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    secondImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "❤️ React & Next.js",
    className: "md:row-span-1 md:col-span-3 lg:col-span-2 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b4.png",
    secondImg: "/grid.png",
  },

  // {
  //   id: 5,
  //   title: "Currently improving my skills in Next.js",
  //   description: "",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/next-cache.png",
  //   secondImg: "/grid.png",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "md:row-span-1 md:col-span-3 lg:col-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    secondImg: "",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "CarHub - Booking your car is just a click away",
    description: `Next.js 14 app for discovering and renting cars. Features Google authentication and Stripe payments.`,
    img: process.env.NEXT_PUBLIC_CARHUB_CLOUDINARY_URL || "",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/stripe.svg"],
    link: process.env.NEXT_PUBLIC_CARHUB_URL || "",
    cuteLink: "/car-hub.com",
    gitHubLink: process.env.NEXT_PUBLIC_CARHUB_GITHUB_URL || "",
  },

  {
    id: 2,
    title: "Nike landing page",
    description: `Next.js 14 app, single landing page implementing Tailwind CSS and responsive design.`,
    img: process.env.NEXT_PUBLIC_NIKE_CLOUDINARY_URL || "",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: process.env.NEXT_PUBLIC_NIKE_URL || "",
    cuteLink: "/nike.com",
    gitHubLink: process.env.NEXT_PUBLIC_NIKE_GITHUB_URL || "",
  },
  {
    id: 3,
    title: "RoamReady - Travel app landing page",
    description: `Next.js 14 app, single landing page implementing Tailwind CSS and responsive design.`,
    img: process.env.NEXT_PUBLIC_TRAVEL_CLOUDINARY_URL || "",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: process.env.NEXT_PUBLIC_TRAVEL_URL || "",
    cuteLink: "/roamready.com",
    gitHubLink: process.env.NEXT_PUBLIC_TRAVEL_GITHUB_URL || "",
  },
  {
    id: 4,
    title: "Dev OverFlow - A community-driven platform for developers",
    description: `Next.js 14 app with Server Actions. Clerk Auth. Responsive design, shadcn/ui, Tailwind.css.
        `,
    img: process.env.NEXT_PUBLIC_DEV_OVERFLOW_CLOUDINARY_URL || "",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: process.env.NEXT_PUBLIC_DEV_OVERFLOW_URL || "",
    cuteLink: "/dev-overflow.com",
    gitHubLink: process.env.NEXT_PUBLIC_DEV_OVERFLOW_GITHUB_URL || "",
  },
  {
    id: 5,
    title: "The Wild Oasis - Book your room in paradise",
    description: `Next.js 14 app with Server Actions. Responsive design, Optimistic UI.
        Google Auth, Stripe payments & refunds.
        `,
    img: process.env.NEXT_PUBLIC_WILD_OASIS_CLOUDINARY_URL || "",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/fm.svg",
      "/cloud.svg",
      "/stripe.svg",
    ],
    link: process.env.NEXT_PUBLIC_WILD_OASIS_URL || "",
    cuteLink: "/wild-oasis.com",
    gitHubLink: process.env.NEXT_PUBLIC_WILD_OASIS_GITHUB_URL || "",
  },
  {
    id: 6,
    title: "Natours - A Tour Booking App",
    description: `React SPA interacting with the Natours API. Cypress tests, Stripe payments, React Query, Zustand, Zod validation`,
    img: process.env.NEXT_PUBLIC_SPA_NATOURS_CLOUDINARY_URL || "",
    iconLists: [
      "/react.svg",
      "/ts.svg",
      "/tail.svg",
      "/fm.svg",
      "/cloud.svg",
      "/stripe.svg",
      "/cy.svg",
    ],
    link: process.env.NEXT_PUBLIC_SPA_NATOURS_URL || "",
    cuteLink: "/natours.com",
    gitHubLink: process.env.NEXT_PUBLIC_SPA_NATOURS_GITHUB_URL || "",
  },
  {
    id: 7,
    title: "Natours API",
    description: `Express API, tested with Jest and SuperTest. Implements Stripe payments, user authentication, MongoDB, Zod validation, Cloudinary image storage, and Pug email templates.`,
    img: process.env.NEXT_PUBLIC_API_NATOURS_POSTMAN_CLOUDINARY_URL || "",
    iconLists: [
      "/ts.svg",
      "/nodejs.svg",
      "/express.png",
      "/cloud.svg",
      "/stripe.svg",
      "/jest.svg",
    ],
    link: process.env.NEXT_PUBLIC_API_NATOURS_POSTMAN_URL || "",
    cuteLink: "/postman-api-natours.com",
    gitHubLink: process.env.NEXT_PUBLIC_API_NATOURS_GITHUB_URL || "",
  },
  {
    id: 8,
    title: "PetSoft Saas - Manage your Pet daycare with ease",
    description: `SaaS app built on Next.js 14, with App Router, Server Actions for efficient data mutation. Styled with Tailwind CSS and implements Stripe for payments.`,
    img: process.env.NEXT_PUBLIC_PETSOFT_CLOUDINARY_URL || "",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/fm.svg",
      "/stripe.svg",
      "/prisma.png",
    ],
    link: process.env.NEXT_PUBLIC_PETSOFT_URL || "",
    cuteLink: "/petsoft.com",
    gitHubLink: process.env.NEXT_PUBLIC_PETSOFT_GITHUB_URL || "",
  },
  {
    id: 9,
    title: "MioZio - The best pizza in town",
    description: `Next.js 14 app with App Router, authentication via Google or Magic link (powered by Brevo), Stripe payments.`,
    img: process.env.NEXT_PUBLIC_MIOZIO_CLOUDINARY_URL || "",
    iconLists: [
      "/next.svg",
      "/ts.svg",
      "/tail.svg",
      "/fm.svg",
      "/prisma.png",
      "/stripe.svg",
    ],
    link: process.env.NEXT_PUBLIC_MIOZIO_URL || "",
    cuteLink: "/mio-zio.com",
    gitHubLink: process.env.NEXT_PUBLIC_MIOZIO_GITHUB_URL || "",
  },
  {
    id: 10,
    title: "React Napoli - Maybe yet another pizza app",
    description: `React SPA designed for users to order pizzas. Styled with Tailwind.`,
    img: process.env.NEXT_PUBLIC_REACT_PIZZA_CLOUDINARY_URL || "",
    iconLists: ["/react.svg", "/tail.svg"],
    link: process.env.NEXT_PUBLIC_REACT_NAPOLI_URL || "",
    cuteLink: "/napoli.com",
    gitHubLink: process.env.NEXT_PUBLIC_REACT_NAPOLI_GITHUB_URL || "",
  },
  {
    id: 11,
    title: "Aquaman Bali - The best surfing experience in Bali",
    description: `Next.js 13 app developed to enhance the online presence of a surf school in Bali. Mobile only.`,
    img: process.env.NEXT_PUBLIC_AQUAMAN_CLOUDINARY_URL || "",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg"],
    link: process.env.NEXT_PUBLIC_AQUAMAN_URL || "",
    cuteLink: "/aquaman-surf-bali.com",
    gitHubLink: process.env.NEXT_PUBLIC_AQUAMAN_GITHUB_URL || "",
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Fullstack Developer @prismo.io",
    description: `
      Contributing to a HR-Tech SaaS platform, using TypeScript, React, Next.js 14, Material UI, Node.js, Express, PostgreSQL and Supabase.
      `,
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
    flags: ["https://flagcdn.com/fr.svg"],
  },
  {
    id: 2,
    title: "Fullstack Developer - Freelance",
    description: `
      Building front-end and full-stack applications, using JavaScript, TypeScript, React, Next.js (13 & 14), Tailwind.css, Node.js, Express, and MongoDB.
      Currently contributing to the DeXter-on-Radix open source project.`,
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
    flags: ["https://flagcdn.com/fr.svg", "https://flagcdn.com/id.svg"],
  },
  {
    id: 3,
    title: "Software Engineer intern @renuo.ch",
    description:
      "Contributed to the development of full-stack web applications using Ruby on Rails, JavaScript, TypeScript, React.js, Bootstrap, and Tailwind CSS. Ensured code quality by implementing comprehensive tests with RSpec, while utilizing Git for version control.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    flags: ["https://flagcdn.com/ch.svg"],
  },
  {
    id: 4,
    title: "Engineer & Project Manager - Land Remediation",
    description:
      "Oversee and coordinate all phases of land remediation projects, ensuring compliance with environmental regulations and safety standards. Liaise with stakeholders to deliver sustainable and effective land restoration solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp2.png",
    flags: ["https://flagcdn.com/fr.svg", "https://flagcdn.com/ch.svg"],
  },

  {
    id: 5,
    title: "Research Associate - Molecular Biology",
    description:
      "Research Associate at UBC (Vancouver, Canada) & INSERM (french NIH). Conducted R&D in academic laboratories, data analysis, student mentoring, collaboration within international teams resulting in 3 peer-reviewed publications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
    flags: ["https://flagcdn.com/fr.svg", "https://flagcdn.com/ca.svg"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: `Zurich, Switzerland - "Le Wagon" Full-Stack web development Bootcamp. 2-month full-time intensive coding bootcamp on HTML, CSS, Bootstrap,
    JavaScript ES6, SQL, Git, GitHub, Heroku and Ruby on Rails.`,
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    flags: ["https://flagcdn.com/ch.svg"],
  },
  {
    id: 2,
    title: "Master's degree in blockchain technologies",
    linkUrl: process.env.NEXT_PUBLIC_FMT_URL || "",
    linkLabel: "🎲🎲🎲 A Smart Contract Approach to No-Loss Gaming.",
    description: `Remote - Zigurat & University of Barcelona. Explored blockchain technologies, smart contracts, and dApp development on the EVM through various research projects to investigate their practical applications.
    `,
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    flags: ["https://flagcdn.com/ch.svg", "https://flagcdn.com/es.svg"],
  },
  {
    id: 3,
    title: "Online Web Development Courses",
    description:
      "Completed extensive coursework covering JavaScript, TypeScript, React.js, and Next.js, focusing on advanced topics in front-end and full-stack development. Implemented hands-on projects to reinforce learning and practical application of concepts.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
    flags: ["https://flagcdn.com/ch.svg"],
  },
  {
    id: 4,
    title: "M.Eng. Civil Engineering",
    description:
      "Ecole des Mines, France - Studied at a renowned French engineering school, with a major in Civil Engineering.",
    className: "md:col-span-2",
    thumbnail: "/exp2.png",
    flags: ["https://flagcdn.com/fr.svg"],
  },
  {
    id: 5,
    title: "M.Sc. Molecular Biology",
    description:
      "University of Montpellier, France - Master of Science in molecular biology.",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
    flags: ["https://flagcdn.com/fr.svg"],
  },
];

export const HACKHATON = [
  {
    id: 1,
    title: "EBC10 x Radix Hackathon - 5th place over 15 teams",
    linkUrl: process.env.NEXT_PUBLIC_RADIX_MEME_URL || "",
    linkLabel: "Radix.Meme",
    description: `Barcelona, Spain - 48 hours coding TypeScript, React.js, Next.js, Tailwind.css, responsible for the front end part of a DApp built on the Radix blockchain.`,
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    flags: ["https://flagcdn.com/es.svg"],
  },
];

export const SOCIAL_MEDIA = [
  {
    id: 1,
    img: "/git.png",
    href: process.env.NEXT_PUBLIC_GITHUB,
  },
  {
    id: 2,
    img: "/link.png",
    href: process.env.NEXT_PUBLIC_LINKEDIN,
  },
];
