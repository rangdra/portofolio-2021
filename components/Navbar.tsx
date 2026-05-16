import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiMenu, HiX } from "react-icons/hi";

type NavItem = { name: string; route: string };

const navItems: NavItem[] = [
  { name: "About", route: "/" },
  { name: "Resume", route: "/resume" },
  { name: "Work", route: "/portofolio" },
];

const Logo = () => (
  <Link href="/">
    <a
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
  </Link>
);

const Navbar = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/75 border-b border-hairline">
      <nav
        className="container-app flex items-center justify-between h-16"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-xl" role="list">
          {navItems.map((item) => (
            <li key={item.route}>
              <Link href={item.route}>
                <a
                  className={`relative inline-flex items-center text-body-sm font-medium transition duration-180 py-2 ${
                    isActive(item.route)
                      ? "text-brand-green-dark"
                      : "text-slate hover:text-ink"
                  }`}
                  aria-current={isActive(item.route) ? "page" : undefined}
                >
                  {item.name}
                  {isActive(item.route) && (
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-brand-green-dark"
                    />
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-sm">
          <a
            href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
            download
            className="btn-ghost"
          >
            Download CV
          </a>
          <a href="mailto:rangdra2@gmail.com" className="btn-primary">
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
            {navItems.map((item) => (
              <li key={item.route}>
                <Link href={item.route}>
                  <a
                    className={`block px-sm py-sm rounded-md text-body-md font-medium ${
                      isActive(item.route)
                        ? "text-brand-green-dark bg-surface-feature"
                        : "text-ink hover:bg-surface-soft"
                    }`}
                    aria-current={isActive(item.route) ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-sm px-sm pt-md">
              <a
                href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
                download
                className="btn-secondary w-full"
              >
                Download CV
              </a>
              <a
                href="mailto:rangdra2@gmail.com"
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
