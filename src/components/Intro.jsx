const Intro = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-8 lg:pb-36 lg:pt-40"
    >
      <div className="absolute -left-32 top-20 -z-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="relative z-0 max-w-3xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
          Developer & curious builder
        </p>
        <h1 className="name-title max-w-3xl bg-custom-gradient bg-[length:170%] bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent sm:text-7xl">
          Hi, I&apos;m Kermit!
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
          A Mathematics student at the University of Waterloo and an aspiring software developer who
          sometimes dabbles in machine learning.
        </p>
        <a
          href="#projects"
          className="mt-10 inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
        >
          Explore my work <span className="ml-2">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Intro;
