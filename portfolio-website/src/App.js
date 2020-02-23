import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Portfolio from "./components/Portfolio/index";
import Certificates from "./components/Certificates/index";
import B1Certificate from "./components/Certificates/B1Certificate/index";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Certificates" component={Certificates} />
        <Route path="/Certificates/B1Certificate" component={B1Certificate}/>
      </div>
    </Router>
  );
}

export default App;
