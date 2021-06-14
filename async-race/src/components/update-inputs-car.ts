import UpdateCaraApi from '../dal/update-car-api'; // eslint-disable-line import/no-cycle
import { carState } from '../types/state';

const UpdateInputsCar = (id: string) => {
  const updateNameINput: HTMLInputElement = document.querySelector('.second__input_block-input1');
  const updateColorINput: HTMLInputElement = document.querySelector('.second__input_block-input2');
  const updateCarButton: HTMLElement = document.querySelector('.second__input_block-button');
  const nameHeandler = (e: Event) => {
    const element = e.target as HTMLInputElement;
    carState.name = element.value;
  };
  const colorHeandler = (e: Event) => {
    const element = e.target as HTMLInputElement;
    carState.color = element.value;
  };
  const buttonHeanler = () => {
    UpdateCaraApi(id);
    updateNameINput.value = '';
    updateColorINput.value = '#000';
    updateCarButton.removeEventListener('click', buttonHeanler);
  };
  updateNameINput.addEventListener('change', nameHeandler);
  updateColorINput.addEventListener('change', colorHeandler);
  updateCarButton.addEventListener('click', buttonHeanler);
};
export default UpdateInputsCar;
