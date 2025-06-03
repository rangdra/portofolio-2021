import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp, routeAnimations, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const siteUrl = 'https://rangdrap.vercel.app';
  const currentUrl = `${siteUrl}${router.asPath}`;

  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>About | Rangdra P</title>
        <meta
          name="description"
          content="A Software Engineer focusing on web and mobile application development.
        My expertise includes frontend and backend development, as well as
        database handling. I have experience in various technologies, such as
        TypeScript, React, Next.js, React Native, Node.js, Nest.js, SQL"
        />
        <meta property="og:title" content="About | Rangdra Pangestu" />
        <meta
          name="og:description"
          content="A Software Engineer focusing on web and mobile application development.
        My expertise includes frontend and backend development, as well as
        database handling. I have experience in various technologies, such as
        TypeScript, React, Next.js, React Native, Node.js, Nest.js, SQL"
        />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:url" content={currentUrl} />

        <meta name="robots" content="noindex, follow" />
      </Head>
      <h6 className="my-3 text-base font-medium">
        A Software Engineer focusing on web and mobile application development.
        My expertise includes frontend and backend development, as well as
        database handling. I have experience in various technologies, such as
        TypeScript, React, Next.js, React Native, Node.js, Nest.js, SQL
        {/* Hello, I am a person who is very interested in web development. My
        specialty lies on the frontend side. That is to make the web beautiful,
        responsive and have good web performance. */}
      </h6>{' '}
      <span className="font-medium">
        To support the above skills, I like to take part in trainings on web
        development to always be updated on the development of the current
        digital world that can be used to support the development of the company
        where I work.
        {/* To support the above skills, I like to attend trainings about web
        development to always update the development of the digital world which
        can be used to support the development of the company where I work.😄 */}
      </span>
      <div className="p-4 mt-5 bg-gray-300 dark:bg-dark-100 flex-grow ml-[-1.5rem] mr-[-1.5rem]">
        <h6 className="my-3 text-xl font-bold tracking-wide">
          What I am Doing?
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, idx) => (
            <motion.div
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={idx}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
