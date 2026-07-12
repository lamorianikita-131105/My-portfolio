import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import UpcomingProject from "./sections/UpcomingProject/UpcomingProject";
import Journey from "./sections/Journey/Journey";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div className="site-wrapper">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <UpcomingProject />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;