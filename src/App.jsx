import { useLayoutEffect, useState } from "react";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen overflow-x-clip bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Nav isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <main className="pt-20">
        <Intro />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
