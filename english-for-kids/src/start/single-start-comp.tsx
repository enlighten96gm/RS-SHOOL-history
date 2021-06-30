import React, { useState } from 'react';
import css from './start.module.css'
import '../App.css';


const SingleStartComponent = ({item, rightWord, counter, seCounter, started, stars, setStars, setErrorCount, errorCount}: any) => {
    const [noRepeat, setNoRepeat] = useState(true)
    const [newStyle, setNewStyle] = useState({
        filter: 'blur(0px)',
        display: 'block',
    })
    let wordsArr = item[1] 
    let soundArr = item[0]
    
    if (started && wordsArr[2] === rightWord[0] && noRepeat) {
        let inerpritation = new Audio(rightWord[counter])
        inerpritation.play()
        setNoRepeat(false)
    }
    const chechIfRight = () => {
        if (wordsArr[2] === rightWord[counter]) {
            seCounter(counter += 1)
            setNewStyle({
                filter: 'blur(10px)',
                display: 'none',
            })
            setTimeout(() => {
                let inerpritation = new Audio(rightWord[counter])
                inerpritation.play()  
            }, 1000)
            // change localData
            const localData = JSON.parse(localStorage.getItem('scoreState') as any)
            for (let key of Object.entries(localData)) {
                if (key[0] === wordsArr[0]) {
                    let changeCount: any = key[1]
                    changeCount[2].clicks += 1
                    changeCount[2].right += 1
                    localStorage.setItem('scoreState', JSON.stringify(localData));
                }
            }
            // + clicks + right
            let music = new Audio('/souns/correct.mp3') 
            music.play()
            setStars([...stars, 1])
        } else {
            setErrorCount(errorCount += 1)
            // change localData
            const localData = JSON.parse(localStorage.getItem('scoreState') as any)
            for (let key of Object.entries(localData)) {
                if (key[0] === wordsArr[0]) {
                    let changeCount: any = key[1]
                    changeCount[2].whong += 1
                    changeCount[2].clicks += 1
                    localStorage.setItem('scoreState', JSON.stringify(localData));
                }
            }
            // + whong
            let music = new Audio('/souns/error.mp3') 
            music.play()
            setStars([...stars, 0])
        }
    }
    return (
        <div style={newStyle} onMouseDown={started === true ? chechIfRight : undefined} className="relative">
            <div className={css.single}>
                <img className={css.image} src={process.env.PUBLIC_URL + `${soundArr}`} alt="#"/>
            </div>
        </div>
    )
}
export default SingleStartComponent