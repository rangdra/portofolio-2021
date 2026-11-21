import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AbstractLines from "../components/AbstractLines";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { services, projects as projectsData, frontendSkills, backendSkills } from "../data";
import { Category } from "../types";

const CV = "/assets/CV Rangdra Pangestu - Software Engineer.pdf";

// first six are the client projects, shown in the pinned "work" stage
const featured = projectsData.slice(0, 6);
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
      image: `${SITE}/me.jpg`,
      jobTitle: "Full-Stack & Mobile Software Engineer",
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
  // floating preview: which row is hovered, and whether its images may load yet
  const [hovered, setHovered] = useState<number | null>(null);
  const [armed, setArmed] = useState(false);
  const preview = useRef<HTMLDivElement>(null);
  const follow = useRef<{ x: (v: number) => void; y: (v: number) => void } | null>(null);
  const shown = expanded ? projects : projects.slice(0, LIST_LIMIT);

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
    if (!preview.current) return;
    follow.current = {
      x: gsap.quickTo(preview.current, "x", { duration: 0.5, ease: "power3" }),
      y: gsap.quickTo(preview.current, "y", { duration: 0.5, ease: "power3" }),
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* HERO intro */
      gsap.timeline({ defaults: { ease: "expo.out" } })
        .from(".hero-title .line > span", { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.1)
        .fromTo(".hero-pill",
          { clipPath: "inset(0% 100% 0% 0% round 999px)" },
          { clipPath: "inset(0% 0% 0% 0% round 999px)", duration: 2, ease: "expo.inOut" }, 0.3)
        .from(".hero-pill img", { scale: 1.6, duration: 2.4 }, 0.3)
        .from(".hero-bottom .line > span", { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.9)
        .from(".hero-copy", { autoAlpha: 0, y: 20, duration: 1 }, 1.3);

      const heroScroll = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero-pill", { rotate: -3, yPercent: -40, scale: 1.08, ease: "none", scrollTrigger: heroScroll });
      gsap.to(".hero-pill img", { xPercent: -6, ease: "none", scrollTrigger: heroScroll });
      gsap.to(".hero-title", { yPercent: -40, autoAlpha: 0.2, ease: "none", scrollTrigger: heroScroll });

      /* STATEMENT words */
      gsap.fromTo(".statement .word", { opacity: 0.12 }, {
        opacity: 1, stagger: 0.1, ease: "none",
        scrollTrigger: { trigger: ".statement", start: "top 75%", end: "bottom 55%", scrub: true },
      });
      gsap.from(".problems li", {
        autoAlpha: 0, y: 12, stagger: 0.08, duration: 0.8,
        scrollTrigger: { trigger: ".problems", start: "top 85%" },
      });

      /* STRIP */
      gsap.from(".strip-row > *", {
        yPercent: 60, autoAlpha: 0, duration: 1.2, ease: "expo.out", stagger: 0.07,
        scrollTrigger: { trigger: ".strip", start: "top 80%" },
      });
      gsap.fromTo(".strip-row", { xPercent: 8 }, {
        xPercent: -8, ease: "none",
        scrollTrigger: { trigger: ".strip", start: "top bottom", end: "bottom top", scrub: true },
      });

      /* SERVICES collage */
      gsap.from(".float", {
        scale: 0.6, autoAlpha: 0, rotate: () => gsap.utils.random(-12, 12), duration: 1.2,
        ease: "back.out(1.6)", stagger: 0.1, scrollTrigger: { trigger: ".process", start: "top 70%" },
      });
      gsap.utils.toArray<HTMLElement>(".float").forEach((el) => {
        gsap.to(el, {
          yPercent: parseFloat(el.dataset.speed || "0") * 260, ease: "none",
          scrollTrigger: { trigger: ".process", start: "top bottom", end: "bottom top", scrub: true },
        });
      });
      gsap.from(".process-center > *", {
        y: 40, autoAlpha: 0, stagger: 0.15, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: ".process-center", start: "top 75%" },
      });

      /* FOCUS: icon spins with scroll, principles rise in */
      gsap.fromTo(".burst", { rotate: -120, scale: 0.6 }, {
        rotate: 120, scale: 1, ease: "none",
        scrollTrigger: { trigger: ".finds", start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.from(".finds-head > *:not(.burst)", {
        y: 30, autoAlpha: 0, stagger: 0.1, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: ".finds", start: "top 70%" },
      });
      gsap.from(".principles li", {
        y: 80, autoAlpha: 0, rotate: (i) => [-3, 2, -2][i], stagger: 0.12, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: ".principles", start: "top 80%" },
      });

      /* WORK stage */
      const column = document.querySelector<HTMLElement>(".work-column");
      const work = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: ".work", start: "top top", end: "bottom bottom", scrub: 0.6, invalidateOnRefresh: true },
      });
      work
        .fromTo(".work-bg",
          { clipPath: "inset(6% 6% 0% 6% round 88px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.12 }, 0)
        .fromTo(column, { y: 0 }, { y: () => -(column!.offsetHeight - window.innerHeight * 0.75), duration: 1 }, 0)
        .to(".hills", { opacity: 1, duration: 0.15 }, 0.45)
        .fromTo(".hills", { scale: 1.2 }, { scale: 1, duration: 0.55 }, 0.45);
      gsap.utils.toArray<HTMLElement>(".pcard").forEach((card, i) => {
        work.fromTo(card, { rotate: i % 2 ? 5 : -5, scale: 0.9 }, { rotate: 0, scale: 1, duration: 0.15 }, 0.02 + i * 0.13);
      });

      /* SKILLS */
      gsap.from(".bring-title > span", {
        yPercent: 60, autoAlpha: 0, duration: 1.2, ease: "expo.out", stagger: 0.12,
        scrollTrigger: { trigger: ".bring", start: "top 65%" },
      });
      gsap.from(".tags li", {
        scale: 0.6, autoAlpha: 0, duration: 0.7, ease: "back.out(2)", stagger: 0.05,
        scrollTrigger: { trigger: ".tags", start: "top 85%" },
      });
      gsap.from(".sticker", {
        scale: 0, rotate: -60, duration: 1.1, ease: "elastic.out(1, 0.5)", stagger: 0.12,
        scrollTrigger: { trigger: ".bring", start: "top 55%" },
      });
      gsap.utils.toArray<HTMLElement>(".sticker").forEach((s, i) => {
        gsap.to(s, { y: i % 2 ? 14 : -14, rotate: i % 2 ? 8 : -8, duration: 2.4 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      });

      /* EXPERIENCE stage */
      const exp = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: ".manifesto", start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      exp
        .fromTo(".mani-bg",
          { clipPath: "inset(8% 6% 8% 6% round 88px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.25 }, 0)
        .to(".mani-bg img", { scale: 1, duration: 1 }, 0)
        .from(".mani-cards", { y: 140, duration: 0.25 }, 0);
      gsap.utils.toArray<HTMLElement>(".not").forEach((line, i, all) => {
        exp.to(line, { opacity: 1, duration: 0.08 }, 0.18 + i * 0.1);
        if (i < all.length - 1) exp.to(line, { opacity: 0.45, duration: 0.08 }, 0.28 + i * 0.1);
      });
      exp.from(".is-card", { y: 200, autoAlpha: 0, duration: 0.2 }, 0.65)
        .from(".is-imgs img", { scale: 0.5, stagger: 0.03, duration: 0.12 }, 0.75);

      /* DECORATIVE LINES: each set draws itself in when its section enters */
      gsap.utils.toArray<SVGSVGElement>(".alines").forEach((svg) => {
        gsap.fromTo(svg.querySelectorAll("path"), { strokeDasharray: 1, strokeDashoffset: 1 }, {
          strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut", stagger: 0.07,
          scrollTrigger: { trigger: svg.parentElement, start: "top 75%" },
        });
      });
      gsap.from(".connectors path, .connectors circle", {
        autoAlpha: 0, duration: 0.8, stagger: 0.08,
        scrollTrigger: { trigger: ".process", start: "top 60%" },
      });
    }, root);

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hills", { opacity: 1 });
      gsap.set(".work-bg, .mani-bg", { clipPath: "none" });
      gsap.set(".not", { opacity: 1 });
    }, root);

    // images change section heights after hydration
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".process");
    const hub = document.querySelector<HTMLElement>(".process .doc");
    const block = document.querySelector<HTMLElement>(".process-center");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".process .float"));
    const paths = Array.from(document.querySelectorAll<SVGPathElement>(".connectors path"));
    const dots = Array.from(document.querySelectorAll<SVGCircleElement>(".connectors circle"));
    if (!section || !hub || !block || cards.length !== paths.length) return;

    const update = () => {
      const s = section.getBoundingClientRect();
      const h = hub.getBoundingClientRect();
      const hx = h.left + h.width / 2 - s.left;
      const hy = h.top + h.height / 2 - s.top;
      cards.forEach((card, i) => {
        const c = card.getBoundingClientRect();
        const cx = c.left + c.width / 2 - s.left;
        const cy = c.top + c.height / 2 - s.top;
        // leave the hub and enter the card on the sides that face each other
        const sideways = Math.abs(cx - hx) > Math.abs(cy - hy);
        // cards below leave from under the text block so the line never crosses the copy
        const below = block.getBoundingClientRect().bottom - s.top + 8;
        const [x1, y1] = sideways
          ? [hx + Math.sign(cx - hx) * h.width / 2, hy]
          : [hx, cy > hy ? below : hy - h.height / 2];
        const [x2, y2] = sideways
          ? [cx - Math.sign(cx - hx) * c.width / 2, cy]
          : [cx, cy - Math.sign(cy - hy) * c.height / 2];
        // bend just outside the text block's edge so the curve never runs behind the copy
        const b = block.getBoundingClientRect();
        const bendX = cx < hx
          ? Math.min((x1 + x2) / 2, b.left - s.left - 24)
          : Math.max((x1 + x2) / 2, b.right - s.left + 24);
        const d = sideways
          ? `M${x1} ${y1} C${bendX} ${y1}, ${bendX} ${y2}, ${x2} ${y2}`
          : `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
        paths[i].setAttribute("d", d);
        dots[i].setAttribute("cx", String(x2));
        dots[i].setAttribute("cy", String(y2));
      });
    };

    update();
    const st = ScrollTrigger.create({
      trigger: section, start: "top bottom", end: "bottom top",
      onToggle: (self) => (self.isActive ? gsap.ticker.add(update) : gsap.ticker.remove(update)),
    });
    window.addEventListener("resize", update);
    return () => {
      st.kill();
      gsap.ticker.remove(update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const words = (text: string) =>
    text.split(" ").map((w, i) => (
      <span className="word" key={i}>{w} </span>
    ));

  return (
    <div ref={root}>
      <Head>
        <title>Rangdra Pangestu — Full-Stack & Mobile Software Engineer</title>
        <meta
          name="description"
          content="Full-Stack & Mobile Software Engineer specializing in TypeScript, React, Next.js, React Native, Node.js, NestJS, and PostgreSQL. View projects, experience, and contact info."
        />
        <meta property="og:title" content="Rangdra Pangestu — Software Engineer" />
        <meta
          property="og:description"
          content="Full-Stack & Mobile Software Engineer crafting high-performance digital products."
        />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rangdra Pangestu" />
        <meta property="og:image" content={`${SITE}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rangdra Pangestu — Full-Stack & Mobile Software Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rangdra Pangestu — Software Engineer" />
        <meta name="twitter:image" content={`${SITE}/og-image.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* ─── HERO ─── */}
      <section className="hero" id="about">
        <h1 className="hero-title">
          {/* the name sits in the h1 so search engines tie the page to it */}
          <span className="hero-name">Rangdra Pangestu · Full-Stack &amp; Mobile Software Engineer</span>
          <span className="line"><span className="sans">Building Scalable</span></span>
          <span className="line indent"><span className="serif">Digital Products</span></span>
        </h1>
        <div className="hero-pill">
          <img src="/img/hero.jpg" alt="" />
        </div>
        <div className="hero-bottom">
          <h2>
            <span className="line"><span className="sans">that Actually</span></span>
            <span className="line"><span className="serif">Matter.</span></span>
          </h2>
          <p className="hero-copy">
            Hi, I'm <strong>Rangdra Pangestu</strong> — a Full-Stack &amp; Mobile Software Engineer
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
  role: "Full-Stack",
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
    "API"]
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
            <img src="/img/ui-frontend.svg" alt="Landing page interface illustration" />
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
            <img src="/img/ui-mobile.svg" alt="Mobile app interface illustration" />
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
            <img src="/img/ui-cms.svg" alt="Admin dashboard interface illustration" />
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
            <img className="hills" src="/img/work-bg.jpg" alt="" />
          </div>
          <div className="work-column">
            <div className="title-card">
              <span className="chip dark">Selected work</span>
              <p><span className="sans">Shipped for</span><br /><span className="serif">real clients:</span></p>
            </div>
            {featured.map((p, i) => (
              <button type="button" className={`pcard ${gradients[i]}`} key={p.name} onClick={() => setShowDetail(p.id)}>
                <h3>{p.name} <em>{p.category.join(" · ").toLowerCase()}</em></h3>
                <img src={p.image_path} alt={`${p.name} project`} />
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
          onMouseEnter={() => setArmed(true)}
          onMouseLeave={() => setHovered(null)}
          onMouseMove={(e) => {
            follow.current?.x(e.clientX);
            follow.current?.y(e.clientY);
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
        <div className="project-preview" ref={preview} aria-hidden="true" data-visible={hovered !== null}>
          {armed && shown.map((p, i) => (
            <div key={p.id} className={`pp-img${hovered === i ? " is-on" : ""}`}>
              <Image src={p.image_path} alt="" layout="fill" objectFit="cover" objectPosition="top" sizes="360px" />
            </div>
          ))}
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
          <div className="mani-bg"><img src="/img/exp-bg.jpg" alt="" /></div>
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
                <img src="/projects/acai/acai.png" alt="" />
                <img src="/projects/astraland/astraland.png" alt="" />
                <img src="/projects/vines/vines-2.png" alt="" />
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
