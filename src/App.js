  import "./App.css";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Routes, Route } from "react-router-dom";
  import { NavBar } from "./Components/NavBar";
  import { Banner } from "./Components/Banner";
  import { Skills } from "./Components/Skills";
  import { Projects } from "./Components/Projects";
  import { Contact } from "./Components/Contact";
  import { Footer } from "./Components/Footer";
  import Login from "./Components/Login";



  function App() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<>
            <Banner />
            <Skills />
            <Projects />
            <Contact />
          </>} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    );
  }

  export default App;
