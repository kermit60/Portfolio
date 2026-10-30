import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const experience = [
  {
    period: "Sept 2025 — Dec 2025",
    role: "Applications Developer",
    organization: "Ministry of Public and Business Service Delivery and Procurement",
    bullets: [
      "Contributed to data platform initiatives focused on improving the visibility, reliability, and maintainability of automated workflows.",
      "Designed integrations that supported the movement of structured data between enterprise systems and cloud-based analytics environments.",
      "Worked with a cross-functional development team to explore practical approaches to data integration and reporting.",
    ],
  },
  {
    period: "Jan 2025 — Apr 2025",
    role: "Applications Developer",
    organization: "Ontario Ministry of Health",
    bullets: [
      "Supported the modernization of data workflows as part of a broader transition from on-premise systems to cloud services.",
      "Automated recurring data handling and validation tasks to improve consistency and reduce manual overhead.",
      "Maintained and refined ETL processes that prepared structured data for visualization, reporting, and downstream use.",
    ],
  },
  {
    period: "Sept 2023 — Dec 2023",
    role: "Project Team Member",
    organization:
      "Microsoft — Azure & Artificial Intelligence Waterloo Experience Accelerate Program · Waterloo, ON",
    bullets: [
      "Explored an AI-assisted approach to balancing access to sensitive information with the need for responsible privacy protections.",
      "Researched emerging privacy-preserving techniques and considered their practical use in healthcare-related data workflows.",
      "Collaborated on a prototype and communicated the team’s findings to technical and industry audiences.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="mb-10">
        <p className="section-eyebrow">Background</p>
        <h2 className="section-heading">Experience</h2>
      </div>

      <div className="border-y border-slate-200 dark:border-slate-800">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="grid gap-3 border-b border-slate-200 py-7 last:border-b-0 dark:border-slate-800 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {item.period}
            </p>
            <div>
              <h3 className="text-xl font-semibold">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.organization}</p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/kermitliu02l98/"
        target="_blank"
        rel="noreferrer"
        className="button-secondary mt-8"
      >
        <FaLinkedin size={18} />
        View my LinkedIn
        <GoArrowUpRight />
      </a>
    </section>
  );
};

export default Experience;
