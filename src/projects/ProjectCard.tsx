interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  onDemoClick: () => void;
}

const ProjectCard = ({
  title,
  description,
  tech,
  onDemoClick,
}: ProjectCardProps) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <span className="project-tech">
        {tech}
      </span>

      <button
        className="demo-btn"
        onClick={onDemoClick}
      >
        Demo
      </button>
    </div>
  );
};

export default ProjectCard;