import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Blog, Blog1, BlogPost } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
    <body>
    <BrowserRouter>
    <Header/>
    <main>
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
        <Route path="/about/blog/:id">
          <BlogPost />
        </Route>
      </Switch>
    </main>
    <Footer/>
    </BrowserRouter>
    </body>
  </>
  );
}

export default App;






