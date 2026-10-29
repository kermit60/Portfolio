import { FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const experience = [
  {
    period: "Sept 2025 — Dec 2025",
    role: "Applications Developer",
    organization:
      "Ministry of Public and Business Service Delivery and Procurement",
    bullets: [
      "Architected a scheduled reporting solution using Informatica REST APIs, Python automation, and AWS Glue to capture ETL run status, successful counts, durations, and actionable failure diagnostics.",
      "Designed and developed 19 Informatica mappings and an end-to-end task flow to replicate 145 enterprise Oracle objects into Amazon Redshift for downstream analytics and reporting.",
      "Collaborated with six co-op developers in a ministry-wide internal data hackathon to design and build a PySpark-based data integration solution in Microsoft Fabric.",
    ],
  },
  {
    period: "Jan 2025 — Apr 2025",
    role: "Applications Developer",
    organization: "Ontario Ministry of Health",
    bullets: [
      "Accelerated cloud migration by 15% using SQL and Informatica Regex transformations to transition 70+ ETL workflows from an on-premise data warehouse to Informatica Cloud.",
      "Automated the transfer and validation of 50+ daily healthcare claim logs to AWS S3 with Bash scripts, improving data reliability and reducing manual effort.",
      "Managed and optimized Informatica Cloud ETL pipelines to transition structured data to AWS S3 for data visualization and reporting.",
    ],
  },
  {
    period: "Sept 2023 — Dec 2023",
    role: "Project Team Member",
    organization:
      "Microsoft — Azure & Artificial Intelligence Waterloo Experience Accelerate Program · Waterloo, ON",
    bullets: [
      "Prototyped an AI-driven healthcare privacy solution using Microsoft cloud and AI services to balance data accessibility and individual privacy protection.",
      "Analyzed potential data privacy AI techniques, including homomorphic encryption and differential privacy algorithms, for healthcare data collection and processing.",
      "Collaborated with three group members and presented the solution to industry collaborators and supervisors.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
          Background
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
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
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
      >
        <FaLinkedin size={18} />
        View my LinkedIn
        <GoArrowUpRight />
      </a>
    </section>
  );
};

export default Experience;
