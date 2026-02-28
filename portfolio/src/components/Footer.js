import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Happy to chat, reach out!</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/surtricecream" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/francisco-sim%C3%B5es-570913380/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
