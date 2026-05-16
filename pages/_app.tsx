import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
