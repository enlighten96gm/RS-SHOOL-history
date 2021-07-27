import React from 'react';
import { SetsEntriesT } from '../types/types';
import css from './game-comp.module.css';
import SingleGameComponent from './single-comp';

type PropsT = {
  item?: SetsEntriesT;
  wrongWords?: Array<Array<string>>;
};
const GameComponent: React.FC<PropsT> = ({ item, wrongWords }) => {
  const singleCompData = [];
  if (wrongWords) {
    for (let i = 0; i < wrongWords.length; i++) {
      singleCompData.push([
        `./images/${wrongWords[i][0]}.jpg`,
        [wrongWords[i][0], wrongWords[i][1], `./souns/${wrongWords[i][0]}.mp3`],
      ]);
    }
  } else {
    const renderArr = Object.values(item![1])[0];
    for (const key of Object.entries(renderArr)) {
      singleCompData.push(key);
    }
  }
  const singleGComp = singleCompData.map((item) => {
    return <SingleGameComponent item={item} />;
  });

  return <div className={css.sets}>{singleGComp}</div>;
};
export default GameComponent;
