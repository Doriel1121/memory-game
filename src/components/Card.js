import React, { PureComponent } from "react";

class Card extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tempCard: undefined,
      id: undefined,
    };
  }

  componentDidMount = () => {
    console.log(this.state.tempCard);
  };

  clickToFlip = () => {
    document.getElementById(this.props.location).style.transform =
      "rotateY(180deg)";
    this.props.returnedCard(this.props.card.name, this.props.location);
  };

  render() {
    console.log(this.state.tempCard);
    return (
      <div
        id={`${this.props.location}`}
        onClick={() => this.clickToFlip()}
        className="card"
      >
        <div className="card-face frontCard">
          <img
            className="image"
            alt="pic"
            src={`./png/${this.props.card.name}.png`}
          />
        </div>
        <div className="card-face backCard">
          {this.props.location % 2 === 0 ? "Try me!" : "Or me"}
        </div>
      </div>
    );
  }
}
export default Card;
