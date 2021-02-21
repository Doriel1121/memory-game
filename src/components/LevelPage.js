import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class LevelPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = () => {};

  render() {
    return (
      <div className="mainDiv">
        <div className="difficulty">
          <h1 style={{ color: "#3bd6a4", fontWeight: "900" }}>Memory Game</h1>

          <h2 style={{ color: "#3bd6a4" }}>Difficulty</h2>
          <Link
            to={{
              pathname: "/game",
              state: {
                amount: 5,
              },
            }}
          >
            <button>EASY</button>
          </Link>
          <Link
            to={{
              pathname: "/game",
              state: {
                amount: 8,
              },
            }}
          >
            <button>MEDIUM</button>
          </Link>
          <Link
            to={{
              pathname: "/game",
              state: {
                amount: 11,
              },
            }}
          >
            <button>HARD</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LevelPage;
