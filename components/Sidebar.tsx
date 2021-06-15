import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';
import { useTheme } from 'next-themes';
import Toggle from './Toggle';

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Image
                src="/icon-128x128.png"
                width={128}
                height={128}
                alt="avatar"
                className="object-cover mx-auto border rounded-full"
                quality={100}
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-cyan-500">Rangdra </span>Pangestu
            </h3>
            <p className="px-2 py-1 my-3 font-medium bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-ba-200 dark:bg-black-500">
                Web Developer
            </p>
            <a
                href="/assets/Rangdra_Pangestu_Resume.pdf"
                download="Rangdra_Pangestu_Resume.pdf"
                className="flex items-center justify-center px-2 py-1 my-2 transition duration-200 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:hover:bg-gray-500 hover:bg-cyan-500 hover:text-white"
            >
                <GiTie className="w-6 h-6" />
                <span>Download CV</span>
            </a>

            <div className="flex justify-around w-9/12 mx-auto my-5 text-cyan-500 md:w-full ">
                <a
                    href="https://www.instagram.com/rangdra_"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <AiFillInstagram className="w-8 h-8 cursor-pointer hover:text-cyan-400" />
                </a>
                <a
                    href="https://www.linkedin.com/in/rangdra-pangestu-7b991219a/"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:text-cyan-400" />
                </a>
                <a
                    href="https://github.com/rangdra"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <AiFillGithub className="w-8 h-8 cursor-pointer hover:text-cyan-400" />
                </a>
            </div>

            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500 ml-[-1rem] mr-[-1rem]">
                <div className="flex items-center justify-center">
                    <GoLocation className="mr-2" />{' '}
                    <span>Bekasi,Indonesia </span>
                </div>
                <p className="my-2 ">rangdra2@gmail.com </p>
                <p className="my-2">+6283890062547 </p>
            </div>

            <button
                className="w-8/12 px-5 py-2 text-white transition duration-200 bg-black rounded-full cursor-pointer bg-gradient-to-br from-indigo-600 to-cyan-400 hover:from-indigo-700 hover:to-cyan-500 hover:scale-105 focus:outline-none"
                onClick={() => window.open('mailto:rangdra2@gmail.com')}
            >
                Email me
            </button>
            <div className="flex items-center justify-center w-full px-5 py-2 my-4 space-x-2">
                <Toggle />{' '}
                <span>{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
            </div>
        </>
    );
};

export default Sidebar;
