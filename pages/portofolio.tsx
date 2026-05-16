import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";
import { stagger, fadeInUp, routeAnimations } from "../animations";

const Portofolio = () => {
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
        <title>Work — Rangdra Pangestu</title>
        <meta
          name="description"
          content="Selected projects and portfolio work."
        />
        <meta property="og:title" content="Work — Rangdra Pangestu" />
        <meta
          name="og:description"
          content="Selected projects and portfolio work."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
      </Head>

      {/* ─── Page Header ─── */}
      <section className="bg-surface border-b border-hairline">
        <div className="container-app py-section-sm">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <p className="eyebrow mb-sm">Portfolio</p>
            <h1 className="text-heading-1 font-medium text-ink text-balance">
              Selected Work
            </h1>
            <p className="mt-md text-body-md text-slate max-w-2xl">
              A collection of projects I've built — from company products to
              personal experiments. Click any card to explore details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="container-app py-section-lg">
        <ProjectsNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
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
      </section>
    </motion.div>
  );
};

export default Portofolio;
