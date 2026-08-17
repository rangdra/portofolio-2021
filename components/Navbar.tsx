import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Logo = () => (
  <a
    href="#about"
    className="flex items-center gap-2 group focus:outline-none"
    aria-label="Rangdra Pangestu — Home"
  >
    <span
      aria-hidden="true"
      className="flex items-center justify-center h-8 w-8 rounded-lg bg-brand-teal-deep text-brand-green font-bold text-body-md transition group-hover:bg-brand-teal"
    >
      RP
    </span>
    <span className="font-semibold text-ink text-body-md tracking-tight">
      Rangdra<span className="text-brand-green-dark">.</span>
    </span>
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "experience", "work", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75 border-b border-hairline">
      <nav
        className="container-app flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-lg" role="list">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative inline-flex items-center text-body-sm font-medium transition duration-180 py-2 ${
                    isActive
                      ? "text-brand-green-dark font-semibold"
                      : "text-slate hover:text-ink"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-brand-green-dark"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-sm">
          <a
            href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
            download
            className="btn-ghost"
          >
            Download CV
          </a>
          <a href="#contact" className="btn-primary">
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden btn-ghost p-2"
        >
          {open ? (
            <HiX className="h-6 w-6" aria-hidden="true" />
          ) : (
            <HiMenu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-hairline bg-canvas"
        >
          <ul className="container-app flex flex-col py-md" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-sm py-sm rounded-md text-body-md font-medium ${
                      isActive
                        ? "text-brand-green-dark bg-surface-feature font-semibold"
                        : "text-ink hover:bg-surface-soft"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="flex flex-col gap-sm px-sm pt-md">
              <a
                href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
                download
                className="btn-secondary w-full"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
