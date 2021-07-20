import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar login />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
