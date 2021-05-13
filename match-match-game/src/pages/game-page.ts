import { gameType } from './../types/types';

type handlerType = (e: MouseEvent) => void
const ActiveGame = () => {  
    const card: Array<HTMLElement> = Array.from(document.querySelectorAll('.game__card'));
    let gameState: gameType = {
        time: 0,
        done: true,
        clicks: 0,
        cardArray: card,
        matchedCards: [],
        checkCard: null
    }
    
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
    // const matchNotDone = () => {
    //     gameState.cardArray.forEach(card => {
    //         card.classList.remove('visible')
    //         card.classList.remove('matched')
    //     })
    // }
    // randomizer
    const randomOrder = () => {
        for (let i = gameState.cardArray.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1))
            gameState.cardArray[random].style.order = `${i}`
            gameState.cardArray[i].style.order = `${random}`
        }
    }
    randomOrder()
    // randomizer
    // Timer
    const timer: HTMLElement = document.querySelector('.game__board_timer')
    const timerIncrease = () => {
        setInterval(() => {
            if (!gameState.done) {
                gameState.time++
                timer.innerHTML = `${gameState.time}`
            } else {
                timer.innerHTML = `${gameState.time}`
            }
            
        }, 1000)
    }
    timerIncrease()
    // Timer
}
export default ActiveGame