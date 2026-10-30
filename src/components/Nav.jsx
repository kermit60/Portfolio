import PropTypes from "prop-types";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { links } from "../data";

const Nav = ({ isDark, onToggleTheme }) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-slate-50/70 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a
          href="#about"
          className="text-xl font-bold tracking-tight text-slate-950 dark:text-white"
        >
          Kermit<span className="text-emerald-500">.</span>
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden gap-6 sm:flex">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="text-sm font-medium capitalize text-slate-600 transition-colors hover:text-emerald-500 dark:text-slate-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:focus:ring-offset-slate-950"
          >
            {isDark ? <MdLightMode size={19} /> : <MdDarkMode size={19} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Nav;
