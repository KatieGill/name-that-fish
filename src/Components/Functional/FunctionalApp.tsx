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

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const index = correctCount + incorrectCount;
  const answersLeftArr = answersLeft.slice(index);
  const nextFishToNameIndex = initialFishes
    .map((fish) => fish.name)
    .indexOf(answersLeftArr[0]);
  const nextFishToName = initialFishes[nextFishToNameIndex];

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
            setCorrectCount={() => setCorrectCount(correctCount + 1)}
            setIncorrectCount={() => setIncorrectCount(incorrectCount + 1)}
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
