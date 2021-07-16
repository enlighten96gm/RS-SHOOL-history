import React, { useState } from 'react';
import css from './start.module.css';
import '../App.css';
import { cardsDataT } from '../types/types';

type PropsT = {
  item?: cardsDataT;
  rightWord: Array<string>;
  counter: number;
  seCounter: (counter: number) => void;
  started: boolean;
  stars: any;
  setStars: any;
  setErrorCount: (errorCount: number) => void;
  errorCount: number;
};
const SingleStartComponent: React.FC<PropsT> = ({
  item,
  rightWord,
  counter,
  seCounter,
  started,
  stars,
  setStars,
  setErrorCount,
  errorCount,
}) => {
  const [noRepeat, setNoRepeat] = useState(true);
  const [newStyle, setNewStyle] = useState({
    display: 'block',
  });
  const wordsArr: any = item![1];
  const soundArr: Array<string> = item![0];

  if (started && wordsArr[2] === rightWord[0] && noRepeat) {
    const inerpritation = new Audio(rightWord[counter]);
    inerpritation.play();
    setNoRepeat(false);
  }
  const chechIfRight = () => {
    if (wordsArr[2] === rightWord[counter]) {
      seCounter((counter += 1));
      setNewStyle({
        display: 'none',
      });
      setTimeout(() => {
        const inerpritation = new Audio(rightWord[counter]);
        inerpritation.play();
      }, 1000);
      // change localData
      const localData = JSON.parse(localStorage.getItem('scoreState') as any);
      for (const key of Object.entries(localData)) {
        if (key[0] === wordsArr[0]) {
          const changeCount: any = key[1];
          changeCount[2].clicks += 1;
          changeCount[2].right += 1;
          localStorage.setItem('scoreState', JSON.stringify(localData));
        }
      }
      // + clicks + right
      const music = new Audio('./souns/correct.mp3');
      music.play();
      setStars([...stars, 1]);
    } else {
      setErrorCount((errorCount += 1));
      // change localData
      const localData = JSON.parse(localStorage.getItem('scoreState') as any);
      for (const key of Object.entries(localData)) {
        if (key[0] === wordsArr[0]) {
          const changeCount: any = key[1];
          changeCount[2].whong += 1;
          changeCount[2].clicks += 1;
          localStorage.setItem('scoreState', JSON.stringify(localData));
        }
      }
      // + whong
      const music = new Audio('./souns/error.mp3');
      music.play();
      setStars([...stars, 0]);
    }
  };
  return (
    <div
      style={newStyle}
      onMouseDown={started === true ? chechIfRight : undefined}
      className="relative"
    >
      <div className={css.single}>
        <img className={css.image} src={`${soundArr}`} alt="#" />
      </div>
    </div>
  );
};
export default SingleStartComponent;
