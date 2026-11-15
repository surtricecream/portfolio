import { useTranslation } from 'react-i18next';
import experiences from "../data/experiences"

function ExperienceList() {
    const { t } = useTranslation();

    return (
    <div>
      {experiences.map((experience, index) => (
        <p key={index}>
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${experience.name} website`}
            title="Website"
          >
            <span style={{ fontSize: "0.8em" }}>🔗</span>
          </a>
          {" "}
          <b>{experience.name}</b>
          {" — "}
          {t(experience.descriptionKey)}
        </p>
      ))}
    </div>
  );  
}

export default ExperienceList