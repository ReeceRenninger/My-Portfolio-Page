import React from "react";
import Header from './Header';
import Footer from './Footer.js';
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

            >
            </Route>
            <Route
              exact path="/Projects"

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