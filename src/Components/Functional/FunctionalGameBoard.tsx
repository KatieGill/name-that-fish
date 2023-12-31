import "./styles/game-board.css";
import { useState } from "react";
import { TFish } from "./FunctionalApp";

export function FunctionalGameBoard({
  handleCount,
  nextFishToName,
}: {
  handleCount: (guess: string) => void;
  nextFishToName: TFish;
}) {
  const [currentFishGuessInput, setCurrentFishGuessInput] =
    useState<string>("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentFishGuessInput("");
          handleCount(currentFishGuessInput);
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={currentFishGuessInput}
          onChange={(e) => setCurrentFishGuessInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
