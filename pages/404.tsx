import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 — Page Not Found</title>
      </Head>
      <div className="container-app py-hero flex flex-col items-center justify-center text-center">
        <span className="text-hero-display font-medium text-brand-green">
          404
        </span>
        <h1 className="mt-md text-heading-2 font-medium text-ink">
          Page not found
        </h1>
        <p className="mt-sm text-body-md text-slate max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <a className="btn-primary mt-xxl">Back to home</a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
