import { Component } from "react";
import "./styles/game-board.css";
import { TFish } from "./ClassApp";

type TClassGameBoardProps = {
  handleCount: (guess: string) => void;
  nextFishToName: TFish;
};

type TClassGameBoardState = {
  currentFishGuessInput: string;
};

export class ClassGameBoard extends Component<
  TClassGameBoardProps,
  TClassGameBoardState
> {
  state: TClassGameBoardState = {
    currentFishGuessInput: "",
  };
  render() {
    const { currentFishGuessInput } = this.state;
    const { handleCount, nextFishToName } = this.props;
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
            handleCount(currentFishGuessInput);
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}
