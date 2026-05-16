import { FunctionComponent } from "react";
import { Category } from "../types";

const allFilters: (Category | "projects")[] = [
  "projects",
  "WEB",
  "CMS",
  "API",
  "APP",
];

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: (category: Category | "projects") => void;
  active: string;
}> = ({ handleFilterCategory, active }) => {
  return (
    <nav aria-label="Project filters" className="flex flex-wrap gap-xs mb-lg">
      {allFilters.map((value) => (
        <button
          key={value}
          onClick={() => handleFilterCategory(value)}
          className={`inline-flex items-center rounded-full text-body-sm font-medium transition duration-180 ${
            active === value
              ? "bg-ink text-on-dark border border-ink"
              : "bg-transparent text-steel border border-hairline hover:border-hairline-strong hover:text-ink"
          }`}
          style={{ padding: "8px 16px" }}
          aria-pressed={active === value}
        >
          {value === "projects" ? "All" : value}
        </button>
      ))}
    </nav>
  );
};

export default ProjectsNavbar;
