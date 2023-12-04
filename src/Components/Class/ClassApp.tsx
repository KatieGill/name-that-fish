import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

export type TFish = {
  name: string;
  url: string;
};

type TClassAppState = {
  incorrectCount: number;
  correctCount: number;
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

export class ClassApp extends Component<TClassAppState> {
  state: TClassAppState = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    const { incorrectCount, correctCount } = this.state;
    const index = correctCount + incorrectCount;
    const answersLeftArr = answersLeft.slice(index);
    const nextFishToName = initialFishes[index];

    return (
      <>
        {answersLeftArr.length > 0 ? (
          <>
            <ClassScoreBoard
              answersLeft={answersLeftArr}
              correctCount={correctCount}
              incorrectCount={incorrectCount}
            />
            <ClassGameBoard
              /*setCorrectCount={() =>
                this.setState({ correctCount: correctCount + 1 })
              }
              setIncorrectCount={() =>
                this.setState({ incorrectCount: incorrectCount + 1 })
              }*/
              handleCount={(guess: string) => {
                if (guess === nextFishToName.name) {
                  this.setState({ correctCount: correctCount + 1 });
                } else {
                  this.setState({ incorrectCount: incorrectCount + 1 });
                }
              }}
              nextFishToName={nextFishToName}
            />
          </>
        ) : (
          <ClassFinalScore
            correctCount={correctCount}
            incorrectCount={incorrectCount}
          />
        )}
      </>
    );
  }
}
