import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "./projectData";
import TodoApp from "./apps/TodoApp/TodoApp";
import MineFleetAI from "./apps/MineFleetAI/MineFeetAl";

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };


  return (
    <section id="projects">
      <h2>Personal Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            onDemoClick={() =>
              openProject(project)
            }
          />
        ))}
      </div>

      {selectedProject && (
       <ProjectModal onClose={closeProject}>
  {selectedProject?.id === "todo" && (
    <TodoApp />
  )}

  {selectedProject?.id === "minefleet" && (
    <MineFleetAI />
  )}
</ProjectModal>
      )}
    </section>
  );
};

export default Projects;