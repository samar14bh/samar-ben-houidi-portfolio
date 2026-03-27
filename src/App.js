import Cursor from './components/Cursor';
import ScrollIndicator from './components/ScrollIndicator';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Activities from './components/Activities';
import Contact from './components/Contact';
import { data } from './data';

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollIndicator />
      <Navbar />
      <Hero data={data} />
      <Stats stats={data.stats} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Education education={data.education} />
      <Activities activities={data.activities} certifications={data.certifications} />
      <Contact data={data} />
    </>
  );
}
