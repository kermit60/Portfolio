import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center lg:px-8 lg:py-40"
    >
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
        Have a project in mind?
      </p>
      <h2 className="name-title bg-custom-gradient bg-[length:170%] bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl">
        Let&apos;s Connect
      </h2>
      <div className="mt-10 flex gap-6 text-slate-600 dark:text-slate-300">
        <a
          aria-label="GitHub"
          href="https://github.com/kermit60"
          target="_blank"
          rel="noreferrer"
          className="transition hover:-translate-y-1 hover:text-emerald-500"
        >
          <FaGithub size={28} />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/kermitliu02l98/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:-translate-y-1 hover:text-emerald-500"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          aria-label="Email"
          href="mailto:k63liu@uwaterloo.ca"
          className="transition hover:-translate-y-1 hover:text-emerald-500"
        >
          <MdEmail size={30} />
        </a>
      </div>
      <p className="mt-14 text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Kermit Liu
      </p>
    </footer>
  );
};

export default Footer;
