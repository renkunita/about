import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/about">
        <Home />
      </Route>
      <Route path="/about/page1">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
