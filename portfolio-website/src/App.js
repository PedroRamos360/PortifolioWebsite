import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Projects from "./components/Projects/index";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
      </div>
    </Router>
  );
}

export default App;
