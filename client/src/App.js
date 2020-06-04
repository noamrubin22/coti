import React, { useState } from "react";
// import "./App.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Setup from "./components/registration/Setup/Setup";
import Profile from "./components/registration/Profile/Profile";
import Register from "./components/registration/Register/Register";
import Loading from "./components/registration/Loading/Loading";

function App() {
  const [user, setUser] = useState("");

  const chooseYoungster = () => {
    console.log("clicked youngster");
    setUser("youngster");
  };

  const chooseElder = () => {
    console.log("clicked elder");
    setUser("elder");
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                chooseElder={chooseElder}
                chooseYoungster={chooseYoungster}
                user={user}
              />
            )}
          />
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/setup/1" component={Profile} />
          <Route exact path="/setup/2" component={Register} />
          <Route exact path="/setup/3" component={Loading} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
