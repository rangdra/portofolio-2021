import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 — Page Not Found</title>
      </Head>
      <section className="not-found">
        <h1>
          <span className="sans">404</span> <span className="serif">lost?</span>
        </h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="btn-dark">
          Back to home <span className="btn-arrow" aria-hidden="true">→</span>
        </a>
      </section>
    </>
  );
};

export default NotFound;
