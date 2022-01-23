import { Switch, Route } from "react-router";
import { useParams } from 'react-router-dom';
import Home from "./Home";
import Info from "./Info";

function App() {
  const { enneagramNumber } = useParams();


  return (
    <div>
      <Switch>

        <Route path="/:enneagramNumber">
          <Info/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path = "*">
          <h1> 404 not found 🥲 </h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;

