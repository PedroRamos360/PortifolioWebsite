import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Portfolio from "./pages/Portfolio/index";
import Certificates from "./pages/Certificates/index";
import B1Certificate from "./pages/B1Certificate/index";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route exact path="/Certificates" component={Certificates} />
        <Route path="/Certificates/B1Certificate" component={B1Certificate}/>
      </div>
    </Router>
  );
}

export default App;
