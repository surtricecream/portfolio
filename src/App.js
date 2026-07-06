import './App.css';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Section from './components/Section';
import ProjectList from './components/ProjectList';
import Education from './components/Education';
import Footer from './components/Footer';
import FoldContainer from './components/FoldContainer';


function App() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="language-switch">
        <button
          type="button"
          className={currentLanguage === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={currentLanguage === 'pt' ? 'active' : ''}
          onClick={() => changeLanguage('pt')}
        >
          PT
        </button>
      </div>

      <FoldContainer>
        <div className="App">
          <Header />
          <Section title={t('sections.projects')}>
            <ProjectList />
          </Section>
          <Section title={t('sections.education')}>
            <Education />
          </Section>
          <Footer />
        </div>
      </FoldContainer>
    </>
  );
}

export default App;