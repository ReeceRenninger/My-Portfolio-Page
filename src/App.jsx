import React from "react";
import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Home from './pages/Home.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const App = () => {

    return (
      <>
      <Router>
          <Header />
          <Home />
          <Routes>
            <Route
              exact path="/about"
              element={<About/>}
            />
            <Route
              exact path="/projects"
              element={<Projects/>}
            />
          </Routes>
        <Footer/>
      </Router>
      </>
    )
  
}

export default App;