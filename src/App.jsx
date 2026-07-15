import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FooterNav from "./components/Footer/FooterNav";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";


const App = () => {

  return (
    <>
      <Navbar/>
      <img id="home" style={{ width : "100%" }} src="/banner.png" alt="banner"/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <FooterNav/>
      <section style={{ textAlign : "center" , color : "gray" , padding : "10px" , fontSize : "13px" }}>&copy; 2025 Amal George. All rights reserved.</section>
    </>
  )
}

export default App;
