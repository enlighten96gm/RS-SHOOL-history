import GameCrash from '../crash-game';
import ChangeScore from '../score/score-change';
import { newUserType, gameType } from '../types/types';

const BestScore = (state: newUserType, gameState: gameType) => {
  const startButton: HTMLLIElement = document.querySelector('.fourth__block-header');
  const stopGameBtn: HTMLLIElement = document.querySelector('.fifth__block-header');
  const gameWindow: HTMLLIElement = document.querySelector('.game');
  startButton.classList.remove('inactive__header');
  stopGameBtn.classList.add('inactive__header');
  gameWindow.classList.remove('if__game_active');
  ChangeScore(state, gameState);
  GameCrash();
};
export default BestScore;
