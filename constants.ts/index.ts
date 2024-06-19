// nav
export const NAV_ITEMS = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' }
]

export const GRID_ITEMS = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'md:row-span-4 md:col-span-6 lg:col-span-3 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.png',
    secondImg: ''
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'md:row-span-2 md:col-span-3 lg:col-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    secondImg: ''
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'md:row-span-2 md:col-span-3 lg:col-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    secondImg: ''
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'md:row-span-1 md:col-span-3 lg:col-span-2 ',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.png',
    secondImg: '/b4.png'
  },

  {
    id: 5,
    title: 'Currently building a JS Animation library',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.png',
    secondImg: '/grid.png'
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'md:row-span-1 md:col-span-3 lg:col-span-2',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    secondImg: ''
  }
]

export const PROJECTS = [
  {
    id: 1,
    title: 'The Wild Oasis - Book your room in paradise',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_WILD_OASIS_CLOUDINARY_URL || '',
    iconLists: [
      '/next.svg',
      '/ts.svg',
      '/tail.svg',
      '/fm.svg',
      '/stripe.svg',
      '/cloud.svg'
    ],
    link: 'https://next-wild-oasis.vercel.app',
    cuteLink: '/wild-oasis.com'
  },
  {
    id: 2,
    title: 'Natours - A Tour Booking App',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_SPA_NATOURS_CLOUDINARY_URL || '',
    iconLists: [
      '/react.svg',
      '/ts.svg',
      '/tail.svg',
      '/cloud.svg',
      '/stripe.svg',
      '/cy.svg'
    ],
    link: 'https://spa-natours.vercel.app/',
    cuteLink: '/natours.com'
  },
  {
    id: 3,
    title: 'Natours API',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_SPA_NATOURS_CLOUDINARY_URL || '',
    iconLists: [
      '/ts.svg',
      '/nodejs.svg',
      '/express.png',
      '/cloud.svg',
      '/stripe.svg',
      '/jest.svg'
    ],
    link: '/ui.yoom.com',
    cuteLink: '/earth.com'
  },
  {
    id: 4,
    title: 'PetSoft Saas - Manage your Pet daycare with ease',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_PETSOFT_CLOUDINARY_URL || '',
    iconLists: [
      '/next.svg',
      '/ts.svg',
      '/tail.svg',
      '/fm.svg',
      '/stripe.svg',
      '/prisma.png'
    ],
    link: 'https://next-saas-petsoft.vercel.app/',
    cuteLink: '/petsoft.com'
  },
  {
    id: 5,
    title: 'MioZio - The best pizza in town',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_MIOZIO_CLOUDINARY_URL || '',
    iconLists: [
      '/next.svg',
      '/ts.svg',
      '/tail.svg',
      '/fm.svg',
      '/prisma.png',
      '/stripe.svg'
    ],
    link: 'https://mio-zio.vercel.app/',
    cuteLink: '/mio-zio.com'
  },
  {
    id: 6,
    title: 'React Napoli - Maybe yet another pizza app',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_REACT_PIZZA_CLOUDINARY_URL || '',
    iconLists: ['/react.svg', '/tail.svg'],
    link: 'https://react-napoli.onrender.com/',
    cuteLink: '/napoli.com'
  },
  {
    id: 7,
    title: 'Aquaman Bali - The best surfing experience in Bali',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_AQUAMAN_CLOUDINARY_URL || '',
    iconLists: ['/next.svg', '/tail.svg', '/fm.svg'],
    link: 'https://aquaman-surf-bali.vercel.app/',
    cuteLink: '/aquaman-surf-bali.com'
  },
  {
    id: 8,
    title: 'CarHub - Booking your car is just a click away',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_CARHUB_CLOUDINARY_URL || '',
    iconLists: ['/next.svg', '/ts.svg', '/tail.svg', '/stripe.svg'],
    link: 'https://car-hub-jade-two.vercel.app/',
    cuteLink: '/car-hub.com'
  },

  {
    id: 9,
    title: 'Nike landing page',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_NIKE_CLOUDINARY_URL || '',
    iconLists: ['/next.svg', '/ts.svg', '/tail.svg', '/fm.svg'],
    link: 'https://nike-landing-vert.vercel.app/',
    cuteLink: '/nike.com'
  },
  {
    id: 10,
    title: 'RoamReady - Travel app landing page',
    description:
      'Vibecession viral hashtag fixie tote bag hell of, hoodie sus pug master cleanse gentrify cupping truffaut',
    img: process.env.NEXT_PUBLIC_TRAVEL_CLOUDINARY_URL || '',
    iconLists: ['/next.svg', '/ts.svg', '/tail.svg'],
    link: 'https://travel-landing-seven.vercel.app/',
    cuteLink: '/roamready.com'
  }
]

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Intern - Fullstack Web Developer',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.png',
    flag: 'https://flagcdn.com/ch.svg'
  },
  {
    id: 2,
    title: 'Project Manager - Land Remediation',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.png',
    flag: 'https://flagcdn.com/ch.svg'
  },
  {
    id: 3,
    title: 'Research Associate - Molecular Biology',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.png',
    flag: 'https://flagcdn.com/fr.svg'
  },
  {
    id: 4,
    title: 'Research Associate - Molecular Biology',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.png',
    flag: 'https://flagcdn.com/ca.svg'
  }
]

export const EDUCATION = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.png',
    flag: 'https://flagcdn.com/ch.svg'
  },
  {
    id: 2,
    title: 'Online Web Development Courses',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.png',
    flag: 'https://flagcdn.com/ch.svg'
  },
  {
    id: 3,
    title: 'M.Eng. Civil Engineering',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.png',
    flag: 'https://flagcdn.com/fr.svg'
  },
  {
    id: 4,
    title: 'M.Sc. Molecular Biology',
    description:
      'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.png',
    flag: 'https://flagcdn.com/fr.svg'
  }
]

export const SOCIAL_MEDIA = [
  {
    id: 1,
    img: '/git.png',
    href: process.env.NEXT_PUBLIC_GITHUB
  },
  {
    id: 2,
    img: '/link.png',
    href: process.env.NEXT_PUBLIC_LINKEDIN
  }
]
