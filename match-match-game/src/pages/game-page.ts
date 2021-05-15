import { gameType } from './../types/types';

type handlerType = (e: MouseEvent) => void
const ActiveGame = (state: any) => {
    const card: Array<HTMLElement> = Array.from(document.querySelectorAll('.game__card'));
    const stopGame: HTMLElement = document.querySelector('.fifth__block-header')
    let gameState: gameType = {
        time: -10,
        done: false,
        clicks: 0,
        cardArray: card,
        matchedCards: [],
        checkCard: null,
        goAhead: true
    }
    const StartGame = () => {
        const cardHeandler: handlerType = (e) => {
            let element = e.target as HTMLElement
            gameState.clicks++
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
                alert("POBEDA")
                gameState.done = true
                // тут будет добавление челика в скор
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
    const clearState = () => {
        // 
    }
    stopGame.addEventListener('click', clearState)
    // randomizer
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
    // randomizer
    // Timer
    const timerTIme: HTMLElement = document.querySelector('.game__board_timer')
    const timerIncrease = () => {
        setInterval(() => {
            if (gameState.time === 0) {
                StartGame()
            }
            if (!gameState.done) {
                gameState.time++
                timerTIme.innerHTML = `${gameState.time}`
            } else {
                timerTIme.innerHTML = `${gameState.time}`
            }
        }, 1000)
    }
    timerIncrease()
    // Timer
}
export default ActiveGame