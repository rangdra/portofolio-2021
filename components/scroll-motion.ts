import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function initHomeMotion(root: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 821px)" }, ({ conditions }) => {
    if (!conditions?.motion) return;
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
    const column = root.querySelector<HTMLElement>(".work-column");
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

    if (conditions.desktop) {
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

      gsap.from(".sticker", {
        scale: 0, rotate: -60, duration: 1.1, ease: "elastic.out(1, 0.5)", stagger: 0.12,
        scrollTrigger: { trigger: ".bring", start: "top 55%" },
      });
      gsap.utils.toArray<HTMLElement>(".sticker").forEach((s, i) => {
        gsap.to(s, { y: i % 2 ? 14 : -14, rotate: i % 2 ? 8 : -8, duration: 2.4 + i * 0.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
      });

      gsap.from(".connectors path, .connectors circle", {
        autoAlpha: 0, duration: 0.8, stagger: 0.08,
        scrollTrigger: { trigger: ".process", start: "top 60%" },
      });
      return animateConnectors(root);
    }
  }, root);
  return () => mm.revert();
}

function animateConnectors(root: HTMLElement) {
  const section = root.querySelector<HTMLElement>(".process");
  const hub = root.querySelector<HTMLElement>(".process .doc");
  const block = root.querySelector<HTMLElement>(".process-center");
  const cards = Array.from(root.querySelectorAll<HTMLElement>(".process .float"));
  const paths = Array.from(root.querySelectorAll<SVGPathElement>(".connectors path"));
  const dots = Array.from(root.querySelectorAll<SVGCircleElement>(".connectors circle"));
  if (!section || !hub || !block || cards.length !== paths.length) return;

  const update = () => {
    const s = section.getBoundingClientRect();
    const h = hub.getBoundingClientRect();
    const b = block.getBoundingClientRect();
    const bounds = cards.map((card) => card.getBoundingClientRect());
    const hx = h.left + h.width / 2 - s.left;
    const hy = h.top + h.height / 2 - s.top;
    const below = b.bottom - s.top + 8;
    bounds.forEach((c, i) => {
      const cx = c.left + c.width / 2 - s.left;
      const cy = c.top + c.height / 2 - s.top;
      // leave the hub and enter the card on the sides that face each other
      const sideways = Math.abs(cx - hx) > Math.abs(cy - hy);
      // cards below leave from under the text block so the line never crosses the copy
      const [x1, y1] = sideways
        ? [hx + Math.sign(cx - hx) * h.width / 2, hy]
        : [hx, cy > hy ? below : hy - h.height / 2];
      const [x2, y2] = sideways
        ? [cx - Math.sign(cx - hx) * c.width / 2, cy]
        : [cx, cy - Math.sign(cy - hy) * c.height / 2];
      // bend just outside the text block's edge so the curve never runs behind the copy
      const bendX = cx < hx
        ? Math.min((x1 + x2) / 2, b.left - s.left - 24)
        : Math.max((x1 + x2) / 2, b.right - s.left + 24);
      const d = sideways
        ? `M${x1} ${y1} C${bendX} ${y1}, ${bendX} ${y2}, ${x2} ${y2}`
        : `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
      if (paths[i].getAttribute("d") === d) return;
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
}

export function initFooterMotion(footer: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.from(".cta-title .line > span", {
      yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.12,
      scrollTrigger: { trigger: footer, start: "top 60%" },
    });
    gsap.fromTo(".cta-land img", { yPercent: -18 }, {
      yPercent: 0, ease: "none",
      scrollTrigger: { trigger: footer, start: "top bottom", end: "bottom bottom", scrub: true },
    });
    gsap.fromTo(".cta .alines path", { strokeDasharray: 1, strokeDashoffset: 1 }, {
      strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut", stagger: 0.06,
      scrollTrigger: { trigger: footer, start: "top 70%" },
    });
  }, footer);
  return () => mm.revert();
}
