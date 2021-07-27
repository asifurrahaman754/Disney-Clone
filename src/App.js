import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/details/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
