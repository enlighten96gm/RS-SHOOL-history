import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SetsEntriesT } from '../types/types';
import GameCycle from './game-cycle';
import SingleStartComponent from './single-start-comp';
import css from './start.module.css';

type PropsT = {
  item?: SetsEntriesT;
  wrongWords?: Array<Array<string>>;
};

const StartComp: React.FC<PropsT> = ({ item, wrongWords }) => {
  if (wrongWords) {
    const singleCompData = [];
    for (let i = 0; i < wrongWords.length; i++) {
      singleCompData.push([
        `./images/${wrongWords[i][0]}.jpg`,
        [wrongWords[i][0], wrongWords[i][1], `./souns/${wrongWords[i][0]}.mp3`],
      ]);
    }
    const iteration = singleCompData.length + 1;
    let sobachijNos = {};
    for (let i = 1; i < iteration; i++) {
      const key = singleCompData[i - 1][0] as string;
      const value = singleCompData[i - 1][1] as string;
      sobachijNos = { ...sobachijNos, [key]: value };
    }
    item = ['Action Z', { './huimage': sobachijNos } as any];
  }

  const history = useHistory();
  const [started, setStarted] = useState(false);
  const [rightWord, setRightWord] = useState([] as Array<string>);
  const [stars, setStars] = useState([]);
  const [counter, seCounter] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const renderArr = Object.values(item![1])[0];
  const countToWin = [];
  const gameArrayToCheck = [];
  const singleCompData: any = [];
  const soundArray: Array<string> = [];
  const switchOne = 'START GAME';
  const switchTwo = 'REPEAT';
  const creatStars = stars.map((item) => {
    if (item === 1) {
      return <img className={css.star} src="./images/star-win.svg" alt="#" />;
    }
    return <img className={css.star} src="./images/star.svg" alt="#" />;
  });
  for (const key of Object.entries(renderArr)) {
    singleCompData.push(key);
  }
  for (const key of Object.values(renderArr)) {
    gameArrayToCheck.push(key);
  }
  for (let i = 0; i < gameArrayToCheck.length; i += 1) {
    const matrix: Array<string> = gameArrayToCheck[i] as Array<string>;
    for (let j = 0; j < matrix.length; j += 1) {
      if (j % 3 === 2) {
        soundArray.push(matrix[j]);
      }
    }
  }
  const singleSComp = singleCompData.map((item: any) => {
    console.log(item);

    countToWin.push(item);
    return (
      <SingleStartComponent
        item={item}
        rightWord={rightWord}
        counter={counter}
        seCounter={seCounter}
        started={started}
        stars={stars}
        setStars={setStars}
        setErrorCount={setErrorCount}
        errorCount={errorCount}
      />
    );
  });
  const startGameHeandler = () => {
    if (!started) {
      GameCycle(soundArray).then((item: Array<string>): void => setRightWord(item));
      setStarted(true);
    } else {
      const inerpritation = new Audio(rightWord[counter]);
      inerpritation.play();
    }
  };
  console.log(singleCompData);

  if (counter === countToWin.length) {
    if (errorCount === 0) {
      const music1 = new Audio('./souns/success.mp3');
      music1.play();
    } else {
      const music2 = new Audio('./souns/failure.mp3');
      music2.play();
    }
    setTimeout(() => {
      history.push('/Sets');
    }, 2500);
  }

  return (
    <div>
      {counter === countToWin.length ? (
        <div>
          {errorCount === 0 ? (
            <div>
              <div className={css.winPage}>YOU WIN</div>
              <img className={css.success} src="./images/success.jpg" alt="#" />
            </div>
          ) : (
            <div>
              <div className={css.winPage}>Error: {errorCount}</div>
              <img className={css.success} src="./images/failure.jpg" alt="#" />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div>{creatStars}</div>
          <div className={css.sets}>
            {singleSComp}
            <div onClick={startGameHeandler} className={css.game__btn}>
              <div className={css.text__inside}>{started === false ? switchOne : switchTwo}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StartComp;
