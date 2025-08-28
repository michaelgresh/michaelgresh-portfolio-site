// src/pages/projects/ICEMSPwa.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ICEMSPwa() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Back button */}
      <div className="bg-neutral-900 text-white py-4">
        <div className="mx-auto max-w-6xl px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-white hover:text-neutral-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <div className="text-sm text-neutral-400 mt-1">
            <span className="mr-2">Projects</span>
            <span className="mr-2">›</span>
            <span>ICEMS PWA (Progressive Web Application)</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-1">
              ICEMS
            </h1>
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
              (Progressive Web Application)
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              ICEMS is a comprehensive conference management application designed to provide 
              attendees with registration capabilities, personalized agenda management, and offline 
              access to conference materials. Built as a Progressive Web App to deliver native-like 
              performance across all devices while maintaining web accessibility.
            </p>
            
            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Seamless conference registration through the conference website via a contact form webhook
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Personalized agenda creation allowing attendees to customize their conference experience
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Offline-first architecture ensuring access to schedules and materials without internet
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Real-time schedule updates and announcements
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Responsive design optimized for mobile, tablet, and desktop experiences
                </li>
              </ul>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">React</div>
                  <div className="text-sm text-neutral-300">Frontend Framework</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">PWA</div>
                  <div className="text-sm text-neutral-300">App Architecture</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Prisma', 'Visual Studio', 'Push API', 'Visual Studio'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/screenshots/icems-register.jpg",
                alt: "ICEMS PWA Registration Dashboard",
                title: "Registration Dashboard",
                description: "User-friendly registration interface via the event website with form validation and user registration via webhook"
              },
              {
                src: "/screenshots/icems-admin-schedule.jpg", 
                alt: "ICEMS Admin Schedule Editor",
                title: "Secure Admin Section",
                description: "Password-protected administrative section, where admin can update event details, scheduled events, manage users, and process file management"
              },
              {
                src: "/screenshots/icems-mobile.jpg",
                alt: "ICEMS PWA Mobile Experience", 
                title: "Mobile Experience",
                description: "Responsive design optimized for mobile devices and tablets"
              },
              {
                src: "/screenshots/icems-offline.jpg",
                alt: "ICEMS PWA Offline Access",
                title: "Offline Access", 
                description: "Service worker implementation for offline functionality"
              }
            ].map((screenshot, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 relative">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image if it fails to load, showing gradient fallback
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback icon when image fails to load */}
                  <div className="flex items-center justify-center h-full text-blue-700 dark:text-blue-200">
                    <div className="text-center">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-medium">{screenshot.title}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">{screenshot.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="mb-12 bg-neutral-50 dark:bg-neutral-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Technical Implementation</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The ICEMS PWA was developed as a full-stack Node.js and React application. The backend, built with 
              Express and Prisma, manages user authentication, role-based access, and an 
              administrative dashboard where conference staff can configure event details, 
              upload files, and manage registrations. Data is stored in a MySQL database 
              for reliability and scalability.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The frontend is built with React (JavaScript) to deliver a responsive, mobile-first 
              interface that behaves like a native application. Key features include attendee 
              registration, session bookmarking, personalized agendas, an interactive venue map, 
              and downloadable conference materials. A service worker enables the app to be 
              installed on mobile devices, providing quick access and ensuring functionality 
              even with limited connectivity.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              File management is implemented with secure server-side storage and category 
              filters, allowing administrators to link resources directly to agenda sessions. 
              All event branding (title, logo, dates, location, and lodging information) is 
              configurable from the admin dashboard so the application can be reused for future 
              years without code changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
