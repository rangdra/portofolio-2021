import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../types';
import { stagger, fadeInUp, routeAnimations } from '../animations';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Portofolio = () => {
  const router = useRouter();
  const siteUrl = 'https://rangdrap.vercel.app';
  const currentUrl = `${siteUrl}${router.asPath}`;

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('projects');
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | 'projects') => {
    if (category === 'projects') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArr = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArr);
    setActive(category);
  };
  return (
    <motion.div
      variants={routeAnimations}
      initial="initial"
      exit="exit"
      animate="animate"
      className="px-5 py-2 h-[70vh] overflow-y-scroll"
    >
      <Head>
        <title>Portofolio | Rangdra Pangestu</title>
        <meta name="description" content="My list portofolio projects" />
        <meta property="og:title" content="Portofolio | Rangdra Pangestu" />
        <meta name="og:description" content="My list portofolio projects" />
        <link rel="canonical" href={currentUrl} />

        <meta property="og:url" content={currentUrl} />

        <meta name="robots" content="noindex, follow" />
      </Head>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
      <div id="top-content"></div>
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, idx) => (
          <motion.div
            variants={fadeInUp}
            key={idx}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard
              project={project}
              key={project.id}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portofolio;
