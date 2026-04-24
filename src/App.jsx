import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import BackToTop  from './components/BackToTop';
import About      from './sections/About';
import Education  from './sections/Education';
import Experience from './sections/Experience';
import Projects   from './sections/Projects';
import Contact    from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
