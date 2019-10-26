import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import Album from "./components/album/Album";

import "./App.css";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/album/:id" component={Album} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;