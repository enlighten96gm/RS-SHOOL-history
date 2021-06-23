import PutCar from './dal/put-car';
import ColorRandom from './types/generate-car-color';
import NameRandom from './types/generate-car-name';
import { carState } from './types/state';

const nameHeandler = (e: Event) => {
  const element = e.target as HTMLInputElement;
  carState.name = element.value;
};
const colorHeandler = (e: Event) => {
  const element = e.target as HTMLInputElement;
  carState.color = element.value;
};
const CreateCar = (random?: boolean) => {
  const createNameINput: HTMLInputElement = document.querySelector('.first__input_block-input1');
  const createColorINput: HTMLInputElement = document.querySelector('.first__input_block-input2');
  const createCarButton: HTMLElement = document.querySelector('.first__input_block-button');
  const buttonHeanler = () => {
    createNameINput.value = '';
    createColorINput.value = '#000';
    PutCar();
  };
  if (createNameINput.value === '') {
    carState.name = NameRandom();
  }
  if (random === true) {
    carState.color = ColorRandom();
  }

  createNameINput.addEventListener('change', nameHeandler);
  createColorINput.addEventListener('change', colorHeandler);
  createCarButton.addEventListener('click', buttonHeanler);
};
export default CreateCar;
