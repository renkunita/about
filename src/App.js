import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Blog1 from "./Blog1";


function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/about">
        <Home />
      </Route>
      <Route exact path="/about/blog">
        <Blog />
      </Route>
      <Route path="/about/blog/1">
        <Blog1 />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
