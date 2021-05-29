import ActiveGame from '../pages/game-page';
import { newUserType } from '../types/types';

const CreateEasy = (state: newUserType) => {
  let repetitions = 0;
  let cardType = '';
  if (state.difculty === 'easy') {
    repetitions = 6;
  } else if (state.difculty === 'medium') {
    repetitions = 16;
  } else if (state.difculty === 'hard') {
    repetitions = 32;
  }
  if (state.cards === 'animals') {
    cardType = 'img';
  } else if (state.cards === '?') {
    cardType = 'quesyion';
  } else if (state.cards === 'people') {
    cardType = 'people';
  }
  const deleteElement: HTMLElement = document.querySelector('.something__game');
  if (repetitions === 6) {
    deleteElement.classList.remove('game__board_cards-medium');
    deleteElement.classList.remove('game__board_cards-hard');
    deleteElement.classList.add('game__board_cards');
  }
  if (repetitions === 16) {
    deleteElement.classList.remove('game__board_cards');
    deleteElement.classList.remove('game__board_cards-hard');
    deleteElement.classList.add('game__board_cards-medium');
  }
  if (repetitions === 32) {
    deleteElement.classList.remove('game__board_cards');
    deleteElement.classList.add('game__board_cards-hard');
    deleteElement.classList.remove('game__board_cards-medium');
  }
  deleteElement.innerHTML = '';
  for (let i = 1; i <= repetitions; i += 1) {
    deleteElement.innerHTML += `
        <div id="${i}" class="game__card">
            <div class="game__card_back game__card_face"></div>
            <div class="game__card_front game__card_face ${cardType}${i} card__value"></div>
        </div>
        <div id="${i}" class="game__card">
            <div class="game__card_back game__card_face"></div>
            <div class="game__card_front game__card_face ${cardType}${i} card__value"></div>
        </div>
        `;
  }
  ActiveGame(state);
};
export default CreateEasy;
