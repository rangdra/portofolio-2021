import { RiComputerLine } from 'react-icons/ri';
import { FaReact, FaServer } from 'react-icons/fa';
import {
  SiBootstrap,
  SiMongodb,
  SiNodeDotJs,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';
import { AiFillHtml5, AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai';

import { Project, Service, Skill } from './types';

const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'Membangun Single Page Application menggunakan <b>HTML, CSS </b> dan <b>React JS</b>.',
    // about:
    //   'Build beautiful and responsive SPAs using <b>HTML, CSS </B> and <b>React JS</b>.',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api menggunakan <b>Express </b> & populer frameworks lainnya.',
    // about:
    //   'handle database, server, api using <b>Express</b> & other popular frameworks.',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Membangun dan Mengembangkan REST API menggunakan <b>Node API</b>.',
    // about: 'Build and Develop REST API using <b>Node API</b>.',
  },
];

const frontendSkills: Skill[] = [
  {
    Icon: AiFillHtml5,
    name: 'HTML, CSS, JavaScript',
    level: '100%',
  },
  {
    Icon: FaReact,
    name: 'React: CRA and NextJs',
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
  //   {
  //     Icon: SiSass,
  //     name: 'SASS',
  //     level: '100%',
  //   },
];

const backendSkills: Skill[] = [
  {
    Icon: SiNodeDotJs,
    name: 'ExpressJs',
    level: '100%',
  },
  {
    Icon: SiMongodb,
    name: 'Mongo DB',
    level: '100%',
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'My Personal Website',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1623930334/img-projects/porto_mmygl3.png',
    deployed_url: 'https://rangdrap.vercel.app/',
    github_url: 'https://github.com/rangdra/portofolio-2021',
    category: ['nextjs'],
    description:
      'Website pribadi saya di buat dengan Next Js dan Tailwind CSS.',
    key_points: ['Next JS', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 2,
    name: 'belanjalagi.com',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1611581338/img-projects/bl/bl1_ekddzb.png',
    deployed_url: 'https://belanjalagi.herokuapp.com/',
    github_url: '#',
    category: ['react', 'mern'],
    description:
      'Website E-Commerce di buat dengan MERN STACK dengan styling React Bootstrap. mengimplementasikan full functional component dengan menggunakan state management redux, Authentication dengan JWT',
    key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Bootstrap'],
  },
  {
    id: 3,
    name: 'Staycation.',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1609589659/img-projects/staycation/sc1_b6rvfz.png',
    deployed_url: 'https://staycation-rp.netlify.app/',
    github_url: '#',
    category: ['react', 'mern'],
    description: 'Website pemesanan penginapan dibuat dengan MERN STACK.',
    key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Bootstrap'],
  },
  {
    id: 4,
    name: 'HOLAEVENTS.',
    image_path:
      'https://res.cloudinary.com/djwe2thpu/image/upload/v1622917421/apture_iewvry.png',
    deployed_url: 'https://rpevents.vercel.app/',
    github_url: 'https://github.com/rangdra/rp-events',
    category: ['nextjs', 'typescript'],
    description: 'Mencari events-events terbaru.',
    key_points: ['Next JS', 'Strapi', 'Typescript', 'Tailwind'],
  },
  // {
  //   id: 5,
  //   name: 'Social App',
  //   image_path:
  //     'https://res.cloudinary.com/rangdra/image/upload/v1617125498/img-projects/socialapp2_een01b.png',
  //   deployed_url: 'https://rpsocialapp.netlify.app/',
  //   github_url: 'https://github.com/rangdra/merng-client-socialapp',
  //   category: ['react', 'mern'],
  //   description: 'MERN Graphql & Semantic UI',
  //   key_points: [
  //     'Mongo DB',
  //     'React',
  //     'Express',
  //     'Node',
  //     'Graphql',
  //     'Semantic UI',
  //   ],
  // },

  // {
  //     id: 5,
  //     name: 'Post App',
  //     image_path:
  //         'https://res.cloudinary.com/rangdra/image/upload/v1617125572/img-projects/postapp/postapp_uvqbhb.png',
  //     deployed_url: 'https://postapp22.netlify.app/',
  //     github_url: 'https://github.com/rangdra/mern-postapp-client',
  //     category: ['react', 'mern'],
  //     description: 'MERN stack & tailwind css',
  //     key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Tailwind'],
  // },
  // {
  //   id: 6,
  //   name: 'Realtime Chat App',
  //   image_path:
  //     'https://res.cloudinary.com/rangdra/image/upload/v1634282285/img-projects/chat2_tca8kc.png',
  //   deployed_url: 'https://rpchatapp.netlify.app/',
  //   github_url: 'https://github.com/rangdra/rp-chat-app',
  //   category: ['react'],
  //   description: 'Realtime Chat App, Socket IO, Ant Design',
  //   key_points: ['React', 'Socket IO', 'Ant design'],
  // },
  {
    id: 6,
    name: 'CHIT-CHAT',
    image_path:
      'https://res.cloudinary.com/rangdradev/image/upload/v1650542501/chit-chat_ogykeb.png',
    deployed_url: 'https://rp-chit-chat.herokuapp.com/',
    github_url: '#',
    category: ['mern'],
    description: 'Realtime Chat App, Socket IO, Chakra UI',
    key_points: ['MERN', 'Socket IO', 'Chakra UI'],
  },
  // {
  //   id: 7,
  //   name: 'Social App V2',
  //   image_path:
  //     'https://res.cloudinary.com/rangdra/image/upload/v1627389119/social_app/social_wynsvo.png',
  //   deployed_url: 'https://rp-socialapp.vercel.app/',
  //   github_url: 'https://github.com/rangdra/socialapp-v2',
  //   category: ['mern', 'nextjs'],
  //   description:
  //     'CRUD Post, like-unlike, CRD comment, Authentication, Edit Profile, Styling with Tailwind',
  //   key_points: ['Mongo DB', 'Next JS', 'Express', 'Node', 'Tailwind'],
  // },
  {
    id: 22,
    name: 'Posts App',
    image_path:
      'https://res.cloudinary.com/rangdradev/image/upload/v1642608321/mern-posts/mern-posts_xr5mqf.png',
    deployed_url: 'https://rp-posts.netlify.app/',
    github_url: 'https://github.com/rangdra/mern-posts-client',
    category: ['mern'],
    description: 'CRUD Post, Authentication, Styling with Tailwind',
    key_points: ['Mongo DB', 'Express', 'React', 'Node', 'Tailwind'],
  },
  {
    id: 8,
    name: 'TANYAJAWAB',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1629398993/img-projects/QWQ_rjvg2c.png',
    deployed_url: 'https://rp-tanyajawab.vercel.app/',
    github_url: 'https://github.com/rangdra/mern-tanyajawab-client',
    category: ['mern', 'nextjs', 'typescript'],
    description:
      'CRUD Question,CRD Answer, Authentication, Edit Profile, Styling with Tailwind',
    key_points: ['MERN', 'Next JS', 'Tailwind', 'Typescript'],
  },
  {
    id: 9,
    name: 'Shopping Cart',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1628272045/img-projects/shopping_tjksvo.png',
    deployed_url: 'https://rp-shopping-cart.vercel.app/',
    github_url: 'https://github.com/rangdra/shopping-cart',
    category: ['typescript', 'nextjs'],
    description:
      'Shopping Cart, Filter: Search product, Ascending Descending product, Rating product dll',
    key_points: ['Next JS', 'Typescript', 'Bootstrap', 'Context'],
  },

  {
    id: 10,
    name: 'MGpedia - Final Project',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1633332200/img-projects/mg-pedia_muz4n2.png',
    deployed_url: 'https://mg-pedia.netlify.app/',
    github_url: '#',
    category: ['react'],
    description:
      'Ini adalah Final Project saat saya mengikuti Jabar Coding Camp kelas React Js',
    key_points: ['React', 'ANT design', 'Axios', 'Context'],
  },

  {
    id: 11,
    name: 'Covid19 Tracker',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1609568968/img-projects/c19track_l8bxh5.png',
    deployed_url: 'https://covid19-tracker-rp.netlify.app/',
    category: ['landing page'],
    github_url: 'https://github.com/rangdra/covid19-tracker',
    description:
      'Website perkembangan covid19 diindonesia dengan dengan data dari API. Website dibuat dengan HTML, CSS ,BOOTSTRAP dengan sedikit sentuhan javascript',
    key_points: ['HTML', 'CSS', 'Bootstrap'],
  },

  {
    id: 12,
    name: 'Movie App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1609590217/img-projects/movie%20app/ma2_wmhiyi.png',
    deployed_url: 'https://movie-app-3c057.web.app/',
    github_url: 'https://github.com/rangdra/movie-app',
    category: ['react'],
    description:
      'Website pencarian film dibuat dengan react js dengan data dari API',
    key_points: ['React'],
  },
  {
    id: 13,
    name: 'Recipe App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617728871/img-projects/recipe_rokvds.png',
    deployed_url: 'https://rp-recipe-app.netlify.app/',
    github_url: '#',
    category: ['react'],
    description: 'Recipe App',
    key_points: ['React'],
  },
  {
    id: 14,
    name: 'Nextjs google clone',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1618228516/img-projects/next-google_gho7h1.png',
    deployed_url: 'https://next-google-clone.vercel.app/',
    github_url: 'https://github.com/rangdra/next-google-clone',
    category: ['nextjs'],
    description: 'Nextjs google clone',
    key_points: ['Next JS', 'Tailwind'],
  },
  {
    id: 15,
    name: 'Movies app Next Js',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1619567782/img-projects/movies_fl4j47.png',
    deployed_url: 'https://movies-app-nextjs.vercel.app/',
    github_url: 'https://github.com/rangdra/movies-nextjs',
    category: ['nextjs'],
    description: 'Movies app Next Js',
    key_points: ['Next JS', 'Tailwind'],
  },
  {
    id: 16,
    name: 'Landing page StayCation',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617695725/img-projects/staycation_fosuvz.png',
    deployed_url: 'https://landingpage-staycation.netlify.app/',
    github_url: '#',
    category: ['landing page'],
    description: 'Landing page StayCation',
    key_points: ['HTML', 'CSS', 'SASS', 'AOS'],
  },
  {
    id: 17,
    name: 'Landing page Food Recipes',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617710435/img-projects/food_ynwucd.png',
    deployed_url: 'https://landingpage-foodrecipes.netlify.app/',
    github_url: '#',
    category: ['landing page'],
    description: 'Landing page StayCation',
    key_points: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
  },
  {
    id: 18,
    name: 'Landing page Furniture Shop',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1629566506/img-projects/furniture-img_xya7ed.png',
    deployed_url: 'https://angry-dijkstra-f0bd61.netlify.app/',
    github_url: 'https://github.com/rangdra/landing-page-furniture-shop',
    category: ['landing page'],
    description: 'Landing page Furniture Shop with dark theme',
    key_points: ['HTML', 'CSS', 'JS', 'AOS'],
  },
  {
    id: 19,
    name: 'Go-Travel',
    image_path: '/go-travel.PNG',
    deployed_url: 'https://angry-nightingale-2dc060.netlify.app/',
    github_url: 'https://github.com/rangdra/travel-landing-page',
    category: ['landing page'],
    description: 'Landing page',
    key_points: ['HTML', 'CSS', 'JS'],
  },
  {
    id: 20,
    name: 'Navbar Responsive',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617709932/img-projects/navbar_ldtgeh.png',
    deployed_url: 'https://navbar-responsive22.netlify.app/',
    github_url: '#',
    category: ['landing page'],
    description: 'Navbar Responsive',
    key_points: ['HTML', 'CSS', 'JS'],
  },
];

export { services, projects, frontendSkills, backendSkills };
