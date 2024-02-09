import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animations';

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    id,
    description,
    deployed_url,
    github_url,
    key_points,
  },
  showDetail,
  setShowDetail,
}) => {
  const isBrowser = () => typeof window !== 'undefined';

  function scrollToTop() {
    if (!isBrowser()) return;
    const elem = document.getElementById('top-content');
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="object-cover object-center cursor-pointer"
        onClick={() => {
          setShowDetail(id);
          scrollToTop();
        }}
        width={300}
        height={150}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-8 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-cyan-400"
            >
              <Image
                src={image_path}
                alt={name}
                width={300}
                height={150}
                layout="responsive"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreffer"
                  className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
              )}

              {deployed_url && (
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noopener noreffer"
                  className="flex items-center px-4 py-2 space-x-3 bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Project</span>
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.h3 variants={fadeInUp} className="font-bold">
              Techinal Stack:{' '}
              {key_points.map((tech, idx) => (
                <span className="text-sm italic font-normal" key={tech}>
                  {tech}
                  {key_points.length - 1 === idx ? '' : ', '}
                </span>
              ))}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-3 space-x-2 text-sm tracking-wider"
            >
              {category.map((tech) => (
                <span
                  className="px-2 py-1 my-1 uppercase bg-gray-200 rounded-sm dark:bg-dark-200"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 transition duration-200 bg-gray-200 rounded-full group hover:bg-gray-400 top-3 right-3 focus:outline-none dark:bg-dark-200 dark:hover:bg-gray-50"
          >
            <MdClose
              size={30}
              className="group-hover:text-gray-50 dark:group-hover:text-gray-800"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
