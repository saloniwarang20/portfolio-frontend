import { ExternalLink, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:border-purple-400/40 transition">

      {/* Image */}

      <div className="h-44 overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

      </div>

      {/* Content */}

      <div className="p-4">

        <div className="flex items-center justify-between">

          <h3 className="font-semibold">
            {project.title}
          </h3>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={15} />
          </a>

        </div>

        <p className="text-sm text-gray-400 mt-3 leading-6">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-4">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
            >
              {technology}
            </span>
          ))}

        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-purple-400"
        >
          View Project
          <ArrowUpRight size={15} />
        </a>

      </div>

    </div>
  );
};

export default ProjectCard;