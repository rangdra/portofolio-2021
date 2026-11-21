import { FunctionComponent, useEffect } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Project } from "../types";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: string | number | null;
  setShowDetail: (id: string | number | null) => void;
  // render only the detail modal (used by the pinned "work" cards)
  modalOnly?: boolean;
  // position in the list: row number and which floating preview to show
  index?: number;
  onHover?: (index: number) => void;
}> = ({
  project: {
    name,
    image_path,
    category,
    id,
    description,
    deployed_url,
    github_url,
    key_points,
  },
  showDetail,
  setShowDetail,
  modalOnly,
  index = 0,
  onHover,
}) => {
  const open = showDetail === id;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowDetail(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, setShowDetail]);

  return (
    <>
      {!modalOnly && (
        <li className="project-row" style={{ "--i": index } as React.CSSProperties}>
          <button
            type="button"
            onClick={() => setShowDetail(id)}
            onMouseEnter={() => onHover?.(index)}
            onFocus={() => onHover?.(index)}
            aria-label={`View details for ${name}`}
          >
            <span className="pr-num">{String(index + 1).padStart(2, "0")}</span>
            {/* small screens show an inline thumbnail instead of the cursor preview */}
            <span className="pr-thumb">
              <Image src={image_path} alt="" layout="fill" objectFit="cover" sizes="72px" />
            </span>
            <span className="pr-main">
              <span className="pr-name">{name}</span>
              <span className="pr-desc">{description}</span>
            </span>
            <span className="pr-cats">
              {category.map((cat) => <span key={cat}>{cat}</span>)}
            </span>
            <span className="pr-stack">
              {key_points.slice(0, 3).join(" · ")}
              {key_points.length > 3 && <em> +{key_points.length - 3}</em>}
            </span>
            <span className="pr-arrow" aria-hidden="true">→</span>
          </button>
        </li>
      )}

      {open && (
        <div
          className="modal"
          onClick={() => setShowDetail(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${name}`}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDetail(null)} aria-label="Close">
              <MdClose />
            </button>
            <div className="modal-img">
              <Image src={image_path} alt={name} layout="fill" objectFit="cover" sizes="(max-width: 900px) 100vw, 860px" />
            </div>
            <div className="modal-body">
              <div className="project-tags">
                {category.map((cat) => <span key={cat} className="dark">{cat}</span>)}
              </div>
              <h2><span className="sans">{name}</span></h2>
              <p>{description}</p>
              <h4>Tech stack</h4>
              <div className="project-tags">
                {key_points.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="modal-actions">
                {deployed_url && (
                  <a href={deployed_url} target="_blank" rel="noopener noreferrer" className="btn-dark">
                    Live demo <span className="btn-arrow"><HiExternalLink aria-hidden="true" /></span>
                  </a>
                )}
                {github_url && github_url !== "#" && (
                  <a href={github_url} target="_blank" rel="noopener noreferrer" className="btn-light">
                    <AiFillGithub aria-hidden="true" /> Source code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
