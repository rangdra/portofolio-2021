import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const sections = [
  {
    heading: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Experience", href: "#experience" },
      { label: "Work", href: "#work" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: "mailto:rangdra2@gmail.com", external: true },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rangdra-pangestu-7b991219a/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/rangdra",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/rngdr_",
        external: true,
      },
    ],
  },
  {
    heading: "Core Stack",
    links: [
      { label: "TypeScript", href: "#skills" },
      { label: "React · Next.js", href: "#skills" },
      { label: "React Native", href: "#skills" },
      { label: "Node.js · NestJS", href: "#skills" },
      { label: "PostgreSQL · MongoDB", href: "#skills" },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-teal-deep text-on-dark mt-section-lg">
      <div className="container-app py-section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="eyebrow-on-dark">Software Engineer</p>
            <h3 className="mt-sm text-heading-3 font-medium tracking-tight text-balance">
              Let's build something{" "}
              <span className="text-brand-green">durable</span>.
            </h3>
            <p className="mt-md text-on-dark-muted text-body-md max-w-md">
              Available for frontend, mobile, and full-stack engagements. Based
              in Bekasi, Indonesia. Working worldwide.
            </p>
            <div className="mt-lg flex flex-wrap items-center gap-sm">
              <a href="mailto:rangdra2@gmail.com" className="btn-on-dark">
                <HiOutlineMail aria-hidden="true" />
                rangdra2@gmail.com
              </a>
              <a
                href="/assets/CV Rangdra Pangestu - Software Engineer.pdf"
                download
                className="btn-secondary-on-dark"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Link grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-lg">
            {sections.map((section) => (
              <div key={section.heading}>
                <h4 className="text-body-sm font-medium text-on-dark mb-sm">
                  {section.heading}
                </h4>
                <ul className="space-y-xxs" role="list">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-on-dark-muted text-body-sm hover:text-on-dark transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-section-sm pt-xl border-t border-hairline-dark flex flex-col md:flex-row md:items-center md:justify-between gap-md">
          <p className="text-on-dark-muted text-body-sm">
            © {new Date().getFullYear()} Rangdra Pangestu. Built with Next.js,
            Tailwind CSS, and Framer Motion.
          </p>
          <div
            className="flex items-center gap-sm text-on-dark-muted"
            role="list"
            aria-label="Social links"
          >
            <a
              href="https://github.com/rangdra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md hover:text-on-dark hover:bg-white/5 transition"
            >
              <AiFillGithub className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/rangdra-pangestu-7b991219a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md hover:text-on-dark hover:bg-white/5 transition"
            >
              <AiFillLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/rngdr_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-md hover:text-on-dark hover:bg-white/5 transition"
            >
              <AiFillInstagram className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
