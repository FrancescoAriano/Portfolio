import { ScrollableTags } from "./ScrollableTags";
import { GitHubIcon } from "../icons/GitHubIcon";

export const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 brightness-90 group-hover:brightness-100"
        />
      </div>
      <div className="text-left flex flex-col py-6">
        <div className="flex-grow flex flex-col px-6">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold mb-2 w-75">{project.title}</h3>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visualizza ${project.title} su GitHub`}
            >
              <GitHubIcon
                className="text-foreground/80 hover:text-primary hover:scale-110 transition-all duration-300 mb-2"
                size={20}
              />
            </a>
          </div>
          <p className="text-sm font-medium mb-4 text-foreground/80 flex-grow">
            {project.description}
          </p>
        </div>
        <ScrollableTags tags={project.tags} />
      </div>
    </div>
  );
};
