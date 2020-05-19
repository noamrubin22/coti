import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <h1>COTI</h1>
      <h4>Learn a new language, differently</h4>
      <div className="buttons">
        <Button className="btn_landingpage">Young learner</Button>
        <Button className="btn_landingpage">Elder</Button>
        {/* <Link to="/younglearner">Young learner</Link>
      <Link to="/elder">Elder</Link> */}
      </div>
    </div>
  );
}

export default App;
