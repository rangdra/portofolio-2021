import { useState, useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          onClick={() => setActive(name)}
          className="font-semibold transition duration-200 hover:text-cyan-500"
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActive('About');
    if (pathname === '/projects') setActive('What i am made');
    if (pathname === '/resume') setActive('Resume');
  }, []);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-cyan-500 border-cyan-500 dark:text-white md:text-2xl">
        {active}
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="What i am made"
          route="/projects"
        />
      </div>
    </div>
  );
};

export default Navbar;
