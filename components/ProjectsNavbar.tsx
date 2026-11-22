import { FunctionComponent } from "react";
import { Category } from "../types";
import { projects } from "../data";
import { categoryLabel } from "./ProjectCard";

const allFilters: (Category | "projects")[] = [
  "projects",
  "WEB",
  "CMS",
  "API",
  "APP",
];

const count = (value: Category | "projects") =>
  value === "projects" ? projects.length : projects.filter((p) => p.category.includes(value)).length;

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: (category: Category | "projects") => void;
  active: string;
}> = ({ handleFilterCategory, active }) => {
  return (
    <nav aria-label="Project filters" className="filters">
      {allFilters.map((value) => (
        <button
          key={value}
          onClick={() => handleFilterCategory(value)}
          className={active === value ? "is-active" : undefined}
          aria-pressed={active === value}
        >
          {value === "projects" ? "All" : categoryLabel(value)}
          <span className="count">{count(value)}</span>
        </button>
      ))}
    </nav>
  );
};

export default ProjectsNavbar;
