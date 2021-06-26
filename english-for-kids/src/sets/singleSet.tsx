import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './singleSet.module.css'

const SingleSet = ({item}: any) => {
    const imageSrc = Object.keys(item[1])[0]
    return (
        <NavLink className={css.link} to={item[0]}>
            <div className={css.single}>{item[0]}
                <img className={css.image} src={process.env.PUBLIC_URL + `${imageSrc}`} alt="#"/>
            </div>
        </NavLink>
    )
}

export default SingleSet