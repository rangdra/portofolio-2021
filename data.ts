import { RiComputerLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { FaMobileAlt, FaReact, FaServer } from 'react-icons/fa';
import {
  SiBootstrap,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AiFillHtml5, AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai';

import { Project, Service, Skill } from './types';

const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Building a Single Page Application using <b>HTML, CSS </b> dan <b>React JS</b>.',
    // about:
    //   'Build beautiful and responsive SPAs using <b>HTML, CSS </B> and <b>React JS</b>.',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    // about:
    //     'handle database, server, api menggunakan <b>Express </b> & populer frameworks lainnya.',
    about:
      'Handle database, server, api using <b>Express Js, Nest Js</b> & other popular frameworks.',
  },
  {
    Icon: FaMobileAlt,
    title: 'Mobile Development',
    about: 'Build and Develop Mobile Application using <b>React Native</b>',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    // about: 'Membangun dan Mengembangkan REST API menggunakan <b>Node API</b>.',
    about: 'Build and Develop REST API using <b>Node Js</b>.',
  },
];

const frontendSkills: Skill[] = [
  {
    Icon: AiFillHtml5,
    name: 'HTML, CSS, JavaScript',
    level: '100%',
  },
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '100%',
  },
  {
    Icon: FaReact,
    name: 'React: CRA and NextJs',
    level: '100%',
  },
  {
    Icon: FaReact,
    name: 'React Native',
    level: '100%',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind CSS',
    level: '100%',
  },
  {
    Icon: SiBootstrap,
    name: 'Bootstrap',
    level: '100%',
  },
  {
    Icon: AiOutlineAntDesign,
    name: 'Ant Design',
    level: '100%',
  },
  {
    Icon: SiSass,
    name: 'SASS',
    level: '100%',
  },
  {
    Icon: SiStyledcomponents,
    name: 'Styled-Components',
    level: '100%',
  },
];

const backendSkills: Skill[] = [
  {
    Icon: SiTypescript,
    name: 'TypeScript',
    level: '100%',
  },
  {
    Icon: SiNodedotjs,
    name: 'ExpressJs',
    level: '100%',
  },
  {
    Icon: SiNestjs,
    name: 'NestJs',
    level: '100%',
  },
  {
    Icon: SiMongodb,
    name: 'Mongo DB',
    level: '100%',
  },
  {
    Icon: SiPostgresql,
    name: 'PostgreSQL',
    level: '100%',
  },
  {
    Icon: SiPostman,
    name: 'Postman',
    level: '100%',
  },
];

// const projects: Project[] = [
//     {
//         id: 1,
//         name: 'My Personal Website',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1623930334/img-projects/porto_mmygl3.png',
//         deployed_url: 'https://rangdrap.vercel.app/',
//         github_url: 'https://github.com/rangdra/portofolio-2021',
//         category: ['nextjs'],
//         description:
//             'Website pribadi saya di buat dengan Next Js dan Tailwind CSS.',
//         key_points: ['Next JS', 'Tailwind', 'Framer Motion'],
//     },
//     {
//         id: 2,
//         name: 'belanjalagi.com',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1611581338/img-projects/bl/bl1_ekddzb.png',
//         deployed_url: 'https://belanjalagi.herokuapp.com/',
//         github_url: '#',
//         category: ['react', 'mern'],
//         description:
//             'Website E-Commerce di buat dengan MERN STACK dengan styling React Bootstrap. mengimplementasikan full functional component dengan menggunakan state management redux, Authentication dengan JWT',
//         key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Bootstrap'],
//     },
//     {
//         id: 3,
//         name: 'Staycation.',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1609589659/img-projects/staycation/sc1_b6rvfz.png',
//         deployed_url: 'https://staycation-rp.netlify.app/',
//         github_url: '#',
//         category: ['react', 'mern'],
//         description: 'Website pemesanan penginapan dibuat dengan MERN STACK.',
//         key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Bootstrap'],
//     },
//     {
//         id: 4,
//         name: 'HOLAEVENTS.',
//         image_path:
//             'https://res.cloudinary.com/djwe2thpu/image/upload/v1622917421/apture_iewvry.png',
//         deployed_url: 'https://rpevents.vercel.app/',
//         github_url: 'https://github.com/rangdra/rp-events',
//         category: ['nextjs', 'typescript'],
//         description: 'Mencari events-events terbaru.',
//         key_points: ['Next JS', 'Strapi', 'Typescript', 'Tailwind'],
//     },
//     {
//         id: 5,
//         name: 'LuxSpace.',
//         image_path:
//             'https://res.cloudinary.com/rangdradev/image/upload/v1652792564/luxspace_a7wkfg.png',
//         deployed_url: 'https://rp-luxspace.netlify.app/',
//         github_url: '#',
//         category: ['react'],
//         description:
//             'LuxSpace merupakan hasil belajar dari course Master Class: React JS dan Tailwind CSS Website Development BuildWithAngga',
//         key_points: ['React', 'Tailwind', 'Custom Hooks', 'Responsive Design'],
//     },
//     // {
//     //   id: 5,
//     //   name: 'Social App',
//     //   image_path:
//     //     'https://res.cloudinary.com/rangdra/image/upload/v1617125498/img-projects/socialapp2_een01b.png',
//     //   deployed_url: 'https://rpsocialapp.netlify.app/',
//     //   github_url: 'https://github.com/rangdra/merng-client-socialapp',
//     //   category: ['react', 'mern'],
//     //   description: 'MERN Graphql & Semantic UI',
//     //   key_points: [
//     //     'Mongo DB',
//     //     'React',
//     //     'Express',
//     //     'Node',
//     //     'Graphql',
//     //     'Semantic UI',
//     //   ],
//     // },

//     // {
//     //     id: 5,
//     //     name: 'Post App',
//     //     image_path:
//     //         'https://res.cloudinary.com/rangdra/image/upload/v1617125572/img-projects/postapp/postapp_uvqbhb.png',
//     //     deployed_url: 'https://postapp22.netlify.app/',
//     //     github_url: 'https://github.com/rangdra/mern-postapp-client',
//     //     category: ['react', 'mern'],
//     //     description: 'MERN stack & tailwind css',
//     //     key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Tailwind'],
//     // },
//     // {
//     //   id: 6,
//     //   name: 'Realtime Chat App',
//     //   image_path:
//     //     'https://res.cloudinary.com/rangdra/image/upload/v1634282285/img-projects/chat2_tca8kc.png',
//     //   deployed_url: 'https://rpchatapp.netlify.app/',
//     //   github_url: 'https://github.com/rangdra/rp-chat-app',
//     //   category: ['react'],
//     //   description: 'Realtime Chat App, Socket IO, Ant Design',
//     //   key_points: ['React', 'Socket IO', 'Ant design'],
//     // },
//     {
//         id: 6,
//         name: 'CHIT-CHAT',
//         image_path:
//             'https://res.cloudinary.com/rangdradev/image/upload/v1650542501/chit-chat_ogykeb.png',
//         deployed_url: 'https://rp-chit-chat.herokuapp.com/',
//         github_url: '#',
//         category: ['mern'],
//         description: 'Realtime Chat App, Socket IO, Chakra UI',
//         key_points: ['MERN', 'Socket IO', 'Chakra UI'],
//     },
//     // {
//     //   id: 7,
//     //   name: 'Social App V2',
//     //   image_path:
//     //     'https://res.cloudinary.com/rangdra/image/upload/v1627389119/social_app/social_wynsvo.png',
//     //   deployed_url: 'https://rp-socialapp.vercel.app/',
//     //   github_url: 'https://github.com/rangdra/socialapp-v2',
//     //   category: ['mern', 'nextjs'],
//     //   description:
//     //     'CRUD Post, like-unlike, CRD comment, Authentication, Edit Profile, Styling with Tailwind',
//     //   key_points: ['Mongo DB', 'Next JS', 'Express', 'Node', 'Tailwind'],
//     // },
//     {
//         id: 7,
//         name: 'rapebook',
//         image_path:
//             'https://res.cloudinary.com/rangdradev/image/upload/v1657899837/rapebook_dwlz3b.png',
//         deployed_url: 'https://rapebook.netlify.app/',
//         github_url: 'https://github.com/rangdra/rapebook-client',
//         category: ['mern'],
//         description: 'Sosial media apps yang masih perlu banyak perbaikan',
//         key_points: ['Mongo DB', 'Express', 'React', 'Node', 'Tailwind'],
//     },
//     {
//         id: 8,
//         name: 'TANYAJAWAB',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1629398993/img-projects/QWQ_rjvg2c.png',
//         deployed_url: 'https://rp-tanyajawab.vercel.app/',
//         github_url: 'https://github.com/rangdra/mern-tanyajawab-client',
//         category: ['mern', 'nextjs', 'typescript'],
//         description:
//             'CRUD Question,CRD Answer, Authentication, Edit Profile, Styling with Tailwind',
//         key_points: ['MERN', 'Next JS', 'Tailwind', 'Typescript'],
//     },
//     {
//         id: 9,
//         name: 'Shopping Cart',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1628272045/img-projects/shopping_tjksvo.png',
//         deployed_url: 'https://rp-shopping-cart.vercel.app/',
//         github_url: 'https://github.com/rangdra/shopping-cart',
//         category: ['typescript', 'nextjs'],
//         description:
//             'Shopping Cart, Filter: Search product, Ascending Descending product, Rating product dll',
//         key_points: ['Next JS', 'Typescript', 'Bootstrap', 'Context'],
//     },

//     {
//         id: 10,
//         name: 'MGpedia - Final Project',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1633332200/img-projects/mg-pedia_muz4n2.png',
//         deployed_url: 'https://mg-pedia.netlify.app/',
//         github_url: '#',
//         category: ['react'],
//         description:
//             'Ini adalah Final Project saat saya mengikuti Jabar Coding Camp kelas React Js',
//         key_points: ['React', 'ANT design', 'Axios', 'Context'],
//     },

//     {
//         id: 11,
//         name: 'Covid19 Tracker',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1609568968/img-projects/c19track_l8bxh5.png',
//         deployed_url: 'https://covid19-tracker-rp.netlify.app/',
//         category: ['landing page'],
//         github_url: 'https://github.com/rangdra/covid19-tracker',
//         description:
//             'Website perkembangan covid19 diindonesia dengan dengan data dari API. Website dibuat dengan HTML, CSS ,BOOTSTRAP dengan sedikit sentuhan javascript',
//         key_points: ['HTML', 'CSS', 'Bootstrap'],
//     },

//     {
//         id: 12,
//         name: 'Movie App',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1609590217/img-projects/movie%20app/ma2_wmhiyi.png',
//         deployed_url: 'https://movie-app-3c057.web.app/',
//         github_url: 'https://github.com/rangdra/movie-app',
//         category: ['react'],
//         description:
//             'Website pencarian film dibuat dengan react js dengan data dari API',
//         key_points: ['React'],
//     },
//     {
//         id: 13,
//         name: 'Recipe App',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1617728871/img-projects/recipe_rokvds.png',
//         deployed_url: 'https://rp-recipe-app.netlify.app/',
//         github_url: '#',
//         category: ['react'],
//         description: 'Recipe App',
//         key_points: ['React'],
//     },
//     {
//         id: 14,
//         name: 'Nextjs google clone',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1618228516/img-projects/next-google_gho7h1.png',
//         deployed_url: 'https://next-google-clone.vercel.app/',
//         github_url: 'https://github.com/rangdra/next-google-clone',
//         category: ['nextjs'],
//         description: 'Nextjs google clone',
//         key_points: ['Next JS', 'Tailwind'],
//     },
//     {
//         id: 15,
//         name: 'Movies app Next Js',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1619567782/img-projects/movies_fl4j47.png',
//         deployed_url: 'https://movies-app-nextjs.vercel.app/',
//         github_url: 'https://github.com/rangdra/movies-nextjs',
//         category: ['nextjs'],
//         description: 'Movies app Next Js',
//         key_points: ['Next JS', 'Tailwind'],
//     },
//     {
//         id: 16,
//         name: 'Landing page StayCation',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1617695725/img-projects/staycation_fosuvz.png',
//         deployed_url: 'https://landingpage-staycation.netlify.app/',
//         github_url: '#',
//         category: ['landing page'],
//         description: 'Landing page StayCation',
//         key_points: ['HTML', 'CSS', 'SASS', 'AOS'],
//     },
//     {
//         id: 17,
//         name: 'Landing page Food Recipes',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1617710435/img-projects/food_ynwucd.png',
//         deployed_url: 'https://landingpage-foodrecipes.netlify.app/',
//         github_url: '#',
//         category: ['landing page'],
//         description: 'Landing page StayCation',
//         key_points: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
//     },
//     {
//         id: 18,
//         name: 'Landing page Furniture Shop',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1629566506/img-projects/furniture-img_xya7ed.png',
//         deployed_url: 'https://angry-dijkstra-f0bd61.netlify.app/',
//         github_url: 'https://github.com/rangdra/landing-page-furniture-shop',
//         category: ['landing page'],
//         description: 'Landing page Furniture Shop with dark theme',
//         key_points: ['HTML', 'CSS', 'JS', 'AOS'],
//     },
//     {
//         id: 19,
//         name: 'Go-Travel',
//         image_path: '/go-travel.PNG',
//         deployed_url: 'https://angry-nightingale-2dc060.netlify.app/',
//         github_url: 'https://github.com/rangdra/travel-landing-page',
//         category: ['landing page'],
//         description: 'Landing page',
//         key_points: ['HTML', 'CSS', 'JS'],
//     },
//     {
//         id: 20,
//         name: 'Navbar Responsive',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1617709932/img-projects/navbar_ldtgeh.png',
//         deployed_url: 'https://navbar-responsive22.netlify.app/',
//         github_url: '#',
//         category: ['landing page'],
//         description: 'Navbar Responsive',
//         key_points: ['HTML', 'CSS', 'JS'],
//     },
//     {
//         id: 21,
//         name: 'Quiz App',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1669577436/img-projects/quiz_hje2dt.png',
//         deployed_url: 'https://rangdra.github.io/quiz_app-js/',
//         github_url: 'https://github.com/rangdra/quiz_app-js',
//         category: ['vanilla js'],
//         description: 'Quiz App with Vanilla JS',
//         key_points: ['HTML', 'CSS', 'JS'],
//     },
//     {
//         id: 22,
//         name: 'Slider Image',
//         image_path:
//             'https://res.cloudinary.com/rangdra/image/upload/v1669577442/img-projects/slider_ukgtwg.png',
//         deployed_url: 'https://rangdra.github.io/slider-js/',
//         github_url: 'https://github.com/rangdra/slider-js',
//         category: ['vanilla js'],
//         description: 'Slider image with Vanilla JS',
//         key_points: ['HTML', 'CSS', 'JS'],
//     },
// ];

const projects: Project[] = [
  {
    id: uuidv4(),
    name: 'My Personal Website',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1623930334/img-projects/porto_mmygl3.png',
    deployed_url: 'https://rangdrap.vercel.app/',
    github_url: 'https://github.com/rangdra/portofolio-2021',
    category: ['WEB'],
    description: 'My personal website is built with Next Js and Tailwind CSS.',
    key_points: ['Next JS', 'Tailwind', 'Framer Motion'],
  },
  {
    id: uuidv4(),
    name: 'RE/MAX',
    image_path: '/projects/remax/remax-project.png',
    deployed_url: 'https://remax.co.id/',
    github_url: null,
    category: ['WEB', 'CMS', 'API'],
    description:
      'Develop a renting or buying  property for a property company (RE/MAX Indonesia)',
    key_points: [
      'React.JS',
      'Next.JS',
      'Ant Design',
      'Styled-Components',
      'Nest.JS',
      'PostgreSQL',
      'next-i18next',
    ],
  },
  {
    id: uuidv4(),
    name: 'Vines',
    image_path: '/projects/vines/vines.png',
    deployed_url: 'https://vines-indonesia.com/',
    github_url: null,
    category: ['WEB', 'CMS', 'APP'],
    description: 'Develop e-commerce for a beverage company (Vines Indonesia)',
    key_points: [
      'React.JS',
      'Next.JS',
      'React Native',
      'Ant Design',
      'Styled-Components',
    ],
  },
  {
    id: uuidv4(),
    name: 'Medeasy',
    image_path: '/projects/medeasy/medeasy.png',
    deployed_url: 'https://medeasy.ph/',
    github_url: null,
    category: ['WEB', 'CMS', 'APP', 'API'],
    description:
      'Develop a multiplatform app such as cms, web and app for a digital health company (Medeasy PH). Develop main features such as online doctor consultations and other health needs.',
    key_points: [
      'React.JS',
      'React Native',
      'Ant Design',
      'Styled-Components',
      'Nest.JS',
      'PostgreSQL',
    ],
  },
  {
    id: uuidv4(),
    name: 'LED Borobudur Marathon',
    image_path: '/projects/bormar/led-bormar.jpg',
    deployed_url: null,
    github_url: null,
    category: ['WEB'],
    description:
      'Develop an interactive wall system for marathon events (Borobudur Marathon 2023)',
    key_points: ['HTML', 'CSS', 'Vanilla JavaScript'],
  },
  {
    id: uuidv4(),
    name: 'Gudang Acai',
    image_path: '/projects/acai/acai.png',
    deployed_url: null,
    github_url: null,
    category: ['CMS'],
    description:
      'Develop a content management system (dashboard) for a logistic warehouse management company (Gudang Acai).',
    key_points: [
      'React.JS',
      'Ant Design',
      'Styled-Components',
      'React Apexcharts',
    ],
  },
  {
    id: uuidv4(),
    name: 'Astraland',
    image_path: '/projects/astraland/astraland.png',
    deployed_url: null,
    github_url: null,
    category: ['WEB', 'CMS', 'API'],
    description: 'Develop a company profile for Astraland Indonesia.',
    key_points: [
      'React.JS',
      'Next.JS',
      'Ant Design',
      'Styled-Components',
      'Tailwind',
      'Nest.JS',
      'PostgreSQL',
    ],
  },
  {
    id: uuidv4(),
    name: 'MGpedia - Final Project',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1633332200/img-projects/mg-pedia_muz4n2.png',
    deployed_url: 'https://mg-pedia.netlify.app/',
    github_url: '#',
    category: ['WEB'],
    description:
      'This is the Final Project when I joined Jabar Coding Camp React Js class.',
    key_points: ['React', 'ANT design', 'Axios', 'Context'],
  },
  {
    id: uuidv4(),
    name: 'Nextjs google clone',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1618228516/img-projects/next-google_gho7h1.png',
    deployed_url: 'https://next-google-clone.vercel.app/',
    github_url: 'https://github.com/rangdra/next-google-clone',
    category: ['WEB'],
    description: 'Nextjs google clone',
    key_points: ['Next JS', 'Tailwind'],
  },
  {
    id: uuidv4(),
    name: 'Movies app Next Js',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1619567782/img-projects/movies_fl4j47.png',
    deployed_url: 'https://movies-app-nextjs.vercel.app/',
    github_url: 'https://github.com/rangdra/movies-nextjs',
    category: ['WEB'],
    description: 'Movies app Next Js',
    key_points: ['Next JS', 'Tailwind'],
  },
  {
    id: uuidv4(),
    name: 'Landing page StayCation',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617695725/img-projects/staycation_fosuvz.png',
    deployed_url: 'https://landingpage-staycation.netlify.app/',
    github_url: '#',
    category: ['WEB'],
    description: 'Slicing landing page',
    key_points: ['HTML', 'CSS', 'SASS', 'AOS'],
  },
  {
    id: uuidv4(),
    name: 'Landing page Food Recipes',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617710435/img-projects/food_ynwucd.png',
    deployed_url: 'https://landingpage-foodrecipes.netlify.app/',
    github_url: '#',
    category: ['WEB'],
    description: 'Slicing landing page',
    key_points: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
  },
  {
    id: uuidv4(),
    name: 'Landing page Furniture Shop',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1629566506/img-projects/furniture-img_xya7ed.png',
    deployed_url: 'https://angry-dijkstra-f0bd61.netlify.app/',
    github_url: 'https://github.com/rangdra/landing-page-furniture-shop',
    category: ['WEB'],
    description: 'Slicing landing page',
    key_points: ['HTML', 'CSS', 'JS', 'AOS'],
  },
  {
    id: uuidv4(),
    name: 'Go-Travel',
    image_path: '/go-travel.PNG',
    deployed_url: 'https://angry-nightingale-2dc060.netlify.app/',
    github_url: 'https://github.com/rangdra/travel-landing-page',
    category: ['WEB'],
    description: 'Slicing landing page',
    key_points: ['HTML', 'CSS', 'JS'],
  },
  {
    id: uuidv4(),
    name: 'Quiz App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1669577436/img-projects/quiz_hje2dt.png',
    deployed_url: 'https://rangdra.github.io/quiz_app-js/',
    github_url: 'https://github.com/rangdra/quiz_app-js',
    category: ['WEB'],
    description: 'Quiz App with Vanilla JS',
    key_points: ['HTML', 'CSS', 'JS'],
  },
  {
    id: uuidv4(),
    name: 'Slider Image',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1669577442/img-projects/slider_ukgtwg.png',
    deployed_url: 'https://rangdra.github.io/slider-js/',
    github_url: 'https://github.com/rangdra/slider-js',
    category: ['WEB'],
    description: 'Slider image with Vanilla JS',
    key_points: ['HTML', 'CSS', 'JS'],
  },
];

export { services, projects, frontendSkills, backendSkills };
