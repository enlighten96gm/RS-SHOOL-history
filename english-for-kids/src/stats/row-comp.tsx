import React, { useState } from 'react';
import css from './statsMain.module.css';

const SingleRow = ({ item }: any) => {
  const percentage = (item[1][2].whong / item[1][2].clicks).toString();
  const sobachka = Number(`${percentage.split('').reverse().splice(0, 1).join()}0`);

  return (
    <div className={css.gridSingle}>
      <div className={css.textsingle}>{item[0]}</div>
      <div className={css.textsingle}>{item[1][0]}</div>
      <div className={css.textsingle}>{item[1][1]}</div>
      <div className={css.textsingle}>{item[1][2].clicks}</div>
      <div className={css.textsingle}>{item[1][2].whong}</div>
      <div className={css.textsingle}>{item[1][2].right}</div>
      <div className={css.textsingle}>{sobachka || 0} %</div>
    </div>
  );
};
export default SingleRow;
