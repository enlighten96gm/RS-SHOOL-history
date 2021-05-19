import Idb from '../indexed-DB';
import { gameType, newUserType } from './../types/types';
import BestScore from './best-score';

type handlerType = (e: MouseEvent) => void
const ActiveGame = (state: any) => {
    const card: Array<HTMLElement> = Array.from(document.querySelectorAll('.game__card'));
    const stopGame: HTMLElement = document.querySelector('.fifth__block-header')
    const settingsWindow: HTMLElement = document.querySelector('.settings')
    const score: HTMLElement = document.querySelector('.score')
    let gameState: gameType = {
        time: -10,
        done: false,
        clicks: 0,
        cardArray: card,
        matchedCards: [],
        checkCard: null,
        goAhead: true
    }
    const StartGame = (timerId: any) => {
        const cardHeandler: handlerType = (e) => {
            let element = e.target as HTMLElement
            gameState.clicks++
            console.log(gameState.clicks);
            element.parentElement.classList.add('visible')
            if (gameState.checkCard) {
                checkIfMatched(element.parentElement)
            } else {
                gameState.checkCard = element.parentElement
            }
        }
        const checkIfMatched = (card: HTMLElement) => {
            if (getCard(card) === getCard(gameState.checkCard)) {
                cardMatch(card, gameState.checkCard)
            } else {
                gameState.clicks -= 2
                noCardMatch(card, gameState.checkCard)
            }
            gameState.checkCard = null
        }
        const cardMatch = (card1: HTMLElement, card2: HTMLElement) => {
            gameState.matchedCards.push(card1)
            gameState.matchedCards.push(card2)
                card1.classList.add('matched')
                card2.classList.add('matched')
            if (gameState.matchedCards.length === gameState.cardArray.length) {
                window.alert('CONGRATULATION')
                clearInterval(timerId)
                gameState.done = true
                score.classList.add('if__score_active')
                settingsWindow.classList.remove('if__settings_active')
                Idb.getObj(state.ssn).then((res:newUserType) => BestScore(res, gameState)) 
            }
        }
        const noCardMatch = (card1: HTMLElement, card2: HTMLElement) => {
            setTimeout(() => {
                card1.classList.remove('visible')
                card2.classList.remove('visible')
            }, 1000)
        }
        const getCard = (card: HTMLElement) => {        
            return card.id
        }
        card.forEach(card => card.addEventListener('click', cardHeandler))
    }
    const randomOrder = () => {
        for (let i = gameState.cardArray.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1))
            gameState.cardArray[random].style.order = `${i}`
            gameState.cardArray[i].style.order = `${random}`
        }
    }
    randomOrder()
    card.forEach(card => card.classList.add('visible'))
    setTimeout(() => {
        card.forEach(card => card.classList.remove('visible'))
    }, 10000)
    const timerTIme: HTMLElement = document.querySelector('.game__board_timer')
    const timerIncrease = () => {
        let timerId = setInterval(() => {
            if (gameState.time === 0) {
                StartGame(timerId)
            }
            if (!gameState.done) {
                gameState.time++
                timerTIme.innerHTML = `${gameState.time}`
            } else {
                timerTIme.innerHTML = `${gameState.time}`
            }
        }, 1000)
        stopGame.addEventListener('click', () => {clearInterval(timerId)})
    }
    timerIncrease()
}
export default ActiveGame