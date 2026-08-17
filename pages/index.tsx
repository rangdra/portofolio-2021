import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  stagger,
  routeAnimations,
} from "../animations";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import Bar from "../components/Bar";
import { services, projects as projectsData, frontendSkills, backendSkills } from "../data";
import { Category } from "../types";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail, HiDownload, HiBriefcase, HiAcademicCap, HiSparkles, HiCode, HiLightningBolt } from "react-icons/hi";

const Home = () => {
  const router = useRouter();
  const siteUrl = "https://rangdrap.vercel.app";
  const currentUrl = `${siteUrl}${router.asPath}`;

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("projects");
  const [showDetail, setShowDetail] = useState<string | number | null>(null);

  const handleFilterCategory = (category: Category | "projects") => {
    if (category === "projects") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const filtered = projectsData.filter((project) =>
      project.category.includes(category),
    );
    setProjects(filtered);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Rangdra Pangestu — Full-Stack & Mobile Software Engineer</title>
        <meta
          name="description"
          content="Full-Stack & Mobile Software Engineer specializing in TypeScript, React, Next.js, React Native, Node.js, NestJS, and PostgreSQL. View projects, experience, and contact info."
        />
        <meta
          property="og:title"
          content="Rangdra Pangestu — Software Engineer"
        />
        <meta
          name="og:description"
          content="Full-Stack & Mobile Software Engineer crafting high-performance digital products."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      {/* ─── Hero Section ─── */}
      <section id="about" className="hero-band-gradient grid-noise relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-brand-green-mid/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-app py-hero">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xxl items-center">
            {/* Main intro */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal text-brand-green text-body-sm font-medium mb-lg border border-brand-green/20">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                Available for New Projects & Roles
              </div>

              <h1 className="text-heading-1 md:text-display-lg lg:text-hero-display font-semibold text-on-dark text-balance leading-tight">
                Building scalable{" "}
                <span className="text-brand-green relative inline-block">
                  digital products
                </span>{" "}
                that matter.
              </h1>

              <p className="mt-lg text-subtitle text-on-dark-muted max-w-xl leading-relaxed">
                Hi, I'm <strong className="text-on-dark font-semibold">Rangdra Pangestu</strong> — a Full-Stack & Mobile Software Engineer with proven experience delivering production web, mobile, and backend systems in modern TypeScript ecosystems.
              </p>

              {/* Action buttons */}
              <div className="mt-xxl flex flex-wrap items-center gap-sm">
                <a href="#work" className="btn-on-dark shadow-glow-green">
                  <HiSparkles aria-hidden="true" />
                  Explore Projects
                </a>
                <a
                  href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
                  download
                  className="btn-secondary-on-dark"
                >
                  <HiDownload aria-hidden="true" />
                  Download CV
                </a>
              </div>

              {/* Social links & status */}
              <div className="mt-xl flex items-center gap-md text-on-dark-muted pt-md border-t border-hairline-dark">
                <span className="text-micro-uppercase text-stone font-semibold">Connect</span>
                <a
                  href="https://github.com/rangdra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="hover:text-on-dark transition p-1 hover:bg-white/5 rounded"
                >
                  <AiFillGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rangdra-pangestu-7b991219a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="hover:text-on-dark transition p-1 hover:bg-white/5 rounded"
                >
                  <AiFillLinkedin className="w-5 h-5" />
                </a>
                <span className="text-steel text-body-sm">·</span>
                <span className="text-caption text-on-dark-muted">Bekasi, Indonesia 🇮🇩</span>
              </div>
            </motion.div>

            {/* Visual card / interactive code terminal */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-green to-brand-teal-mid opacity-30 blur-lg" />
                <div className="relative bg-canvas-dark rounded-xl p-lg shadow-elev-4 border border-hairline-dark font-mono text-code-md text-on-dark">
                  <div className="flex items-center justify-between pb-md mb-md border-b border-hairline-dark">
                    <div className="flex items-center gap-xs">
                      <span className="w-3 h-3 rounded-full bg-accent-orange" />
                      <span className="w-3 h-3 rounded-full bg-brand-green" />
                      <span className="w-3 h-3 rounded-full bg-accent-blue" />
                    </div>
                    <span className="text-caption text-steel font-sans">developer.ts</span>
                  </div>
                  <pre className="text-on-dark-muted leading-relaxed text-body-sm overflow-x-auto">
                    <code>{`const engineer: Profile = {
  name: "Rangdra Pangestu",
  role: "Full-Stack & Mobile Dev",
  experience: "Associate Developer",
  core: [
    "TypeScript", "React", "Next.js",
    "React Native", "NestJS", "PostgreSQL"
  ],
  passion: "High performance & clean UX",
  status: "Ready for impact 🚀"
};`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Highlights Counter ─── */}
      <section className="bg-surface border-y border-hairline py-lg">
        <div className="container-app">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
            <div className="p-sm">
              <div className="text-heading-2 font-bold text-ink">15+</div>
              <div className="text-body-sm text-steel mt-xxs">Completed Projects</div>
            </div>
            <div className="p-sm">
              <div className="text-heading-2 font-bold text-ink">Full-Stack</div>
              <div className="text-body-sm text-steel mt-xxs">Web & Mobile Apps</div>
            </div>
            <div className="p-sm">
              <div className="text-heading-2 font-bold text-ink">Production</div>
              <div className="text-body-sm text-steel mt-xxs">Enterprise Experience</div>
            </div>
            <div className="p-sm">
              <div className="text-heading-2 font-bold text-ink">3.58 / 4.0</div>
              <div className="text-body-sm text-steel mt-xxs">Information System GPA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section id="services" className="container-app py-section-lg">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="text-center mb-section-sm">
            <p className="eyebrow mb-sm">What I Do</p>
            <h2 className="text-heading-2 font-semibold text-ink text-balance">
              End-to-end development expertise
            </h2>
            <p className="mt-md text-body-md text-slate max-w-2xl mx-auto">
              From responsive client-side experiences to robust microservices and cross-platform native apps.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg"
          >
            {services.map((service, idx) => (
              <motion.div variants={fadeInUp} key={idx}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Experience & Education Section ─── */}
      <section id="experience" className="bg-surface border-y border-hairline py-section-lg">
        <div className="container-app">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="text-center mb-section-sm">
            <p className="eyebrow mb-sm">Journey</p>
            <h2 className="text-heading-2 font-semibold text-ink text-balance">
              Experience & Academic Background
            </h2>
            <p className="mt-md text-body-md text-slate max-w-2xl mx-auto">
              Track record of building enterprise products in agile teams.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-12 gap-xxl items-start"
          >
            {/* Experience */}
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <div className="flex items-center gap-sm mb-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-feature text-brand-green-dark">
                  <HiBriefcase className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-heading-3 font-semibold text-ink">Professional Experience</h3>
              </div>

              <div className="card shadow-elev-1 hover:shadow-elev-2 transition">
                <div className="flex flex-wrap items-center justify-between gap-sm mb-xs">
                  <h4 className="text-heading-4 font-semibold text-ink">
                    Associate Developer
                  </h4>
                  <span className="badge-green-soft">Dec 2022 – Present</span>
                </div>
                <p className="text-body-md font-medium text-brand-green-dark">
                  PT. Vanz Inovatif Teknologi
                </p>

                <ul className="mt-lg space-y-sm text-body-sm text-slate list-none border-t border-hairline pt-md">
                  <li className="flex gap-xs">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    <span>Build, maintain, and develop multiplatform applications (Mobile, CMS, Web) using <strong>React Native</strong>, <strong>React</strong>, and <strong>Next.js</strong> with RESTful API integration.</span>
                  </li>
                  <li className="flex gap-xs">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    <span>Architect and deliver robust RESTful backend APIs using <strong>NestJS</strong> and <strong>PostgreSQL</strong>.</span>
                  </li>
                  <li className="flex gap-xs">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    <span>Collaborate closely with UI/UX designers and QA teams to ship production-ready, defect-free user flows.</span>
                  </li>
                  <li className="flex gap-xs">
                    <span className="mt-[6px] w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    <span>Write maintainable, modular, and reusable code following industry clean-architecture patterns.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Education & Achievements */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-lg">
              <div className="flex items-center gap-sm mb-lg">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-feature text-brand-green-dark">
                  <HiAcademicCap className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-heading-3 font-semibold text-ink">Education</h3>
              </div>

              <div className="card shadow-elev-1 hover:shadow-elev-2 transition">
                <div className="flex flex-wrap items-center justify-between gap-sm mb-xs">
                  <h4 className="text-heading-5 font-semibold text-ink">
                    Bachelor of Computer (S.Kom)
                  </h4>
                  <span className="badge-green-soft">2019 – 2023</span>
                </div>
                <p className="text-body-sm font-medium text-brand-green-dark">
                  STMIK Pranata Indonesia
                </p>
                <p className="mt-md text-body-sm text-slate">
                  Major in <strong>Information System</strong>. Cumulative GPA: <strong>3.58 / 4.00</strong>.
                </p>
              </div>

              <div className="card bg-brand-teal-deep text-on-dark border-none shadow-elev-2">
                <div className="flex items-center gap-xs text-brand-green mb-sm">
                  <HiLightningBolt className="w-5 h-5" />
                  <span className="text-caption font-semibold uppercase tracking-wider">Fast Learner</span>
                </div>
                <h4 className="text-heading-5 font-medium text-on-dark mb-xs">
                  Continuous Up-skilling
                </h4>
                <p className="text-body-sm text-on-dark-muted">
                  Completed Jabar Coding Camp (React.js Class) and multiple enterprise development workshops. Always pushing boundary with modern stacks.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="work" className="container-app py-section-lg">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="text-center mb-section-sm">
            <p className="eyebrow mb-sm">Portfolio</p>
            <h2 className="text-heading-2 font-semibold text-ink text-balance">
              Featured Projects & Selected Work
            </h2>
            <p className="mt-md text-body-md text-slate max-w-2xl mx-auto">
              Real-world products across web applications, content management systems, mobile apps, and APIs.
            </p>
          </motion.div>

          <div className="flex justify-center mb-xl">
            <ProjectsNavbar
              handleFilterCategory={handleFilterCategory}
              active={active}
            />
          </div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            ))}
          </motion.div>

          {projects.length === 0 && (
            <div className="text-center py-section">
              <p className="text-body-md text-steel">
                No projects found for this category.
              </p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ─── Technical Skills Section ─── */}
      <section id="skills" className="bg-surface border-t border-hairline py-section-lg">
        <div className="container-app">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-section-sm"
            >
              <p className="eyebrow mb-sm">Stack</p>
              <h2 className="text-heading-2 font-semibold text-ink">
                Technical Proficiency
              </h2>
              <p className="mt-md text-body-md text-slate max-w-2xl mx-auto">
                Tools, frameworks, and technologies I work with every day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
              <motion.div variants={fadeInUp} className="card shadow-elev-1">
                <div className="flex items-center gap-xs mb-lg pb-sm border-b border-hairline">
                  <HiCode className="w-5 h-5 text-brand-green-dark" />
                  <h3 className="text-heading-4 font-semibold text-ink">
                    Front-end & Mobile
                  </h3>
                </div>
                {frontendSkills.map((skill) => (
                  <Bar data={skill} key={skill.name} />
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="card shadow-elev-1">
                <div className="flex items-center gap-xs mb-lg pb-sm border-b border-hairline">
                  <HiLightningBolt className="w-5 h-5 text-brand-green-dark" />
                  <h3 className="text-heading-4 font-semibold text-ink">
                    Back-end, Database & Tools
                  </h3>
                </div>
                {backendSkills.map((skill) => (
                  <Bar data={skill} key={skill.name} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="container-app py-section-lg">
        <div className="hero-band-gradient grid-noise rounded-2xl p-xxl lg:p-section text-center relative overflow-hidden border border-brand-green/20 shadow-elev-4">
          <div className="relative z-10">
            <span className="badge-green-soft mb-md inline-block">Get in Touch</span>
            <h2 className="text-heading-2 lg:text-heading-1 font-semibold text-on-dark text-balance">
              Ready to build something impactful?
            </h2>
            <p className="mt-md text-body-md text-on-dark-muted max-w-lg mx-auto leading-relaxed">
              Whether you need a performant web app, cross-platform mobile experience, or full-stack architectural design, let's talk.
            </p>
            <div className="mt-xxl flex flex-wrap justify-center items-center gap-sm">
              <a href="mailto:rangdra2@gmail.com" className="btn-on-dark shadow-glow-green">
                <HiOutlineMail aria-hidden="true" />
                rangdra2@gmail.com
              </a>
              <a
                href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
                download
                className="btn-secondary-on-dark"
              >
                <HiDownload aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
