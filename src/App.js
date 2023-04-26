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
          <Routes>
            <Route
              exact path="/home"
            >
            </Route>
            <Route
              exact path="/About"
              element={<About/>}
            >
            </Route>
            <Route
              exact path="/Projects"
              element={<Projects/>}
            >
            </Route>
          </Routes>

          <Footer />
        </Router>
      </>
    )
  }
}

export default App;