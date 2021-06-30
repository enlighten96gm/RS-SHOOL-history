import React from 'react';
import css from './game-comp.module.css'
import SingleGameComponent from './single-comp';
const GameComponent = ({item, wrongWords}: any) => {
    const singleCompData = []
    if (wrongWords) {
        for( let i = 0; i < wrongWords.length; i++) {
            singleCompData.push([`/images/${wrongWords[i][0]}.jpg`, [wrongWords[i][0], wrongWords[i][1], `/souns/${wrongWords[i][0]}.mp3`]])
        }
    } else {
        const renderArr: any = Object.values(item[1])[0]
        for (let key of Object.entries(renderArr)) {
            singleCompData.push(key)
        }
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