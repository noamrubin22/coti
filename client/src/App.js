import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Setup from "./components/registration/Setup/Setup";
import Profile from "./components/registration/Profile/Profile";
import Register from "./components/registration/Register/Register";
import Loading from "./components/registration/Loading/Loading";
import UserForm from "./components/StepForm/UserForm";

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
          <Route exact path="/" component={Home} />
          <Route exact path="/setup" component={UserForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
