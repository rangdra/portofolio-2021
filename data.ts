import { RiComputerLine } from 'react-icons/ri';
import { FaReact, FaServer } from 'react-icons/fa';
import {
  SiBootstrap,
  SiMongodb,
  SiNodeDotJs,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';
import { AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';

import { Project, Service, Skill } from './types';

const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'I can develop robust  REST API using <b>Node API</b> ',
  },
];

const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'Django',
    level: '100%',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '80%',
  },
];

const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '85%',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45%',
  },
  {
    Icon: BsCircleFill,
    name: 'Illustrator',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45%',
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
    Icon: SiSass,
    name: 'SASS',
    level: '100%',
  },
];

const backendSkills: Skill[] = [
  {
    Icon: SiNodeDotJs,
    name: 'Node Js',
    level: '100%',
  },
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
      'https://res.cloudinary.com/rangdra/image/upload/v1617126020/img-projects/porto_r8jypd.png',
    deployed_url: 'https://rangdra2.vercel.app/',
    github_url: 'https://github.com/rangdra/portofolio-2021',
    category: ['nextjs'],
    description:
      'Website pribadi saya di buat dengan Next Js dan Tailwind CSS.',
    key_points: ['Next Js', 'Tailwind', 'Framer Motion'],
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
    id: 15,
    name: 'HOLAEVENTS.',
    image_path:
      'https://res.cloudinary.com/djwe2thpu/image/upload/v1622917421/apture_iewvry.png',
    deployed_url: 'https://rpevents.vercel.app/',
    github_url: 'https://github.com/rangdra/rp-events',
    category: ['nextjs', 'typescript'],
    description: 'Mencari events-events terbaru.',
    key_points: ['Next js', 'Typescript', 'Tailwind'],
  },
  {
    id: 4,
    name: 'Social App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617125498/img-projects/socialapp2_een01b.png',
    deployed_url: 'https://rpsocialapp.netlify.app/',
    github_url: 'https://github.com/rangdra/merng-client-socialapp',
    category: ['react', 'mern'],
    description: 'MERN Graphql & Semantic UI',
    key_points: [
      'Mongo DB',
      'React',
      'Express',
      'Node',
      'Graphql',
      'Semantic UI',
    ],
  },

  {
    id: 5,
    name: 'Post App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617125572/img-projects/postapp/postapp_uvqbhb.png',
    deployed_url: 'https://postapp22.netlify.app/',
    github_url: 'https://github.com/rangdra/mern-postapp-client',
    category: ['react', 'mern'],
    description: 'MERN stack & tailwind css',
    key_points: ['Mongo DB', 'React', 'Express', 'Node', 'Tailwind'],
  },
  {
    id: 6,
    name: 'Realtime Chat App',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617644056/img-projects/chattapp_xxo1hu.png',
    deployed_url: 'https://rpchatapp.netlify.app/',
    github_url: '#',
    category: ['react'],
    description: 'Realtime Chat App with Socket IO and Material UI',
    key_points: ['React', 'Socket IO', 'Material UI'],
  },

  {
    id: 7,
    name: 'Covid19 Tracker',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1609568968/img-projects/c19track_l8bxh5.png',
    deployed_url: 'https://covid19-tracker-rp.netlify.app/',
    category: ['html-css-js'],
    github_url: 'https://github.com/rangdra/covid19-tracker',
    description:
      'Website perkembangan covid19 diindonesia dengan dengan data dari API. Website dibuat dengan HTML, CSS ,BOOTSTRAP dengan sedikit sentuhan javascript',
    key_points: ['HTML', 'CSS', 'Bootstrap'],
  },

  {
    id: 8,
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
    id: 9,
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
    id: 10,
    name: 'Nextjs google clone',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1618228516/img-projects/next-google_gho7h1.png',
    deployed_url: 'https://next-google-clone.vercel.app/',
    github_url: 'https://github.com/rangdra/next-google-clone',
    category: ['nextjs'],
    description: 'Nextjs google clone',
    key_points: ['Nextjs', 'Tailwind'],
  },
  {
    id: 11,
    name: 'Movies app Next Js',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1619567782/img-projects/movies_fl4j47.png',
    deployed_url: 'https://movies-app-nextjs.vercel.app/',
    github_url: 'https://github.com/rangdra/movies-nextjs',
    category: ['nextjs'],
    description: 'Movies app Next Js',
    key_points: ['Nextjs', 'Tailwind'],
  },
  {
    id: 12,
    name: 'Landing page StayCation',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617695725/img-projects/staycation_fosuvz.png',
    deployed_url: 'https://landingpage-staycation.netlify.app/',
    github_url: '#',
    category: ['html-css-js'],
    description: 'Landing page StayCation',
    key_points: ['HTML', 'CSS', 'SASS', 'AOS'],
  },
  {
    id: 13,
    name: 'Landing page Food Recipes',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617710435/img-projects/food_ynwucd.png',
    deployed_url: 'https://landingpage-foodrecipes.netlify.app/',
    github_url: '#',
    category: ['html-css-js'],
    description: 'Landing page StayCation',
    key_points: ['HTML', 'CSS', 'Bootstrap', 'AOS'],
  },
  {
    id: 14,
    name: 'Navbar Responsive',
    image_path:
      'https://res.cloudinary.com/rangdra/image/upload/v1617709932/img-projects/navbar_ldtgeh.png',
    deployed_url: 'https://navbar-responsive22.netlify.app/',
    github_url: '#',
    category: ['html-css-js'],
    description: 'Navbar Responsive',
    key_points: ['HTML', 'CSS', 'JS'],
  },
];

export { tools, languages, services, projects, frontendSkills, backendSkills };