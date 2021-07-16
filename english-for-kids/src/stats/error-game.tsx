import React from 'react';
import GameComponent from '../game/game-comp';
import StartComp from '../start/start-component';
import { ScoreStateT } from '../types/types';

const ErrorComponent: React.FC<{ mainFlag: boolean }> = ({ mainFlag }) => {
  const scoreStateStr: string = localStorage.getItem('scoreState')!;
  const words: Array<ScoreStateT> = Object.entries(JSON.parse(scoreStateStr));
  const wrongWords: Array<Array<string>> = [];

  function compare(a: ScoreStateT, b: ScoreStateT) {
    if (a[1][2].whong > b[1][2].whong) {
      return -1;
    }
    if (a[1][2].whong < b[1][2].whong) {
      return 1;
    }
    return 0;
  }
  words.sort(compare);
  if (words.length > 8) {
    words.length = 8;
  }

  words.map((word: any) => {
    if ((Object.entries(word)[1][1] as any)[2].whong !== 0) {
      wrongWords.push([word[0], word[1][0]]);
    }
  });
  return (
    <div>
      {mainFlag ? <GameComponent wrongWords={wrongWords} /> : <StartComp wrongWords={wrongWords} />}
    </div>
  );
};
export default ErrorComponent;
