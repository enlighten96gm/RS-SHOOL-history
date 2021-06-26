import React, { useEffect, useState } from 'react';
import css from './toggler.module.css'

const HeaderToggler = ({onClick}: any) => {
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const togglerChange = document.querySelector(`.${css.toggler}`)
        const burgerHeandler = () => {
            if (!flag) {
                togglerChange?.classList.add(`${css.toggler__game}`)
                setFlag(true)
            } else {
                setFlag(false)
                togglerChange?.classList.remove(`${css.toggler__game}`)
            }
        }
        togglerChange?.addEventListener('click', burgerHeandler)
        return () => togglerChange?.removeEventListener('click', burgerHeandler)
    })
    return (
        <div>
            {flag === false ? <div className={css.text1}>TRAIN</div> : <div className={css.text2}>GAME</div>}
            <div onClick={onClick} className={css.toggler}></div>
        </div>
        
    )
}
export default HeaderToggler