type ProjectCardProps = {
  href: string;
  image: string;
  title: string;
  alt?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  image,
  title,
  alt,
}) => {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className="relative w-84 h-60 rounded-lg overflow-hidden border-4"
          style={{ borderColor: "white" }}
        >
          <img src={image} alt={alt || title} className="w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
        </div>
        <p className="text-center mt-2 font-semibold group-hover:text-gray-500 transition-colors duration-300">
          {title}
        </p>
      </a>
    </div>
  );
};
