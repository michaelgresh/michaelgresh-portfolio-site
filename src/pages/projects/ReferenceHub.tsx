// src/pages/projects/ReferenceHub.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ReferenceHub() {
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
            <span>Reference Hub - Mobile EMS Resource Platform</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Reference Hub
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              Reference Hub is a comprehensive mobile resource platform designed specifically for 
              Emergency Medical Services (EMS) professionals. It provides instant access to critical 
              protocols, clinical documents, and reference materials optimized for use in emergency 
              situations where quick, reliable information access can be life-saving.
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
                  Instant access to EMS protocols and clinical decision-making tools
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Mobile-optimized interface designed for use in emergency vehicles and field conditions
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Searchable database of medications, dosages, and contraindications
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Quick reference guides for common emergency procedures and assessments
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                  Offline capability ensuring access to critical information without internet connectivity
                </li>
              </ul>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">Mobile</div>
                  <div className="text-sm text-neutral-300">First Design</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">Healthcare</div>
                  <div className="text-sm text-neutral-300">Industry Focus</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Mobile-First', 'PWA', 'Offline-First', 'Healthcare UX', 'Emergency Design'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-green-200 dark:bg-green-800 text-green-900 dark:text-green-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://pcemsomd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
              >
                View Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/screenshots/reference-hub-protocols.jpg",
                alt: "Reference Hub Protocol Library",
                title: "Protocol Library",
                description: "Comprehensive library of EMS protocols organized by category and urgency"
              },
              {
                src: "/screenshots/reference-hub-search.jpg", 
                alt: "Reference Hub Search Interface",
                title: "Search Interface",
                description: "Advanced search with filtering by protocol type, medication, or keyword"
              },
              {
                src: "/screenshots/reference-hub-medication.jpg",
                alt: "Reference Hub Medication Reference", 
                title: "Medication Reference",
                description: "Detailed drug information with dosages, contraindications, and interactions"
              },
              {
                src: "/screenshots/reference-hub-mobile.jpg",
                alt: "Reference Hub Mobile Experience",
                title: "Mobile Experience", 
                description: "Optimized mobile interface for use in emergency vehicles and field conditions"
              }
            ].map((screenshot, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 relative">
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
                  <div className="flex items-center justify-center h-full text-green-700 dark:text-green-200">
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
              The Reference Hub App is a progressive web application (PWA) built for EMS providers to quickly access 
              clinical reference materials and operational documents. The system is mobile-first and optimized for iOS 
              and Android devices, ensuring a responsive experience in the field.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The app connects directly to the organization's WordPress backend, leveraging the WordPress Download Manager 
              (WPDM) REST API and custom endpoints. Files and folders are displayed in a hierarchical structure, allowing 
              users to drill down from top-level categories (e.g., Protocols, Medical Control Directives, Clinical 
              Reference Documents, Forms) to specific documents. Protected files respect WordPress authentication, while 
              public resources remain openly accessible.
            </p>
            <div className="text-neutral-600 dark:text-neutral-300 mb-4">
              <p className="mb-2">Key features include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dynamic file and folder navigation with real-time retrieval from the WordPress JSON API.</li>
                <li>Integrated search across all files and folders, with instant filtering and one-click access to results.</li>
                <li>Custom UI components such as a fixed home screen grid, footer navigation with quick actions, and slide-up contact/search panels for streamlined access.</li>
                <li>Access controls that differentiate between public and authenticated user content.</li>
                <li>Lightweight frontend architecture using HTML, CSS, and JavaScript to maximize reliability and performance on shared hosting environments.</li>
              </ul>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
              The app is deployed under the organization's WordPress site, ensuring centralized content management while 
              maintaining a standalone, app-like interface for end users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
