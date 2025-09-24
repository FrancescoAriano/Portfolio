import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";

export const ProjectSection = () => {
  return (
    <Section id="projects">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        &lt;Featured <span className="text-primary">projects /&gt;</span>
      </h2>
      <p className="mt-4 font-medium text-foreground/75 max-w-2xl mx-auto text-center">
        Questi sono alcuni dei miei progetti più recenti. Ognuno di questi è
        stato oggetto di uno studio approfondito su tutti i dettagli, cercando
        di ottimizzare prestazioni e UX
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/FrancescoAriano"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 flex items-center justify-center button px-6 bg-primary text-primary-foreground font-bold"
        >
          &lt;Check Github /&gt;
        </a>
      </div>
    </Section>
  );
};
