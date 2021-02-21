import React, { PureComponent } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LevelPage from "./components/LevelPage";
import GamePage from "./components/GamePage";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LevelPage}></Route>

            <Route exact path="/game" component={GamePage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
