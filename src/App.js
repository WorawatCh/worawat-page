import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavComponent } from "./components/NavComponent";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Info } from "./components/Info";

function App() {
  return (
   <div className="App">
     <NavComponent/>
     <Banner/>
     <Info/>
     <Skills/>
     <Experience/>
     <Projects/>
     <Contact/>
     <Footer/>
     {/* <Experience/> */}
   </div>
  );
}

export default App;
