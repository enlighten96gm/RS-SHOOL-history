import React, { useEffect, useState } from 'react';
import { DataType } from '../types/types';
import HeaderInfo from './header-info';
import css from './header.module.css';
import HeaderToggler from './toggler';

type PropsT = {
  dataCard: DataType;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

const Header: React.FC<PropsT> = ({ dataCard, onClick }) => {
  const [flag, setFlag] = useState(false);
  const flagToggler = () => {
    const burger = document.querySelector(`.${css.menu}`);
    if (!flag) {
      setFlag(true);
    } else {
      setFlag(false);
      burger?.classList.remove(`${css.animate1}`);
    }
  };
  useEffect(() => {
    const switchNav = document.querySelector(`.${css.floatNav2}`);
    const burger = document.querySelector(`.${css.menu}`);
    const leaveHeandler = () => {
      setFlag(false);
      burger?.classList.remove(`${css.animate1}`);
    };
    switchNav?.addEventListener('mouseleave', leaveHeandler);
    return () => switchNav?.removeEventListener('mouseleave', leaveHeandler);
  });
  useEffect(() => {
    const burger = document.querySelector(`.${css.menu}`);
    const burgerHeandler = () => {
      if (!flag) {
        burger?.classList.add(`${css.animate1}`);
        setFlag(true);
      } else {
        setFlag(false);
        burger?.classList.remove(`${css.animate1}`);
      }
    };
    burger?.addEventListener('click', burgerHeandler);
    return () => burger?.removeEventListener('click', burgerHeandler);
  });
  return (
    <div className={css.main}>
      <div className={css.name}>ENGLISH FOR KIDS</div>
      <div className={css.toggler}>
        <HeaderToggler onClick={onClick} />
      </div>
      <div className={css.menu}>
        <div className={css.menu__btn} />
      </div>
      <div className={flag === false ? css.floatNav : css.floatNav2}>
        <HeaderInfo flagToggler={flagToggler} dataCard={dataCard} />
      </div>
    </div>
  );
};
export default Header;
