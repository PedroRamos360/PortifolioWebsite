import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Portfolio from "./components/Portfolio/index";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
      </div>
    </Router>
  );
}

export default App;
