import { FunctionComponent } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink, HiArrowRight } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Project } from "../types";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations";

const ProjectCard: FunctionComponent<{
  project: Project;
  showDetail: string | number | null;
  setShowDetail: (id: string | number | null) => void;
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
}) => {
  return (
    <>
      {/* ─── Card ─── */}
      <motion.div
        variants={fadeInUp}
        className="relative flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-lg cursor-pointer group bg-canvas border-hairline hover:shadow-elev-3 hover:border-brand-green/40 hover:-translate-y-1"
        onClick={() => setShowDetail(id)}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${name}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowDetail(id);
          }
        }}
      >
        {/* Image with overlay */}
        <div
          className="relative w-full overflow-hidden bg-brand-teal-deep"
          style={{ paddingBottom: "60%" }}
        >
          <Image
            src={image_path}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brand-teal-deep/80 via-brand-teal-deep/20 to-transparent group-hover:opacity-100" />

          {/* Floating action hint */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-green text-on-primary text-button-md font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-glow-green">
            <span>View</span>
            <HiArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-xl">
          <h3 className="font-semibold transition-colors duration-200 text-heading-5 text-ink mb-xs group-hover:text-brand-green-dark">
            {name}
          </h3>
          <p className="flex-1 text-body-sm text-slate line-clamp-2 mb-md">
            {description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1">
            {key_points.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface text-caption text-steel border border-hairline-soft"
              >
                {tech}
              </span>
            ))}
            {key_points.length > 3 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-feature text-caption text-brand-green-dark font-medium">
                +{key_points.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-brand-green via-brand-green-mid to-brand-teal-mid transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>

      {/* ─── Detail Modal ─── */}
      {showDetail === id && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-md"
          onClick={() => setShowDetail(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${name}`}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-brand-teal-deep/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-canvas rounded-xl shadow-elev-4 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowDetail(null)}
              className="absolute z-10 flex items-center justify-center transition rounded-full top-4 right-4 w-9 h-9 bg-brand-teal-deep/80 text-on-dark hover:bg-brand-teal-deep backdrop-blur-sm"
              aria-label="Close"
            >
              <MdClose className="w-5 h-5" />
            </button>

            {/* Modal image hero */}
            <div
              className="relative flex-shrink-0 w-full bg-brand-teal-deep"
              style={{ paddingBottom: "45%" }}
            >
              <Image
                src={image_path}
                alt={name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
            </div>

            {/* Modal content */}
            <div className="relative flex-1 -mt-12 overflow-y-auto p-xxl">
              {/* Category badges */}
              <div className="flex flex-wrap gap-xs mb-md">
                {category.map((cat) => (
                  <span key={cat} className="badge-popular">
                    {cat}
                  </span>
                ))}
              </div>

              <h2 className="font-medium text-heading-2 text-ink mb-sm">
                {name}
              </h2>
              <p className="leading-relaxed text-subtitle text-slate mb-xl">
                {description}
              </p>

              {/* Tech Stack */}
              <div className="mb-xl">
                <h4 className="eyebrow mb-sm">Tech Stack</h4>
                <div className="flex flex-wrap gap-xs">
                  {key_points.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center font-medium transition-colors border rounded-lg px-sm py-xs bg-surface text-body-sm text-ink border-hairline hover:border-brand-green-soft hover:bg-surface-feature"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center border-t gap-sm pt-lg border-hairline">
                {deployed_url && (
                  <a
                    href={deployed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary shadow-glow-green"
                  >
                    <HiExternalLink aria-hidden="true" />
                    Live Demo
                  </a>
                )}
                {github_url && github_url !== "#" && (
                  <a
                    href={github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <AiFillGithub aria-hidden="true" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
