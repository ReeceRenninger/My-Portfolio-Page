import React from "react";
import Header from "./Header.jsx";
import Footer from './Footer.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';

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
          <h1>Name and title Information to always be present on page</h1>
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