//imports data from projects.js and turns it into HTML
import { useTranslation } from "react-i18next"
import projects from "../data/projects";

function ProjectList() {
  const { t } = useTranslation();

  return (
    <div>
      {projects.map((project, index) => (
        <p key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name} <span style={{ fontSize: '0.8em' }}>🔗</span>
          </a>
          {" — "}
          {t(project.descriptionKey)}
        </p>
      ))}
    </div>
  );
}

export default ProjectList;