import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
    return (
        <ThemeProvider attribute="class">
            <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-36 xl:px-48 sm:px-20 md:px-32">
                <div className="h-full col-span-12 p-4 text-base text-center bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 rounded-2xl lg:col-span-3 ">
                    <Sidebar />
                </div>
                <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
                    <Navbar />
                    <AnimatePresence exitBeforeEnter>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MyApp;
