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
import { services } from "../data";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail, HiDownload } from "react-icons/hi";

const Home = () => {
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
        <title>Rangdra Pangestu — Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer focusing on web and mobile application development. Expertise in TypeScript, React, Next.js, React Native, Node.js, NestJS, and SQL."
        />
        <meta
          property="og:title"
          content="Rangdra Pangestu — Software Engineer"
        />
        <meta
          name="og:description"
          content="Software Engineer focusing on web and mobile application development."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      {/* ─── Hero Band ─── */}
      <section className="hero-band-gradient grid-noise relative overflow-hidden">
        <div className="container-app py-hero">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
            {/* Text */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
            >
              <p className="eyebrow-on-dark mb-md">Software Engineer</p>
              <h1 className="text-heading-1 md:text-display-lg lg:text-hero-display font-medium text-on-dark text-balance">
                Building digital{" "}
                <span className="text-brand-green">products</span> that matter.
              </h1>
              <p className="mt-lg text-subtitle text-on-dark-muted max-w-lg">
                I'm Rangdra Pangestu — a full-stack engineer focused on crafting
                performant web and mobile applications with modern TypeScript
                stacks.
              </p>
              <div className="mt-xxl flex flex-wrap items-center gap-sm">
                <a href="mailto:rangdra2@gmail.com" className="btn-on-dark">
                  <HiOutlineMail aria-hidden="true" />
                  Get in touch
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
              {/* Social */}
              <div className="mt-xl flex items-center gap-md text-on-dark-muted">
                <a
                  href="https://github.com/rangdra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-on-dark transition"
                >
                  <AiFillGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rangdra-pangestu-7b991219a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-on-dark transition"
                >
                  <AiFillLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Code mockup card */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              className="hidden lg:block"
            >
              <div className="bg-canvas-dark rounded-lg p-lg shadow-elev-3 font-mono text-code-md text-on-dark overflow-hidden">
                <div className="flex items-center gap-xs mb-md">
                  <span className="w-3 h-3 rounded-full bg-accent-orange" />
                  <span className="w-3 h-3 rounded-full bg-brand-green" />
                  <span className="w-3 h-3 rounded-full bg-accent-blue" />
                </div>
                <pre className="text-on-dark-muted leading-relaxed">
                  {`const rangdra = {
  role: "Software Engineer",
  stack: ["TypeScript", "React", "Next.js",
          "React Native", "Node.js", "NestJS"],
  passion: "Building scalable apps",
  location: "Bekasi, Indonesia 🇮🇩",
};`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="container-app py-section-lg">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.div variants={fadeInUp} className="text-center mb-section-sm">
            <p className="eyebrow mb-sm">What I Do</p>
            <h2 className="text-heading-2 font-medium text-ink text-balance">
              End-to-end development expertise
            </h2>
            <p className="mt-md text-body-md text-slate max-w-2xl mx-auto">
              From pixel-perfect frontends to robust APIs, I deliver complete
              solutions across the stack.
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

      {/* ─── CTA Banner ─── */}
      <section className="container-app pb-section-lg">
        <div className="bg-brand-teal-deep rounded-lg p-section text-center">
          <h2 className="text-heading-2 font-medium text-on-dark text-balance">
            Ready to start your next project?
          </h2>
          <p className="mt-md text-body-md text-on-dark-muted max-w-lg mx-auto">
            I'm available for freelance and full-time opportunities. Let's
            discuss how I can help bring your ideas to life.
          </p>
          <div className="mt-xxl flex flex-wrap justify-center gap-sm">
            <a href="mailto:rangdra2@gmail.com" className="btn-on-dark">
              <HiOutlineMail aria-hidden="true" />
              Email me
            </a>
            <a href="/portofolio" className="btn-secondary-on-dark">
              View my work
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
