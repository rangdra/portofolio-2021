import Head from "next/head";
import Bar from "../components/Bar";
import { frontendSkills, backendSkills } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimations } from "../animations";

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimations}
      exit="exit"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Resume | Rangdra Pangestu</title>
      </Head>
      {/* Education */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Information System</h5>
            <p className="font-semibold">
              STMIK Pranata Indonesia (2019 - now)
            </p>
            <p className="my-3">
              I am currently pursuing S.Kom in Information System from STMIK
              Pranata Indonesia
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            {/* Jabatan */}
            <h5 className="my-2 text-xl font-bold">-</h5>
            {/* Office name */}
            <p className="font-semibold">-</p>
            {/* Desc Job */}
            <p className="my-3">-</p>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Web Development Skills</h2>
        <h3>Skills I learned during the quarantine</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-xl font-bold">Front-end Development</h5>
            <div className="my-2">
              {frontendSkills.map((language) => (
                <Bar data={language} key={language.name} />
              ))}
            </div>
          </div>{" "}
          <div>
            <h5 className="my-3 text-xl font-bold">Back-end Development</h5>
            <div className="my-2">
              {backendSkills.map((tool) => (
                <Bar data={tool} key={tool.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
