import React from 'react';
import { DataType } from '../types/types';
import css from './sets.module.css';
import SingleSet from './singleSet';

type PropsT = {
  dataCard: DataType;
  mainFlag: boolean;
};

const Sets: React.FC<PropsT> = ({ dataCard, mainFlag }) => {
  const entriesArray = [];
  for (const key of Object.entries(dataCard.sets)) {
    entriesArray.push(key);
  }
  const singleSet = entriesArray.map((item) => {
    return <SingleSet key={item} item={item} mainFlag={mainFlag} />;
  });
  return <div className={css.sets}>{singleSet}</div>;
};

export default Sets;
