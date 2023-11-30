import { Component } from "react";
import "./styles/game-board.css";
import { TFish } from "./ClassApp";

type TClassGameBoardProps = {
  setCorrectCount: () => void;
  setIncorrectCount: () => void;
  nextFishToName: TFish;
};

export class ClassGameBoard extends Component<TClassGameBoardProps> {
  state = {
    currentFishGuessInput: "",
  };
  render() {
    const { currentFishGuessInput } = this.state;
    const { setCorrectCount, setIncorrectCount, nextFishToName } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            this.setState({ currentFishGuessInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={currentFishGuessInput}
            onChange={(e) =>
              this.setState({ currentFishGuessInput: e.target.value })
            }
          />
          <input
            type="submit"
            onClick={() => {
              currentFishGuessInput === nextFishToName.name
                ? setCorrectCount()
                : setIncorrectCount();
            }}
          />
        </form>
      </div>
    );
  }
}
