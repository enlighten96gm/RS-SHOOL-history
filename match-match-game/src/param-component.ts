import GameCrash from './crash-game';
import DifficultyToggler from './difficulty/difficultyHandler';
import Settings from './pages/settings-page';
import { newUserType } from './types/types';

type handlerType = (e: MouseEvent) => void
const Param = (state: newUserType): void => {
  const registerButton: HTMLLIElement = document.querySelector('.third__block-header_text');
  const headerImageSmall: HTMLImageElement = document.querySelector('.header__upload_img');
  const settings: HTMLElement = document.querySelector('.second__block-header_settings');
  const aboutGame: HTMLElement = document.querySelector('.second__block-header_about');
  const startButton: HTMLLIElement = document.querySelector('.fourth__block-header');
  const scoreBtn: HTMLElement = document.querySelector('.second__block-header_best');
  const imageWindow: HTMLImageElement = document.querySelector('.save__picture_img');
  const stopGameBtn: HTMLLIElement = document.querySelector('.fifth__block-header');
  const startGameBtn: HTMLLIElement = document.querySelector('.start__game');
  const settingsWindow: HTMLElement = document.querySelector('.settings');
  const logOutBtn: HTMLLIElement = document.querySelector('.log__out');
  const gameWindow: HTMLLIElement = document.querySelector('.game');
  const loginForm: HTMLElement = document.querySelector('.login');
  const score: HTMLElement = document.querySelector('.score');

  if (state) {
    loginForm.classList.remove('login__active_vision');
    registerButton.style.display = 'none';
    startButton.classList.remove('inactive__header');
  }
  const logOutHeandler: handlerType = () => {
    imageWindow.style.display = 'none';
    headerImageSmall.classList.remove('header__upload_img-visible');
    headerImageSmall.src = '';
    registerButton.style.display = 'flex';
    settingsWindow.classList.remove('if__settings_active');
    score.classList.remove('if__score_active');
    startButton.classList.add('inactive__header');
    settingsWindow.classList.remove('if__settings_active');
  };
  const startGameHeandler: handlerType = () => {
    startButton.classList.add('inactive__header');
    stopGameBtn.classList.remove('inactive__header');
    gameWindow.classList.add('if__game_active');
    settingsWindow.classList.remove('if__settings_active');
    DifficultyToggler(state.ssn);
  };
  const stopGameHeandler: handlerType = () => {
    startButton.classList.remove('inactive__header');
    stopGameBtn.classList.add('inactive__header');
    gameWindow.classList.remove('if__game_active');
    GameCrash();
  };
  const settingsHeandler: handlerType = () => {
    settingsWindow.classList.add('if__settings_active');
    score.classList.remove('if__score_active');
    Settings(state);
  };
  const scoreHeandler: handlerType = () => {
    score.classList.add('if__score_active');
    settingsWindow.classList.remove('if__settings_active');
  };
  const aboutGameHeandler: handlerType = () => {
    settingsWindow.classList.remove('if__settings_active');
    score.classList.remove('if__score_active');
  };
  scoreBtn.addEventListener('click', scoreHeandler);
  logOutBtn.addEventListener('click', logOutHeandler);
  settings.addEventListener('click', settingsHeandler);
  aboutGame.addEventListener('click', aboutGameHeandler);
  stopGameBtn.addEventListener('click', stopGameHeandler);
  startGameBtn.addEventListener('click', startGameHeandler);
};
export default Param;
