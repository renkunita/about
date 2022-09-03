import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";


function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/about">
        <Home />
      </Route>
      <Route path="/about/page1">
        <Blog />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
