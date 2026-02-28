//composer
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ProjectList from './components/ProjectList';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section title="Projects">
        <ProjectList />
      </Section>
      <Section title="Education">
        <Education />
      </Section>
      <Footer />
    </div>
  );
}

export default App;
