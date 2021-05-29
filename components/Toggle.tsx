import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme();

  function isDark() {
    return theme === "dark";
  }
  return (
    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
      {/* toggle */}
      <div className="relative">
        {/* input */}
        <input
          id="toogleA"
          type="checkbox"
          className="hidden"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        {/* line */}
        <div className="w-10 h-6 bg-transparent border-4 border-gray-400 rounded-full toggle_3_line dark:border-cyan-400 dark:bg-cyan-800"></div>
        {/* dot */}
        {/* <div class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div> */}
        <div className="bg-black toggle_dot w-7 h-7 -top-0.5 flex items-center justify-center absolute  rounded-full inset-y-0 left-0 transform -rotate-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </label>
  );
};

export default Toggle;
