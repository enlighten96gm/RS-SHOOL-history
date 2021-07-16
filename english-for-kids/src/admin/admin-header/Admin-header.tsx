import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './ad.module.css';

const AdminHeader = ({ setAdmin, changeColor, adminFlag, correctPath }: any) => {
  const changeGame = () => {
    setAdmin(false);
  };
  return (
    <div className={css.main}>
      <div className={`${css.single} ${css.active}`}>
        <NavLink
          onClick={changeColor}
          className={`${css.link} ${adminFlag === true ? css.active : null}`}
          to="/Categories"
        >
          Categories
        </NavLink>
      </div>
      <div className={css.single}>
        <NavLink
          onClick={changeColor}
          className={`${css.link} ${adminFlag === false ? css.active : null}`}
          to={`/${correctPath}category`}
        >
          Words
        </NavLink>
      </div>
      <div className={css.single}>
        <NavLink onClick={changeGame} className={`${css.link}`} to="/">
          Log out
        </NavLink>
      </div>
    </div>
  );
};
export default AdminHeader;
