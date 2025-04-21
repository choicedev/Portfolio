import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/experience/ExperienceTimeline';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Stats from './components/stats/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { experiences, projects, skillGroups } from './data';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <About />
      <ExperienceTimeline experiences={experiences} />
      <Projects projects={projects} />
      <Skills skillGroups={skillGroups} />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;