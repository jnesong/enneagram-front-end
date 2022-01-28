import { Switch, Route } from "react-router";
// import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Home from "./Home";
import Info from "./Info";
import Journal from "./user/Journal";
import EditEntry from "./user/EditEntry";

let currentUser={}

function holdUser(user){
  currentUser = user
}

console.log(currentUser)

function App() {

  return (
    <div>
      <Switch>

        <Route path="/journal">
          <Journal 
          currentUser={currentUser}
          />
        </Route>

        <Route path="/editor">
          <EditEntry
          currentUser={currentUser}
          />
        </Route>

        <Route path="/:enneagramNumber">
          <Info
          />
        </Route>

        <Route exact path="/">
          <Home 
          holdUser={holdUser}
          />
        </Route>

        <Route path="*">
          <h1> 404 not found 🥲 </h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

