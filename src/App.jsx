import styles from "./App.module.css";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import "./index.css";
function App() {

  return (
    <>
    <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
    </div>
    
    </>
  )
}

export default App
