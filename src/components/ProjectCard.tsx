import { Link } from "react-router-dom";

interface ProjectCardProps {
  t: string;
  d: string;
  href: string;
  color: string;
  thumbnail: string;
}

export default function ProjectCard({ t, d, href, color, thumbnail }: ProjectCardProps) {
// ProjectCard component
// Displays a single project in the grid with thumbnail, title, and description
// Props: title, description, image, link
  return (
    <Link
      to={href}
      className="block rounded-2xl border border-blue-400/10 bg-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-blue-400/20 dark:bg-neutral-900 overflow-hidden"
    >
      {/* Thumbnail */}
      <div className={`relative h-48 bg-gradient-to-br ${
        color === 'blue' ? 'from-blue-500 via-blue-600 to-blue-700' :
        color === 'green' ? 'from-green-500 via-green-600 to-green-700' :
        'from-purple-500 via-purple-600 to-purple-700'
      } flex items-center justify-center overflow-hidden`}>
        <img 
          src={thumbnail}
          alt={`${t} project thumbnail`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">{t}</h3>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{d}</p>
        <span className="inline-block mt-3 text-xs text-blue-600 dark:text-blue-400 font-semibold">View Details</span>
      </div>
    </Link>
  );
}
