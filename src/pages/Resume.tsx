// src/pages/Resume.tsx
import { useEffect } from "react";

const RESUME_PDF_PATH = "/resume_michael_gresh.pdf"; // put file in /public

export default function Resume() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const telDisplay = "727-600-2369";
  const telHref = telDisplay.replace(/[^0-9]/g, "");
  const email = "michaelgresh@gmail.com";

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      {/* Page title + actions */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Michael Gresh</h1>
        <p className="mt-1 text-lg opacity-80">Senior Full Stack Web Developer</p>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm opacity-80">
          <span>Saint Petersburg, FL</span>
          <a className="hover:opacity-100" href={`tel:${telHref}`}>{telDisplay}</a>
          <a className="hover:opacity-100" href={`mailto:${email}`}>{email}</a>
        </div>

        <div className="mt-4">
          <a
            href={RESUME_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/10 px-3 py-2 text-sm font-medium hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="prose prose-neutral max-w-none dark:prose-invert">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p>
          Senior Full Stack Developer with expertise in delivering high-performance, responsive, and accessible applications across React, JavaScript, HTML, CSS/SASS, and API-driven backends. Adept at building reusable UI components, optimizing performance, ensuring WCAG compliance, and guiding Agile teams in scalable architecture and cross-functional collaboration.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <ResumeCard
            title="Languages"
            items={["JavaScript",
              "TypeScript",
              "HTML",
              "CSS/SASS",
              "SQL",
              "PHP",
              "Java",
              "Python",
              "Ruby",
              "Prisma",
              "C++",
              "C#",
              "Go",
            ]}
          />
          <ResumeCard
            title="Core"
            items={[
              "Front-End Architecture",
              "Agile / Scrum",
              "Prompt Engineering",
              "Generative AI",
              "A/B testing",
              "User Research",
              "HIPAA Compliancy",
              "API-Driven Development",
              "Progressive Web Apps (PWAs)",
              "Responsive Web Design",
              "Cross-Browser Compatibility",
              "Reusable Component Libraries",
              "Site Performance Optimization",
            ]}
          />
          <ResumeCard
            title="Tools"
            items={[
              "React",
              "Node",
              "Git/GitHub",
              "Jira",
              "Webpack/Babel",
              "NPM",
              "Cypress",
              "Chrome DevTools",
              "Lighthouse",
              "AWS",
              "Vite",
              "Cursor",
              "VS Code",
            ]}
          />
        </div>
      </section>

      {/* Experience */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Professional Experience</h2>

        <Job
          company="Online Business"
          location="Pinellas Park, FL"
          role="Founder / Full-Stack Developer"
          dates="Apr 2017 – Present"
          bullets={[
            "Developed a comprehensive business plan outlining strategic goals, financial projects, market analysis, and operational frameworks, generating close to six figures in annual revenue at 70% total margins",
            "Delivered modern, enterprise-grade websites aligned with WCAG 2.1 accessibility standards, improving usability and compliance for diverse user groups",
            "Increased user engagement by building custom React Progressive Web Apps (PWAs) with offline access and API-driven content",
            "Improved site load times by up to 35% on average and enhanced cross-browser compatibility by leading front-end redevelopment using React and SASS",
            "Reduced design-to-development turnaround by 40% by creating reusable UI component libraries integrated with Figma design systems",

          ]}
        />

        <Job
          company="Sunstar Paramedics"
          location="Pinellas Park, FL"
          role="Web Developer / Site Administrator"
          dates="Sep 2009 – Present"
          bullets={[
          "Improved operational efficiency by 20% by developing responsive interfaces tailored to EMS workflows",
          "Increased system stability and reduced post-release bugs by 30% by implementing automated testing suites with React Testing Library",
          "Ensured high-performance, accessible applications by conducting regular code reviews and mentoring developers on performance optimization, accessibility, and maintainable code practices",
          "Delivered scalable, user-friendly interfaces by architecting and maintaining Sunstar’s web platforms, supporting both clinical staff and administrative needs",
          ]}
        />
      </section>

      {/* Education & Certifications */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <p className="font-medium">B.S., Computer Science (in progress) — 4.0 GPA</p>
            <p className="text-sm opacity-80">
              Southern New Hampshire University<br />
              Dean’s & President’s Lists (2023–2025)<br />
              Expected Oct 2027.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Certifications</h2>
          <div className="mt-3 rounded-lg border border-black/10 p-4 dark:border-white/10">
            <p className="font-medium">Professional Scrum Master (PSM)</p>
            <p className="text-sm opacity-80">Scrum.org</p>
          </div>
        </div>
      </section>

    </article>
  );
}

function ResumeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-black/10 p-4 dark:border-white/10">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm opacity-90">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function Job({
  company,
  location,
  role,
  dates,
  bullets,
}: {
  company: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <section className="mt-4 rounded-lg border border-black/10 p-4 dark:border-white/10">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-medium">{company}</h3>
          <p className="text-sm opacity-80">{location}</p>
        </div>
        <p className="text-sm opacity-80">{dates}</p>
      </div>
      <p className="mt-2 font-medium">{role}</p>
      <ul className="mt-2 list-disc pl-5 text-sm opacity-90">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}
