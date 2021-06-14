import { increaseCounterPage, decreaseCounterPage } from '../types/pagination-state';
import CreateGarage from './create-garage'; // eslint-disable-line import/no-cycle

const Pagination = () => {
  const prevButton: HTMLElement = document.querySelector('.garage__block_buttons-left');
  const nextButton: HTMLElement = document.querySelector('.garage__block_buttons-right');
  const plusPageHeandler = () => {
    decreaseCounterPage();
    CreateGarage();
  };
  const minusPageHeandler = () => {
    increaseCounterPage();
    CreateGarage();
  };
  nextButton.addEventListener('click', minusPageHeandler);
  prevButton.addEventListener('click', plusPageHeandler);
};
export default Pagination;
