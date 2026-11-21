module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  // old URLs: redirect on the server (was a client-side redirect page)
  async redirects() {
    return [
      { source: "/portofolio", destination: "/#work", permanent: true },
      { source: "/resume", destination: "/#experience", permanent: true },
    ];
  },
};
