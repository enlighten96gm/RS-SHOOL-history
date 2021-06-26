import React from 'react';
import SingleStartComponent from './single-start-comp';
import css from './start.module.css'
const StartComp = ({item}: any) => {
    const renderArr: any = Object.values(item[1])[0]
    const singleCompData = []
    for (let key of Object.entries(renderArr)) {
        singleCompData.push(key)
    }
    const singleSComp = singleCompData.map((item: any) => {
        return <SingleStartComponent item={item}/>
    })

    return (
        <div className={css.sets}>
            {singleSComp}
            <div className={css.game__btn}>START GAME</div>
        </div>
    )
}
export default StartComp