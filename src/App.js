import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Components/NotFound";
import AboutUs from "./Pages/About";
import "./App.css";
import Gallery from "./Pages/Gallery";
import Terms from "./Pages/Terms";
import Register from "./Pages/Register";
import { ContestantContextProvider } from "./services/contestants-service";
import { Profile } from "./Pages/profile";
import Leaderboard from "./Pages/Leaderboard";

function App() {
  return (
    <ContestantContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>

          <Route exact path="/about" component={AboutUs}>
            <AboutUs />
          </Route>

          <Route exact path="/gallery" component={Gallery}>
            <Gallery />
          </Route>

          {/* <Route exact path="/leaderboard" component={Leaderboard}>
            <Leaderboard />
          </Route> */}

          <Route exact path="/terms" component={Terms}>
            <Terms />
          </Route>

          <Route exact path="/register" component={Register}>
            <Register />
          </Route>

          <Route exact path="/profile/:id" component={Profile}>
            <Profile />
          </Route>

          <Route component={NotFound}></Route>
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    </ContestantContextProvider>
  );
}

export default App;
