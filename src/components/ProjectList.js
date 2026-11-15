//imports data from projects.js and turns it into HTML
import { useTranslation } from "react-i18next"
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function ProjectList() {
  const { t } = useTranslation();

  return (
    <div>
      {projects.map((project, index) => (
        <p key={index}>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
          {project.url && project.live && " "}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.name}`}
              title="Live demo"
            >
              <span style={{ fontSize: "0.8em" }}>🔗</span>
            </a>
          )}
          {" "}
          <b>{project.name}</b>
          {" — "}
          {t(project.descriptionKey)}
        </p>
      ))}
    </div>
  );
}

export default ProjectList;