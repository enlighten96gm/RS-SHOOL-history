import React from 'react';
import css from './game-comp.module.css'
import SingleGameComponent from './single-comp';
const GameComponent = ({item}: any) => {
    const renderArr: any = Object.values(item[1])[0]
    const singleCompData = []
    for (let key of Object.entries(renderArr)) {
        singleCompData.push(key)
    }
    const singleGComp = singleCompData.map((item: any) => {
        return <SingleGameComponent item={item}/>
    })

    return (
        <div className={css.sets}>
            {singleGComp}
        </div>
    )
}
export default GameComponent