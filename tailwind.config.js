/**
 * Only Tailwind's preflight (reset) is used; the UI itself lives in
 * styles/globals.css (ported from the my-portofolio design).
 */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {},
  plugins: [],
};
