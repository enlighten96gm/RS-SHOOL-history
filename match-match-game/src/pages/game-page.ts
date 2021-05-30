import Idb from '../indexed-DB';
import { gameType, newUserType } from '../types/types';
import BestScore from './best-score';

type handlerType = (e: MouseEvent) => void
const ActiveGame = (state: newUserType): void => {
  const card: Array<HTMLElement> = Array.from(document.querySelectorAll('.game__card'));
  const stopGame: HTMLElement = document.querySelector('.fifth__block-header');
  const settingsWindow: HTMLElement = document.querySelector('.settings');
  const score: HTMLElement = document.querySelector('.score');
  const gameState: gameType = {
    time: -10,
    done: false,
    clicks: 0,
    cardArray: card,
    matchedCards: [],
    checkCard: null,
    goAhead: true,
  };
  const StartGame = (timerId: ReturnType<typeof setInterval>) => {
    // ===/////////////
    const cardMatch = (card1: HTMLElement, card2: HTMLElement) => {
      gameState.matchedCards.push(card1);
      gameState.matchedCards.push(card2);
      card1.classList.add('matched');
      card2.classList.add('matched');
      if (gameState.matchedCards.length === gameState.cardArray.length) {
        const alertButton: HTMLElement = document.querySelector('.congrats__button_inside-button');
        const alertWindow: HTMLElement = document.querySelector('.congrats__button');
        alertWindow.style.display = 'flex';
        clearInterval(timerId);
        gameState.done = true;
        const alertButtonHeandler = () => {
          alertWindow.style.display = 'none';
          score.classList.add('if__score_active');
          settingsWindow.classList.remove('if__settings_active');
          Idb.getObj(state.ssn).then((res:newUserType) => BestScore(res, gameState));
          alertButton.removeEventListener('click', alertButtonHeandler);
        };
        alertButton.addEventListener('click', alertButtonHeandler);
      }
    };
    const noCardMatch = (card1: HTMLElement, card2: HTMLElement) => {
      setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
      }, 1000);
    };
    const getCard = (cartochka1: HTMLElement) => cartochka1.id;
    const checkIfMatched = (cartochka: HTMLElement) => {
      if (getCard(cartochka) === getCard(gameState.checkCard)) {
        cardMatch(cartochka, gameState.checkCard);
      } else {
        gameState.clicks -= 2;
        noCardMatch(cartochka, gameState.checkCard);
      }
      gameState.checkCard = null;
    };
    const cardHeandler: handlerType = (e) => {
      const element = e.target as HTMLElement;
      gameState.clicks += 1;
      element.parentElement.classList.add('visible');
      if (gameState.checkCard) {
        checkIfMatched(element.parentElement);
      } else {
        gameState.checkCard = element.parentElement;
      }
    };

    card.forEach((cartochka2) => cartochka2.addEventListener('click', cardHeandler));
  };
  const randomOrder = () => {
    for (let i = gameState.cardArray.length - 1; i > 0; i -= 1) {
      const random = Math.floor(Math.random() * (i + 1));
      gameState.cardArray[random].style.order = `${i}`;
      gameState.cardArray[i].style.order = `${random}`;
    }
  };
  randomOrder();
  card.forEach((cartochka3) => cartochka3.classList.add('visible'));
  setTimeout(() => {
    card.forEach((cartochka4) => cartochka4.classList.remove('visible'));
  }, 10000);
  const timerTIme: HTMLElement = document.querySelector('.game__board_timer');
  const timerIncrease = () => {
    const timerId = setInterval(() => {
      if (gameState.time === 0) {
        StartGame(timerId);
      }
      if (!gameState.done) {
        gameState.time += 1;
        timerTIme.innerHTML = `${gameState.time}`;
      } else {
        timerTIme.innerHTML = `${gameState.time}`;
      }
    }, 1000);
    stopGame.addEventListener('click', () => {
      clearInterval(timerId);
    });
  };
  timerIncrease();
};
export default ActiveGame;
