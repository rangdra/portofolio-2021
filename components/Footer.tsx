import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AbstractLines from "./AbstractLines";

const CV = "/assets/CV Rangdra Pangestu - Software Engineer.pdf";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".cta-title .line > span", {
        yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.12,
        scrollTrigger: { trigger: ".cta", start: "top 60%" },
      });
      gsap.fromTo(".cta-land img", { yPercent: -18 }, {
        yPercent: 0, ease: "none",
        scrollTrigger: { trigger: ".cta", start: "top bottom", end: "bottom bottom", scrub: true },
      });
      gsap.fromTo(".cta .alines path", { strokeDasharray: 1, strokeDashoffset: 1 }, {
        strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut", stagger: 0.06,
        scrollTrigger: { trigger: ".cta", start: "top 70%" },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <footer className="cta" id="contact">
      <AbstractLines variant="converge" />
      <h2 className="cta-title">
        <span className="line"><span className="sans">Ready to build something</span></span>
        <span className="line"><span className="serif">impactful together?</span></span>
      </h2>
      <div className="cta-actions">
        <a className="btn-light" href="mailto:rangdra2@gmail.com">rangdra2@gmail.com</a>
        <a className="btn-light ghost" href={CV} download>Download CV</a>
      </div>
      <div className="cta-land"><img src="/img/cta-bg.jpg" alt="" /></div>
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
