import { FunctionComponent } from 'react';
import { Category } from '../types';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  return (
    <li
      className={`${
        active === value && 'text-cyan-500 '
      } capitalize cursor-pointer hover:text-cyan-500 font-medium hover:underline transition duration-200`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="html-css-js" {...props} />
      <NavItem value="mern" {...props} />
      <NavItem value="typescript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
