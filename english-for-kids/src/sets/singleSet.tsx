import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './singleSet.module.css';

const SingleSet = ({ item, mainFlag }: any) => {
  const imageSrc = Object.keys(item[1])[0];
  return (
    <NavLink className={css.link} to={item[0]}>
      <div className={mainFlag === true ? css.single : css.gameSingle}>
        {item[0]}
        <img className={css.image} src={`${imageSrc}`} alt="#" />
      </div>
    </NavLink>
  );
};

export default SingleSet;
