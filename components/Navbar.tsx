import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  // the theme is only known in the browser; render a neutral button on the server
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <HiOutlineSun aria-hidden="true" /> : <HiOutlineMoon aria-hidden="true" />}
    </button>
  );
};

const Navbar = () => (
  <header className="nav">
    <a href="/#about" className="logo" aria-label="Rangdra Pangestu — Home">
      <img className="logo-mark" src="/favicon.webp" alt="" width={30} height={30} />
      <span className="logo-text">RANGDRA PANGESTU</span>
    </a>
    <nav className="menu" aria-label="Primary">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>{item.name}</a>
      ))}
    </nav>
    <div className="nav-actions">
      <ThemeToggle />
      <a href="/#contact" className="btn-dark">
        Hire me <span className="btn-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </header>
);

export default Navbar;
