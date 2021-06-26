import React, { useEffect } from 'react';
import css from './game-comp.module.css'
import '../App.css';

const SingleGameComponent = ({item}: any) => {
    const wordsArr = item[1]
    useEffect(() => {
        const togglerChange: Array<HTMLElement> = Array.from(document.querySelectorAll(`.${css.switch}`))
        const flipHeandler = (e: Event) => {
            const element = e.target as HTMLElement;
            element.parentElement?.parentElement?.classList.add('visible')
            setTimeout(() => {
                element.parentElement?.parentElement?.classList.remove('visible')
            }, 2000)
        }
        togglerChange.forEach((item: HTMLElement) => {
            item.addEventListener('click', flipHeandler)
        })
    })
    const audioHeandler = () => {
        let music = new Audio(wordsArr[2])
            music.play()
    }
    
    return (
        <div onClick={audioHeandler} className="relative">
            <div className="game__card_back single">
                <img className={css.image} src={process.env.PUBLIC_URL + `${item[0]}`} alt="#"/>
                <div className={css.english__word}>{wordsArr[0]}</div>
                <div className={css.switch}>Flip</div>
            </div>
            <div className="game__card_front single visible">
                <img className={css.image} src={process.env.PUBLIC_URL + `${item[0]}`} alt="#"/>
                <div className={css.english__word}>{wordsArr[1]}</div>
            </div>
        </div>
    )
}
export default SingleGameComponent