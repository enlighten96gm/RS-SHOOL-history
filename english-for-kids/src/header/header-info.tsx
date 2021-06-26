import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './header-info.module.css'

const HeaderInfo = ({dataCard}: any) => {
    const everyTitle = []
    for (let key of Object.keys(dataCard.sets)) {
        everyTitle.push(key)   
    }
    const createRows = everyTitle.map((item: string) => { 
        return (
            <NavLink className={css.link} to={item}>
                <div className={css.row} key={item}>{item}</div> 
            </NavLink>
        )
        
    })
    return (
        <div className={css.main}>
            <NavLink className={css.link} to='/Sets'>
                <div className={css.row}>Menu</div>
            </NavLink>
            {createRows}
        </div>
    )
}
export default HeaderInfo