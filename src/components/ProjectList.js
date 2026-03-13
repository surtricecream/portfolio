//imports data from projects.js and turns it into HTML
import projects from "../data/projects";

function ProjectList() {
  return (
    <div>
      {projects.map((project, index) => (
        <p key={index}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <a style={{ textDecoration: "underline" }}>{project.name}</a>
          </a>
          {" — "}
          {project.description}
        </p>
      ))}
    </div>
  );
}

export default ProjectList;
