import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp, routeAnimations, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

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
                <title>Portofolio | Rangdra Pangestu</title>
            </Head>
            <h6 className="my-3 text-base font-medium">
                hello, I am a person who is very interested in web-based
                application development. My specialty located on the frontend.
                That is to make the web beautiful, responsive and has good web
                performance.
            </h6>{' '}
            <span className="font-medium">
                To support the skills above I like to follow trainings on web
                development for always updates on the development of the current
                digital world that can be used to support the development of the
                company where I work.😄
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
