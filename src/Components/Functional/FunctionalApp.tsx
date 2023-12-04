import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

export type TFish = {
  name: string;
  url: string;
};

const initialFishes: TFish[] = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

const answersLeft = initialFishes.map((fish) => fish.name);

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const index = correctCount + incorrectCount;
  const answersLeftArr = answersLeft.slice(index);
  const nextFishToName = initialFishes[index];

  return (
    <>
      {answersLeftArr.length > 0 ? (
        <>
          <FunctionalScoreBoard
            answersLeft={answersLeftArr}
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
          <FunctionalGameBoard
            handleCount={(guess: string) => {
              if (guess === nextFishToName.name) {
                setCorrectCount(correctCount + 1);
              } else {
                setIncorrectCount(incorrectCount + 1);
              }
            }}
            nextFishToName={nextFishToName}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          incorrectCount={incorrectCount}
        />
      )}
    </>
  );
}
