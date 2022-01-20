import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../types';
import { stagger, fadeInUp, routeAnimations } from '../animations';
import Head from 'next/head';

const Portofolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
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
      </Head>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
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
