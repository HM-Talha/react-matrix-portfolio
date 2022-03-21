import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Services from "./pages/ServicesPage/Services"
import WebDesign from "./pages/ServicesLinks/WebDesign/WebDesign";
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import WebDeveloper from "./pages/ServicesLinks/WebDevelopment/WebDeveloper";
import GraphicDesign from "./pages/ServicesLinks/GraphicDesign/GraphicDesign";
import About from "./pages/More/About/About";
import Team from "./pages/More/Team/Team";
import Faq from "./pages/More/FAQ/Faq";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <> 
     <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element ={  <Home />}/>
        <Route path="/contact"  element={ <Contact />} />
        <Route path="/webdesign"  element={ <WebDesign />} />
        <Route path="/webdeveloper"  element={ <WebDeveloper />} />
        <Route path="/graphicdesign"  element={ <GraphicDesign />} />
        <Route path="/about"  element={ <About />} />
        <Route path="/team"  element={ <Team />} />
        <Route path="/faq"  element={ <Faq />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
