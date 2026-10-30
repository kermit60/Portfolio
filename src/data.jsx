import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import bingeboxMock from "./assets/bingebox-mock.png";
import cvMock from "./assets/cv.png";
export const links = [
  { id: "about", href: "#about", text: "about" },
  { id: "experience", href: "#experience", text: "experience" },
  { id: "projects", href: "#projects", text: "projects" },
  { id: "contact", href: "#contact", text: "contact" },
];

export const skills = [
  {
    id: "html-css",
    skill: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    description:
      "Highly skilled in HTML & CSS, making appealing and responsive websites for optimal user experience.",
  },
  {
    id: "javascript",
    skill: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    description: "Comfortable building interactive, accessible experiences with modern JavaScript.",
  },
  {
    id: "react",
    skill: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    description:
      "Building modular interfaces with React, reusable components, and thoughtful state management.",
  },
];

export const projects = [
  {
    id: "bingebox",
    img: bingeboxMock,
    url: "https://bingebox-project.netlify.app/",
    title: "BingeBox",
    build: "React · FastAPI · TMDB API · Google Gemini",
    bullets: [
      "Developed a React-based movie discovery app integrating the TMDB API for browsing, searching, and viewing detailed movie information.",
      "Prototyped an AI-assisted movie recommendation feature using Google Gemini to enhance movie discovery.",
      "Built a FastAPI backend that extracts structured movie search categories from user input and returns strict JSON for frontend consumption.",
    ],
  },
  {
    id: "easyquickcv",
    img: cvMock,
    url: "https://easyquickcv.netlify.app/",
    title: "EasyQuickCV",
    build: "React · HTML/CSS · JavaScript",
    bullets: [
      "Built a personal resume builder with a live preview using React, HTML/CSS, and JavaScript.",
      "Enabled dynamic editing of skills, education, experience, and projects sections.",
      "Designed a fixed sidebar with intuitive CRUD controls for section management.",
      "Integrated PDF export functionality to download a clean, professional resume.",
    ],
  },
];
