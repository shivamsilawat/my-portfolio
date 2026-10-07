import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ProblemSolving from "./components/ProblemSolving";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
        <ProblemSolving />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    
    </>
  );
}

export default App;