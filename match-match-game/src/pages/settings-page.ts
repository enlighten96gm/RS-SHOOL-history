import Idb from '../indexed-DB';
import settingsState from '../types/settings-state';
import { newUserType } from '../types/types';

type handlerType = (e: MouseEvent) => void
const Settings = (state: newUserType): void => {
  const copyState = state;
  const cardDifficultyBtn: HTMLElement = document.querySelector('.cards__difficulty_third');
  const cardTypeBtn: HTMLElement = document.querySelector('.cards__type_third');
  const toggleSettings: handlerType = (e) => {
    const element = e.target as HTMLElement;
    if (element.className === 'cards__type_second') {
      cardTypeBtn.classList.add('if__btn_active');
    }
    if (element.className === 'cards__difficulty_second') {
      cardDifficultyBtn.classList.add('if__btn_active');
    }
  };
  const switchTypeCard: handlerType = (e) => {
    const element = e.target as HTMLElement;
    if (element.id === '1') {
      copyState.cards = settingsState.animals;
      cardTypeBtn.classList.remove('if__btn_active');
    }
    if (element.id === '2') {
      copyState.cards = settingsState.people;
      cardTypeBtn.classList.remove('if__btn_active');
    }
    if (element.id === '3') {
      copyState.cards = settingsState.question;
      cardTypeBtn.classList.remove('if__btn_active');
    }
    Idb.putObj(copyState);
  };
  const switchDifficulty: handlerType = (e) => {
    const element = e.target as HTMLElement;
    if (element.id === '1') {
      copyState.difculty = settingsState.easy;
      cardDifficultyBtn.classList.remove('if__btn_active');
    }
    if (element.id === '2') {
      copyState.difculty = settingsState.medium;
      cardDifficultyBtn.classList.remove('if__btn_active');
    }
    if (element.id === '3') {
      copyState.difculty = settingsState.hard;
      cardDifficultyBtn.classList.remove('if__btn_active');
    }
    Idb.putObj(copyState);
  };
  cardDifficultyBtn.addEventListener('click', switchDifficulty);
  cardTypeBtn.addEventListener('click', switchTypeCard);
  document.addEventListener('click', toggleSettings);
};
export default Settings;
