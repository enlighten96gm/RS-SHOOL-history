import React from 'react';
import css from './start.module.css'
import '../App.css';


const SingleStartComponent = ({item}: any) => {
    const wordsArr = item[1]
    return (
        <div className="relative">
            <div className={css.single}>
                <img className={css.image} src={process.env.PUBLIC_URL + `${item[0]}`} alt="#"/>
            </div>
        </div>
    )
}
export default SingleStartComponent