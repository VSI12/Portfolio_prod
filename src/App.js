import "./App.css"
import Header from "./components/header/header"
import Home from "./components/Home/Home" 
import About from "./components/About/About"
import Skills from "./components/skills/Skills"
import Services from "./components/Services/Services" 
import Qualification from "./components/Qualifications/Qualification"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"   
import Scrollup from "./components/Scrollup/Scrollup"
import Work from "./components/work/work" 
function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work />
        <Contact />
        
      </main>

      <Footer/>
      <Scrollup/>
    </>
  )
}

export default App
