import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeAnimations, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const Home = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Rangdra Pangestu</title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        hello, I am Rangdra Pangestu, currently I am studying at one of the
        universities. In my spare time, I focus on learning about web
        development, especially in the front-end dev. I created this site to
        learn anything about web development. Starting from planning, design,
        development, deployment, and maintenance. there are many other things
        that I have not encountered, and I am ready to learn.😄
      </h6>
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
