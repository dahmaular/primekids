import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Components/NotFound";
import AboutUs from "./Pages/About";
import "./App.css";
import Gallery from "./Pages/Gallery";
import Terms from "./Pages/Terms";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      <Switch>
        {/* <Redirect from='/CreatePost' to='/Register' /> */}
        <Route exact path="/" component={Home}>
          <Home />
        </Route>

        <Route exact path="/about" component={AboutUs}>
          <AboutUs />
        </Route>

        <Route exact path='/gallery' component={Gallery}>
            <Gallery />
          </Route>

        <Route exact path='/terms' component={Terms}>
            <Terms />
          </Route>

        <Route exact path='/register' component={Register}>
            <Register />
          </Route>

        <Route component={NotFound}></Route>
      </Switch>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
