import { useEffect, useRef } from "react";
import AbstractLines from "./AbstractLines";

const CV = "/assets/CV Rangdra Pangestu - Software Engineer.pdf";

const Footer = () => {
  const footer = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = footer.current;
    if (!section) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      void import("./scroll-motion").then(({ initFooterMotion }) => {
        if (!cancelled) cleanup = initFooterMotion(section);
      });
    }, { rootMargin: "400px 0px" });
    observer.observe(section);

    return () => {
      cancelled = true;
      observer.disconnect();
      cleanup?.();
    };
  }, []);

  return (
    <footer className="cta" id="contact" ref={footer}>
      <AbstractLines variant="converge" />
      <h2 className="cta-title">
        <span className="line"><span className="sans">Ready to build something</span></span>
        <span className="line"><span className="serif">impactful together?</span></span>
      </h2>
      <div className="cta-actions">
        <a className="btn-light" href="mailto:rangdra2@gmail.com">rangdra2@gmail.com</a>
        <a className="btn-light ghost" href={CV} download>Download CV</a>
      </div>
      <div className="cta-land"><img src="/img/cta-bg.webp" alt="" loading="lazy" decoding="async" /></div>
      <div className="footer">
        <span>© {new Date().getFullYear()} Rangdra Pangestu · Bekasi, Indonesia</span>
        <span>
          <a href="https://github.com/rangdra" target="_blank" rel="noopener noreferrer">GitHub</a> ·{" "}
          <a href="https://www.linkedin.com/in/rangdra-pangestu-7b991219a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·{" "}
          <a href="https://www.instagram.com/rngdr_" target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
