import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    // follows the OS setting until the visitor picks a theme; the choice is kept in localStorage
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Navbar />
      <main id="top">
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
