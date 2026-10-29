import PropTypes from "prop-types";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Project = ({ img, url, github, title, build, bullets }) => {
  const ROTATION_RANGE = 22;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-xl shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70 md:py-5 lg:min-h-[22rem] lg:flex-row lg:justify-center lg:gap-5 xl:min-h-[27rem]"
    >
      {img ? (
        <div className="flex items-center justify-center p-5 lg:w-1/2 lg:p-8">
          <img
            className="w-full object-contain transition duration-500 group-hover:scale-[1.02] md:max-w-[30rem]"
            src={img}
            alt={`${title} project preview`}
          />
        </div>
      ) : null}
      <div
        className={`flex flex-col justify-center px-6 py-8 lg:px-10 ${img ? "lg:w-1/2" : "w-full"}`}
      >
        <h3 className="py-2 text-2xl font-bold tracking-tight">{title}</h3>
        <ul className="list-disc space-y-2 py-3 pl-5 text-base leading-7 text-slate-600 dark:text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p className="pb-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">{build}</p>
        {github || url ? (
          <div className="flex flex-wrap gap-5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {github ? (
              <a
                className="flex items-center gap-1 transition hover:text-emerald-800 dark:hover:text-emerald-300"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                View source code <GoArrowUpRight />
              </a>
            ) : null}
            {url ? (
              <a
                className="flex items-center gap-1 transition hover:text-emerald-800 dark:hover:text-emerald-300"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                View website
                <GoArrowUpRight />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

Project.propTypes = {
  img: PropTypes.string,
  url: PropTypes.string,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
  build: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
