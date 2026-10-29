import Project from "./Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Some recent projects</h2>
        </div>
        <span className="hidden text-sm text-slate-500 sm:block dark:text-slate-400">03 / 03</span>
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((project) => {
          const { id, img, url, github, title, build, bullets } = project;
          return (
            <Project
              key={id}
              img={img}
              github={github}
              url={url}
              title={title}
              build={build}
              bullets={bullets}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
