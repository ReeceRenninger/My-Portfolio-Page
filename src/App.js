import React from "react";
import Header from "./Header.js";
import Footer from './Footer.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


class App extends React.Component {
  render() {
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
}

export default App;