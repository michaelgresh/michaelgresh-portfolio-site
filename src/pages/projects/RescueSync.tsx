// src/pages/projects/RescueSync.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function RescueSync() {
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
            <span>RescueSync - EMS Scheduling & Analytics Suite</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              RescueSync
              <span className="inline-block ml-3 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
                In Progress
              </span>
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
              RescueSync is an advanced scheduling and analytics platform specifically designed for 
              Emergency Medical Services operations. This comprehensive suite streamlines workforce 
              management, optimizes resource allocation, and provides data-driven insights to improve 
              operational efficiency and patient care outcomes.
            </p>
            
            {/* Key Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  Advanced scheduling algorithms for optimal crew deployment and coverage
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  Real-time analytics dashboard with key performance indicators and trends
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  Automated compliance tracking for certifications, training, and regulatory requirements
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  Resource optimization tools for vehicle maintenance and equipment management
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></div>
                  Integration with existing EMS dispatch systems and electronic health records
                </li>
              </ul>
            </div>
          </div>

          {/* Project Stats */}
          <div className="space-y-6">
            <div className="bg-neutral-900 text-white rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">React</div>
                  <div className="text-sm text-neutral-300">Full Stack</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">Analytics</div>
                  <div className="text-sm text-neutral-300">Data Driven</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'D3.js', 'Charts.js', 'API Integration'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-200 dark:bg-purple-800 text-purple-900 dark:text-purple-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 bg-neutral-300 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 py-3 px-6 rounded-lg font-semibold text-center">
                Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Development Progress */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Development Progress</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Core Scheduling Engine</h3>
                <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Completed</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-full"></div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">Analytics Dashboard</h3>
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">In Progress</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">System Integrations</h3>
                <span className="text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Planning</span>
              </div>
              <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full w-1/4"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Screenshots */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Development Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/screenshots/rescue-sync-scheduling.jpg",
                alt: "RescueSync Scheduling Interface",
                title: "Scheduling Interface",
                description: "Advanced scheduling with drag-and-drop functionality and constraint optimization"
              },
              {
                src: "/screenshots/rescue-sync-analytics.jpg", 
                alt: "RescueSync Analytics Dashboard",
                title: "Analytics Dashboard",
                description: "Real-time metrics and performance indicators for operational insights"
              },
              {
                src: "/screenshots/rescue-sync-crew.jpg",
                alt: "RescueSync Crew Management", 
                title: "Crew Management",
                description: "Comprehensive crew tracking with certifications and availability management"
              },
              {
                src: "/screenshots/rescue-sync-settings.jpg",
                alt: "RescueSync System Settings",
                title: "System Settings", 
                description: "Configurable system parameters and integration management"
              }
            ].map((screenshot, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 relative">
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
                  <div className="flex items-center justify-center h-full text-purple-700 dark:text-purple-200">
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
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">Technical Approach</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              RescueSync is being developed as a full-stack solution with a React-based frontend and Node.js backend, 
              utilizing PostgreSQL for robust data management and real-time analytics processing. The architecture 
              prioritizes scalability and performance to handle the complex scheduling algorithms required for 
              multi-unit EMS operations.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              The scheduling engine implements advanced constraint-solving algorithms to optimize crew assignments 
              while considering factors such as certification levels, overtime regulations, coverage requirements, 
              and staff preferences. The analytics module provides real-time insights into operational efficiency, 
              response times, and resource utilization.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Currently in active development, RescueSync represents the next evolution in EMS management technology, 
              designed to reduce administrative overhead while improving service delivery and operational outcomes 
              for emergency medical service providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
