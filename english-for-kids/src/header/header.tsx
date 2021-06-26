import React, { useEffect, useState } from 'react';
import HeaderInfo from './header-info';
import css from './header.module.css'
import HeaderToggler from './toggler';
const Header = ({dataCard, onClick}: any) => {
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const burger = document.querySelector(`.${css.menu}`)
        const burgerHeandler = () => {
            if (!flag) {
                burger?.classList.add(`${css.animate1}`)
                setFlag(true)
            } else {
                setFlag(false)
                burger?.classList.remove(`${css.animate1}`)
            }
        }
        burger?.addEventListener('click', burgerHeandler)
        return () => burger?.removeEventListener('click', burgerHeandler)
    })
    return (
        <div className={css.main}>
            <div className={css.name}>ENGLISH FOR KIDS</div>
            <div className={css.toggler}><HeaderToggler onClick={onClick} /></div>
            <div className={css.menu}>
                <div className={css.menu__btn}></div>
            </div>
            {flag === true ? <HeaderInfo dataCard={dataCard}/> : null}
        </div>
    )
}
export default Header