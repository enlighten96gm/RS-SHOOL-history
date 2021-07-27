import { carState } from '../types/state';
import PutCar from '../dal/put-car';
import NameRandom from '../types/generate-car-name';
import ColorRandom from '../types/generate-car-color';

const RandomCars = () => {
  const createNameINput: HTMLInputElement = document.querySelector('.first__input_block-input1');
  const createColorINput: HTMLInputElement = document.querySelector('.first__input_block-input2');
  const generateCars: HTMLElement = document.querySelector('.buttons__block_3');
  const nameHeandler = (e: Event) => {
    const element = e.target as HTMLInputElement;
    carState.name = element.value;
  };
  const colorHeandler = (e: Event) => {
    const element = e.target as HTMLInputElement;
    carState.color = element.value;
  };
  const randomItBaby = () => {
    const random = true;
    const number = 100;
    for (let i = 0; i < number; i += 1) {
      if (createNameINput.value === '') {
        carState.name = NameRandom();
      }
      if (random === true) {
        carState.color = ColorRandom();
      }
      PutCar();
    }
  };
  createNameINput.addEventListener('change', nameHeandler);
  createColorINput.addEventListener('change', colorHeandler);
  generateCars.removeEventListener('click', randomItBaby);
  generateCars.addEventListener('click', randomItBaby);
};
export default RandomCars;
