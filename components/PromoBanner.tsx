import { HiSparkles } from "react-icons/hi";

const PromoBanner = () => {
  return (
    <div className="bg-brand-teal-deep text-on-dark">
      <div className="container-app flex items-center justify-center gap-2 py-sm text-center">
        <HiSparkles
          className="h-4 w-4 text-brand-green flex-shrink-0"
          aria-hidden="true"
        />
        <p className="text-body-sm font-medium">
          Open to new opportunities — let's build something great together.
        </p>
        <a
          href="mailto:rangdra2@gmail.com"
          className="hidden sm:inline-flex items-center gap-1 text-brand-green font-semibold text-body-sm hover:underline"
        >
          Get in touch
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default PromoBanner;
