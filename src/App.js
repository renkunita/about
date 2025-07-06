import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blog1 from "./pages/Blog/Blog1";
import BlogPost from "./pages/Blog/BlogPost";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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






