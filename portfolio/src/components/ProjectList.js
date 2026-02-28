//imports data from projects.js and turns it into HTML
import projects from "../data/projects";

function ProjectList() {
  return (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
          {" — "}
          {project.description}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
