import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routeAnimations } from "../animations";
import Bar from "../components/Bar";
import { frontendSkills, backendSkills } from "../data";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const Resume = () => {
  const router = useRouter();
  const siteUrl = "https://rangdrap.vercel.app";
  const currentUrl = `${siteUrl}${router.asPath}`;

  return (
    <motion.div
      variants={routeAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Resume — Rangdra Pangestu</title>
        <meta
          name="description"
          content="My education, experience, and technical skills."
        />
        <meta property="og:title" content="Resume — Rangdra Pangestu" />
        <meta
          name="og:description"
          content="My education, experience, and technical skills."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      {/* ─── Page Header ─── */}
      <section className="bg-surface border-b border-hairline">
        <div className="container-app py-section-sm">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <p className="eyebrow mb-sm">Resume</p>
            <h1 className="text-heading-1 font-medium text-ink text-balance">
              Education & Experience
            </h1>
            <p className="mt-md text-body-md text-slate max-w-2xl">
              A summary of my professional journey, academic background, and
              technical capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className="container-app py-section-lg">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-xxl"
        >
          {/* Education */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-sm mb-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-feature text-brand-green-dark">
                <HiAcademicCap className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-heading-3 font-medium text-ink">Education</h2>
            </div>
            <div className="card">
              <h3 className="text-heading-5 font-semibold text-ink">
                Information System
              </h3>
              <p className="text-body-sm font-medium text-brand-green-dark mt-xxs">
                STMIK Pranata Indonesia
              </p>
              <span className="badge-green-soft mt-sm">2019 – 2023</span>
              <p className="mt-md text-body-sm text-slate">
                Bachelor of Computer, Major in Information System. Cumulative
                GPA: 3.58/4.0.
              </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-sm mb-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-feature text-brand-green-dark">
                <HiBriefcase className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="text-heading-3 font-medium text-ink">
                Experience
              </h2>
            </div>
            <div className="card">
              <h3 className="text-heading-5 font-semibold text-ink">
                Associate Developer
              </h3>
              <p className="text-body-sm font-medium text-brand-green-dark mt-xxs">
                PT. Vanz Inovatif Teknologi
              </p>
              <span className="badge-green-soft mt-sm">Dec 2022 – Present</span>
              <ul className="mt-md space-y-sm text-body-sm text-slate list-none">
                <li className="flex gap-xs">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  Build, maintain, and develop applications (Mobile, CMS, Web)
                  using React Native and React/Next.js; integrate RESTful APIs.
                </li>
                <li className="flex gap-xs">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  Build and provide RESTful APIs using NestJS for development
                  needs.
                </li>
                <li className="flex gap-xs">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  Collaborate with UI/UX designers to translate designs into
                  production code.
                </li>
                <li className="flex gap-xs">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  Collaborate with QA to ensure smooth, bug-free application
                  performance.
                </li>
                <li className="flex gap-xs">
                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" />
                  Write reusable, clean, and maintainable code.
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Technical Skills ─── */}
      <section className="bg-surface border-t border-hairline">
        <div className="container-app py-section-lg">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-section-sm"
            >
              <p className="eyebrow mb-sm">Skills</p>
              <h2 className="text-heading-2 font-medium text-ink">
                Technical Proficiency
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
              <motion.div variants={fadeInUp} className="card">
                <h3 className="text-heading-4 font-medium text-ink mb-lg">
                  Front-end Development
                </h3>
                {frontendSkills.map((skill) => (
                  <Bar data={skill} key={skill.name} />
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="card">
                <h3 className="text-heading-4 font-medium text-ink mb-lg">
                  Back-end Development
                </h3>
                {backendSkills.map((skill) => (
                  <Bar data={skill} key={skill.name} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
