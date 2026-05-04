import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
// import VideoShowcase from './components/VideoShowcase'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="dark transition-colors duration-500">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        {/* <VideoShowcase/> */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
