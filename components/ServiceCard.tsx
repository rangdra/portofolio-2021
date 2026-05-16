import { FunctionComponent } from "react";
import { Service } from "../types";

const ServiceCard: FunctionComponent<{ service: Service }> = ({
  service: { Icon, title, about },
}) => {
  return (
    <div className="card group flex flex-col gap-md h-full transition duration-180 hover:shadow-elev-2 hover:border-hairline-strong">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-surface-feature text-brand-green-dark">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-heading-5 font-semibold text-ink">{title}</h3>
      <p
        className="text-body-sm text-slate leading-relaxed"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </div>
  );
};

export default ServiceCard;
