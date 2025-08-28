interface WebsiteCardProps {
  name: string;
// WebsiteCard component
// Displays a single website in the grid with thumbnail, title, and description
// Props: title, description, image, link
  url: string;
  thumbnail: string;
}

export default function WebsiteCard({ name, url, thumbnail }: WebsiteCardProps) {
  return (
    <a
      href={url}
      target={url.startsWith("http") ? "_blank" : undefined}
      rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-2xl border border-blue-400/10 bg-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-blue-400/20 dark:bg-neutral-900 overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center overflow-hidden">
        <img 
          src={thumbnail}
          alt={`${name} website screenshot`}
          className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback icon when image fails to load */}
        <div className="text-neutral-500 dark:text-neutral-400">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="bg-white/90 dark:bg-neutral-900/90 rounded-lg px-3 py-2">
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Visit Site</span>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{name}</h3>
      </div>
    </a>
  );
}
