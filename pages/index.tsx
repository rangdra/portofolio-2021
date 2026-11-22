import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AbstractLines from "../components/AbstractLines";
import ProjectCard, { categoryLabel, projectCover } from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { services, projects as projectsData, frontendSkills, backendSkills } from "../data";
import { Category } from "../types";

const CV = "/assets/CV Rangdra Pangestu - Software Engineer.pdf";

// first six are the client projects, shown in the pinned "work" stage
const featured = projectsData.slice(0, 5);
const gradients = ["c-violet", "c-rose", "c-amber", "c-lime", "c-sky", "c-peach"];
// structured data so search engines know this site is Rangdra Pangestu's
const SITE = "https://rangdra.my.id";
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Rangdra Pangestu",
      alternateName: "Rangdra",
      url: `${SITE}/`,
      image: `${SITE}/me.webp`,
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "PT. Vanz Inovatif Teknologi" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "STMIK Pranata Indonesia" },
      address: { "@type": "PostalAddress", addressLocality: "Bekasi", addressCountry: "ID" },
      email: "mailto:rangdra2@gmail.com",
      sameAs: [
        "https://github.com/rangdra",
        "https://www.linkedin.com/in/rangdra-pangestu-7b991219a/",
        "https://www.instagram.com/rngdr_",
      ],
      knowsAbout: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "NestJS", "PostgreSQL", "MongoDB"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: "Rangdra Pangestu",
      publisher: { "@id": `${SITE}/#person` },
    },
  ],
};

// rows shown before "Show all"
const LIST_LIMIT = 8;
// TypeScript sits in both skill lists
const stack = Array.from(new Set([...frontendSkills, ...backendSkills].map((s) => s.name)));

const Home = () => {
  const router = useRouter();
  const siteUrl = SITE;
  const currentUrl = `${siteUrl}${router.asPath}`;
  const root = useRef<HTMLDivElement>(null);

  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("projects");
  const [showDetail, setShowDetail] = useState<string | number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const shown = expanded ? projects : projects.slice(0, LIST_LIMIT);
  const hoveredProject = hovered === null ? undefined : shown[hovered];

  const handleFilterCategory = (category: Category | "projects") => {
    setExpanded(false);
    setHovered(null);
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

  useEffect(() => {
    const section = root.current;
    if (!section) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;
    const loadMotion = () => {
      void import("../components/scroll-motion").then(({ initHomeMotion }) => {
        if (!cancelled) cleanup = initHomeMotion(section);
      });
    };

    if (window.scrollY > 0 || window.location.hash) loadMotion();
    else window.addEventListener("scroll", loadMotion, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", loadMotion);
      cleanup?.();
    };
  }, []);

  const words = (text: string) =>
    text.split(" ").map((w, i) => (
      <span className="word" key={i}>{w} </span>
    ));

  return (
    <div ref={root}>
      <Head>
        <title>Rangdra Pangestu — Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer specializing in TypeScript, React, Next.js, React Native, Node.js, NestJS, and PostgreSQL. View projects, experience, and contact info."
        />
        <meta property="og:title" content="Rangdra Pangestu — Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer crafting high-performance digital products."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rangdra Pangestu" />
        <meta property="og:image" content={`${SITE}/og-image.webp`} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rangdra Pangestu — Software Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rangdra Pangestu — Software Engineer" />
        <meta name="twitter:image" content={`${SITE}/og-image.webp`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* ─── HERO ─── */}
      <section className="hero" id="about">
        <h1 className="hero-title">
          {/* the name sits in the h1 so search engines tie the page to it */}
          <span className="hero-name">Rangdra Pangestu · Software Engineer</span>
          <span className="line"><span className="sans">Building Scalable</span></span>
          <span className="line indent"><span className="serif">Digital Products</span></span>
        </h1>
        <div className="hero-pill">
          <img
            src="/img/hero.webp"
            srcSet="/img/hero-960.webp 960w, /img/hero-1600.webp 1600w, /img/hero.webp 2400w"
            sizes="(max-width: 820px) 120vw, 84vw"
            width={2400}
            height={1000}
            alt=""
            {...{ fetchpriority: "high" }}
          />
        </div>
        <div className="hero-bottom">
          <h2>
            <span className="line"><span className="sans">that Actually</span></span>
            <span className="line"><span className="serif">Matter.</span></span>
          </h2>
          <p className="hero-copy">
            Hi, I'm <strong>Rangdra Pangestu</strong> — a Software Engineer
            in Bekasi, Indonesia. <a href={CV} download>Download CV ↓</a>
          </p>
        </div>
      </section>

      {/* ─── STATEMENT ─── */}
      <section className="statement">
        <AbstractLines variant="waves" />
        <p className="split">
          <span className="sans">{words("Great products don't need more code.")}</span>
          <span className="serif muted">{words("They need clean architecture")}</span>
          <span className="serif muted">{words("and thoughtful UX.")}</span>
        </p>
        <ul className="problems">
          {services.map((s) => <li key={s.title}>{s.title}</li>)}
        </ul>
      </section>

      {/* ─── STRIP: everyday developer artifacts ─── */}
      <section className="strip" aria-hidden="true">
        <div className="strip-row">
          <div className="art dark">
            <span className="art-bar">zsh</span>
            <pre>{`$ yarn build
✓ Compiled successfully
✓ Static pages (5/5)
$ _`}</pre>
          </div>
          <div className="art">
            <span className="art-bar">developer.ts</span>
            <pre>{`const engineer = {
  name: "Rangdra",
  role: "Software Engineer",
  stack: ["React",
    "NestJS", "RN"],
};`}</pre>
          </div>
          <div className="art dark">
            <span className="art-bar"><b className="get-verb">GET</b> /api/projects</span>
            <pre>{`200 OK
[{
  "name": "RE/MAX",
  "category": [
    "WEB", "CMS",
    "MOBILE", "API"]
}]`}</pre>
          </div>
          <div className="art phone">
            <i className="ph-notch" />
            <i className="ph-hero" />
            <i className="ph-line" /><i className="ph-line short" />
            <div className="ph-grid"><i /><i /><i /><i /></div>
            <i className="ph-btn" />
          </div>
          <div className="art dark">
            <span className="art-bar">git log --oneline</span>
            <pre>{`● feat: booking flow
● fix: empty state
● refactor: api client
● chore: bump deps`}</pre>
          </div>
          <div className="art">
            <span className="art-bar">query.sql</span>
            <pre>{`SELECT name
FROM projects
WHERE 'APP'
  = ANY(category);`}</pre>
          </div>
          <div className="art dark ci">
            <span className="art-bar">pipeline</span>
            <pre>{`✓ lint
✓ test
✓ build
✓ deploy`}</pre>
          </div>
        </div>
      </section>

      {/* ─── SERVICES (collage of what each service looks like) ─── */}
      <section className="process" id="services">
        <figure className="float f1" data-speed="-0.25">
          <div className="browser">
            <span className="browser-bar"><i /><i /><i /><em>yourproduct.app</em></span>
            <img src="/img/ui-frontend.webp" alt="Landing page interface illustration" width={640} height={400} loading="lazy" decoding="async" />
          </div>
          <figcaption>Frontend</figcaption>
        </figure>
        <figure className="float f2" data-speed="0.2">
          <div className="art dark">
            <span className="art-bar">properties.controller.ts</span>
            <pre>{`@Controller('properties')
export class PropertiesController {
  @Get()
  findAll() {
    return this.service.findAll();
  }
}`}</pre>
          </div>
          <figcaption>Backend</figcaption>
        </figure>
        <figure className="float f3" data-speed="-0.1">
          <div className="device">
            <img src="/img/ui-mobile.webp" alt="Mobile app interface illustration" width={360} height={720} loading="lazy" decoding="async" />
          </div>
          <figcaption>Mobile</figcaption>
        </figure>
        <figure className="float f4" data-speed="0.3">
          <div className="art">
            <span className="art-bar"><b className="get-verb">POST</b> /v1/consultations</span>
            <pre>{`201 Created
{
  "id": 1042,
  "status": "booked"
}`}</pre>
          </div>
          <figcaption>API</figcaption>
        </figure>
        <figure className="float f5" data-speed="-0.3">
          <div className="browser">
            <span className="browser-bar"><i /><i /><i /><em>admin / dashboard</em></span>
            <img src="/img/ui-cms.webp" alt="Admin dashboard interface illustration" width={640} height={400} loading="lazy" decoding="async" />
          </div>
          <figcaption>CMS</figcaption>
        </figure>
        <svg className="connectors" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => <path key={i} />)}
          {[0, 1, 2, 3, 4].map((i) => <circle key={i} r="4" />)}
        </svg>
        <div className="process-center">
          <div className="doc" aria-hidden="true"><i /><i /><i /><i /><i /><i /><span className="tag">Spec</span></div>
          <p className="process-text">
            <span className="sans">I build end-to-end, from pixel-perfect interfaces</span>{" "}
            <span className="serif">— to robust APIs and mobile apps.</span>
          </p>
          <div className="get">
            <strong>You get:</strong>
            <span>React &amp; Next.js web apps</span>
            <span>React Native mobile apps</span>
            <span>NestJS &amp; Express APIs</span>
            <span>PostgreSQL &amp; MongoDB data</span>
          </div>
        </div>
      </section>

      {/* ─── FOCUS: three working principles ─── */}
      <section className="finds">
        <AbstractLines variant="contour" />
        <div className="finds-head">
          <svg className="burst" viewBox="0 0 100 100" aria-hidden="true">
            <rect width="100" height="100" rx="24" fill="#111" />
            <g fill="#fff" transform="translate(50 54)">
              {[-90, -60, -30, 0, 30, 60, 90].map((r) => (
                <path key={r} d="M-3 0 L-1 -34 L1 -34 L3 0Z" transform={`rotate(${r})`} />
              ))}
              <circle r="9" fill="#111" />
            </g>
          </svg>
          <span className="chip">Focus</span>
          <h2 className="finds-title"><span className="sans">What I</span> <span className="serif">care about</span></h2>
        </div>
        <ol className="principles">
          <li>
            <span className="num">01</span>
            <h3><span className="sans">Performance</span></h3>
            <p>Fast loads and smooth interactions, on the web and on mobile.</p>
            <code>next build · lazy images · lean bundles</code>
          </li>
          <li>
            <span className="num">02</span>
            <h3><span className="serif">Clean UX</span></h3>
            <p>Working closely with UI/UX designers and QA to ship flows that feel right.</p>
            <code>design → build → QA → ship</code>
          </li>
          <li>
            <span className="num">03</span>
            <h3><span className="sans">Maintainable code</span></h3>
            <p>Modular, reusable code following clean architecture, so the next feature is easy.</p>
            <code>modules · services · typed APIs</code>
          </li>
        </ol>
      </section>

      {/* ─── WORK (pinned stage) ─── */}
      <section className="work" id="work">
        <div className="work-stage">
          <div className="work-bg">
            <div className="sky" />
            <img className="hills" src="/img/work-bg.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="work-column">
            <div className="title-card">
              <span className="chip dark">Selected work</span>
              <p><span className="sans">Shipped for</span><br /><span className="serif">real clients:</span></p>
            </div>
            {featured.map((p, i) => (
              <button type="button" className={`pcard ${gradients[i]}`} key={p.name} onClick={() => setShowDetail(p.id)}>
                <h3>{p.name} <em>{p.category.map(categoryLabel).join(" · ").toLowerCase()}</em></h3>
                <img src={projectCover(p.image_path, 768)} alt={`${p.name} project`} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL PROJECTS ─── */}
      <section className="projects" id="projects">
        <div className="projects-head">
          <h2 className="section-title"><span className="sans">More</span> <span className="serif">Projects</span></h2>
          <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />
        </div>
        <div className="project-list-head" aria-hidden="true">
          <span>#</span><span>Project</span><span>Type</span><span>Stack</span>
        </div>
        <ul
          className="project-list"
          key={active}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={(e) => {
            if (preview.current) preview.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
          }}
        >
          {shown.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onHover={setHovered}
              showDetail={showDetail} setShowDetail={setShowDetail} />
          ))}
        </ul>
        {projects.length > LIST_LIMIT && (
          <button type="button" className="show-more" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
            {expanded ? "Show less" : `Show all ${projects.length} projects`}
            <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
          </button>
        )}
        {projects.length === 0 && <p className="empty">No projects found for this category.</p>}
        <div className="project-preview" ref={preview} aria-hidden="true" data-visible={Boolean(hoveredProject)}>
          {hoveredProject && (
            <img src={projectCover(hoveredProject.image_path, 768)} alt="" loading="lazy" decoding="async" />
          )}
        </div>
        {/* the stage cards above open the same modal, even when the list is filtered or collapsed */}
        {featured
          .filter((p) => !shown.includes(p))
          .map((project) => (
            <ProjectCard key={project.id} project={project} showDetail={showDetail} setShowDetail={setShowDetail} modalOnly />
          ))}
      </section>

      {/* ─── SKILLS ─── */}
      <section className="bring" id="skills">
        <div className="blob" aria-hidden="true" />
        <h2 className="bring-title"><span className="sans">My</span> <span className="serif">Stack</span></h2>
        <ul className="tags">
          {stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <svg className="sticker smiley" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="#F4E04D" stroke="#111" strokeWidth="3" /><ellipse cx="24" cy="25" rx="3" ry="5" fill="#111" /><ellipse cx="40" cy="25" rx="3" ry="5" fill="#111" /><path d="M19 37 Q32 52 45 37" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" /></svg>
        <svg className="sticker eyes" viewBox="0 0 80 60" aria-hidden="true"><ellipse cx="24" cy="28" rx="16" ry="20" fill="#fff" stroke="#111" strokeWidth="3" /><ellipse cx="56" cy="28" rx="16" ry="20" fill="#fff" stroke="#111" strokeWidth="3" /><circle cx="28" cy="32" r="7" fill="#111" /><circle cx="60" cy="32" r="7" fill="#111" /><path d="M30 54 Q40 60 50 54" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" /></svg>
        <svg className="sticker star" viewBox="0 0 70 70" aria-hidden="true"><path d="M35 4 L43 26 L66 27 L48 41 L54 64 L35 51 L16 64 L22 41 L4 27 L27 26Z" fill="#B9F27C" stroke="#111" strokeWidth="3" strokeLinejoin="round" /></svg>
        <span className="sticker cool" aria-hidden="true">CODE</span>
      </section>

      {/* ─── EXPERIENCE (pinned stage) ─── */}
      <section className="manifesto" id="experience">
        <div className="mani-stage">
          <div className="mani-bg">
            <img className="exp-light" src="/img/exp-bg.webp" alt="" loading="lazy" decoding="async" />
            {/* dark theme reuses the work section's aurora */}
            <img className="exp-dark" src="/img/work-bg.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="mani-cards">
            <div className="not-card exp-card">
              <span className="chip dark">Experience · Dec 2022 – Present</span>
              <p className="exp-role"><span className="sans">Associate Developer</span><br /><span className="serif">PT. Vanz Inovatif Teknologi</span></p>
              <p className="not">Multiplatform apps (mobile, CMS, web) with React Native, React &amp; Next.js.</p>
              <p className="not">RESTful backend APIs with NestJS &amp; PostgreSQL.</p>
              <p className="not">Shipping defect-free flows with UI/UX designers &amp; QA.</p>
              <p className="not">Modular, reusable code following clean architecture.</p>
            </div>
            <div className="is-card">
              <p><span className="sans">Bachelor of Computer</span><br /><span className="serif">Information System</span></p>
              <div className="is-imgs">
                {projectsData.slice(0, 3).map((p) => <img key={p.id} src={projectCover(p.image_path, 192)} alt="" loading="lazy" decoding="async" />)}
              </div>
              <small>STMIK Pranata Indonesia · 2019 – 2023 · GPA 3.58 / 4.00</small>
              <small>Jabar Coding Camp (React.js) · 15+ completed projects</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
