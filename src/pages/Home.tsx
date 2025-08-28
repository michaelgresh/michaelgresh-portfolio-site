// src/pages/Home.tsx

import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import WebsiteCard from "../components/WebsiteCard";

export default function Home() {
  return (
    <>
      {/* Hero Section - visually enhanced */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900 h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-96 h-96 bg-blue-400/20 rounded-full blur-3xl absolute -top-32 -left-32 animate-pulse" />
          <div className="w-72 h-72 bg-pink-400/20 rounded-full blur-3xl absolute top-40 right-0 animate-pulse" />
        </div>
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="relative lg:flex hidden items-end justify-center">
            <img
              src="/IMG_4089.png"
              alt="Michael Gresh professional headshot"
              className="max-h-full w-auto object-contain animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
          <div className="flex items-center px-4 lg:px-8 xl:px-16">
            <div className="text-left max-w-xl">
              <p className="mb-2 text-base font-medium text-blue-700 dark:text-blue-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>Michael Gresh</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.4s' }}>
                I craft solid, scalable digital solutions.
              </h1>
              <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Web and Applications Developer focused on great user experiences.<br />
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Link
                  to="/resume"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                >
                  View résumé
                </Link>
                <a
                  href="mailto:michaelgresh@gmail.com"
                  className="inline-flex items-center rounded-full border border-blue-400 px-6 py-3 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-neutral-900 shadow-lg transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Work (replace with your real project cards when ready) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Apps</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Samples of my recent application design work.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "ICEMS",
                d: "Progressive web application for my client's annual medical conference with registration, personalized agendas, and offline access.",
                href: "/projects/icems-pwa",
                color: "blue",
                thumbnail: "/thumbnails/icems-app.jpg",
              },
              {
                t: "Reference Hub",
                d: "Mobile resource hub for EMS personnel, providing quick access to current protocols and clinical resources.",
                href: "/projects/reference-hub",
                color: "green",
                thumbnail: "/thumbnails/refhub-app.jpg",
              },
              {
                t: "RescueSync (in progress)",
                d: "Web-based scheduling, deployment, and analytics suite for EMS operations.",
                href: "/projects/rescue-sync",
                color: "purple",
                thumbnail: "/thumbnails/rescuesync-app.jpg",
              },
            ].map((p) => (
              <ProjectCard key={p.t} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Websites */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recent Websites</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A collection of websites I've designed and developed.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Florida Center for EMS",
                url: "https://flcems.org",
                thumbnail: "/thumbnails/flcems-site.jpg",
              },
              {
                name: "Pinellas County Office of the Medical Director",
                url: "https://pcemsomd.com",
                thumbnail: "/thumbnails/pcemsomd-site.jpg",
              },
              {
                name: "Prehospital Medicine Consultants",
                url: "https://floridaemsdoctors.com",
                thumbnail: "/thumbnails/prehospital-site.jpg",
              },
              {
                name: "Sunstar Paramedics",
                url: "https://sunstarems.com",
                thumbnail: "/thumbnails/sunstar-site.jpg",
              },
              {
                name: "Alt Dev Studios",
                url: "https://altdevstudios.com",
                thumbnail: "/thumbnails/altdev-site.jpg",
              },
              {
                name: "Community Inclusion Group",
                url: "https://communityinclusiongroup.org",
                thumbnail: "/thumbnails/cig-site.jpg",
              },
            ].map((site) => (
              <WebsiteCard key={site.name} {...site} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-16 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-neutral-950">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-blue-400/10 bg-white p-6 shadow-lg dark:border-blue-400/20 dark:bg-neutral-950 lg:col-span-2">
              <p className="text-neutral-700 dark:text-neutral-300">
                I'm a Senior Web and Applications Developer with expertise in delivering high-performance, responsive, 
                and accessible applications across React, JavaScript, HTML, CSS/SASS, and API-driven 
                backends. Adept at building reusable UI components, optimizing performance, ensuring 
                WCAG compliance, and guiding Agile teams in scalable architecture and cross-functional 
                collaboration.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-400/10 bg-white p-6 shadow-lg dark:border-blue-400/20 dark:bg-neutral-950">
              <h3 className="font-medium text-blue-700 dark:text-blue-300">Highlights</h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                <li>Frontend and Backend Web Development</li>
                <li>Extensive healthcare experience</li>
                <li>React, TypeScript, Node, SQL</li>
                <li>Performance & SEO oriented</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-blue-400/10 bg-white p-6 shadow-lg dark:border-blue-400/20 dark:bg-neutral-950">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-700 dark:text-blue-300">Contact</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Quickest way to reach me is email. I’m open to remote roles and select client work.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:michaelgresh@gmail.com"
                className="inline-flex items-center rounded-full border border-blue-400 px-6 py-3 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-neutral-900 shadow-lg transition-colors duration-200"
              >
                michaelgresh@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/michaelgresh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-blue-400 px-6 py-3 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-neutral-900 shadow-lg transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
