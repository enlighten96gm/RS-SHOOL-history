import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import GameCycle from './game-cycle';
import SingleStartComponent from './single-start-comp';
import css from './start.module.css'
const StartComp = ({item, wrongWords}: any) => {
    if (wrongWords) {
        const singleCompData = []
        for( let i = 0; i < wrongWords.length; i++) {
            singleCompData.push([`/images/${wrongWords[i][0]}.jpg`, [wrongWords[i][0], wrongWords[i][1], `/souns/${wrongWords[i][0]}.mp3`]])
            
        }
        const iteration = singleCompData.length + 1
        let sobachijNos = {}
        for (let i = 1; i < iteration; i++) {
            let key: any = singleCompData[i - 1][0]
            let value: any = singleCompData[i - 1][1]
            sobachijNos = {...sobachijNos,
                [key]: value}
        }    
        item = ["Action Z", {"huimage": sobachijNos}] 
        
    }
    
    const history = useHistory()
    const [started, setStarted] = useState(false)
    const [rightWord, setRightWord] = useState([])
    const [stars, setStars] = useState([])
    let [counter, seCounter] = useState(0)
    let [errorCount, setErrorCount] = useState(0)
    const renderArr: any = Object.values(item[1])[0]
    const countToWin: any = []
    const gameArrayToCheck = []
    const singleCompData = []
    const soundArray: any = []
    const switchOne = 'START GAME'
    const switchTwo = 'REPEAT'
    const creatStars = stars.map((item) => {
        if (item === 1) {
            return <img src={process.env.PUBLIC_URL + `/images/star-win.svg`} alt="#"/>
        } else {
            return <img src={process.env.PUBLIC_URL + `/images/star.svg`} alt="#"/>
        }
    })
    for (let key of Object.entries(renderArr)) {
        singleCompData.push(key)
    }
    for (let key of Object.values(renderArr)) {
        gameArrayToCheck.push(key)
    }
    for (let i = 0; i < gameArrayToCheck.length; i += 1) {
        const matrix: any = gameArrayToCheck[i]
        for (let j = 0; j < matrix.length; j += 1) {
            if (j % 3 === 2) {
                soundArray.push(matrix[j])
            }
        }
    }
    const singleSComp = singleCompData.map((item: any) => {
        countToWin.push(item)
        
        
        
        return <SingleStartComponent item={item} rightWord={rightWord} counter={counter} seCounter={seCounter} started={started} stars={stars} setStars={setStars} setErrorCount={setErrorCount} errorCount={errorCount}/>
    })
    const startGameHeandler = () => {
        if (!started) {
            GameCycle(soundArray).then((item: any) => setRightWord(item))
            setStarted(true)  
        } else {
            let inerpritation = new Audio(rightWord[counter])
            inerpritation.play()  
        }  
    }
    if (counter === countToWin.length) {
        if (errorCount === 0) {
            let music1 = new Audio('/souns/success.mp3') 
            music1.play()
        } else {
            let music2 = new Audio('/souns/failure.mp3') 
            music2.play()
        }
        setTimeout(() => { history.push('/Sets') }, 2500)
    } 
    
    return (
        <div>
            {counter === countToWin.length 
            ? <div>
                {errorCount === 0 
                ? <div>
                    <div className={css.winPage}>YOU WIN</div>
                    <img className={css.success} src={process.env.PUBLIC_URL + `/images/success.jpg`} alt="#"/>
                  </div>
                : <div>
                    <div className={css.winPage}>Error: {errorCount}</div>
                    <img className={css.success} src={process.env.PUBLIC_URL + `/images/failure.jpg`} alt="#"/>
                  </div>
                  }
              </div> 
            : <div>
                <div>{creatStars}</div>
                    <div className={css.sets}>
                    {singleSComp}
                <div onClick={startGameHeandler} className={css.game__btn}>
                    <div className={css.text__inside }>{started === false ? switchOne : switchTwo}</div>
                </div>
              </div>
            </div>}
        </div>
        
    )
}
export default StartComp