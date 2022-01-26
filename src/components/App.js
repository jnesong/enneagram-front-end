import { Switch, Route } from "react-router";
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Home from "./Home";
import Info from "./Info";
import Journal from "./user/Journal";

function App() {

  return (
    <div>
      <Switch>

        <Route path="/journal">
          <Journal />
        </Route>

        <Route path="/:enneagramNumber">
          <Info
          />
        </Route>


        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <h1> 404 not found 🥲 </h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

