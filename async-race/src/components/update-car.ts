import { newColorNameId } from '../types/color-name-id';
import { carState } from '../types/state';
import GetSingleCar from '../dal/get-single-car';
import UpdateInputsCar from './update-inputs-car'; // eslint-disable-line import/no-cycle

const UpdateCar = () => {
  const updateButton: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_button1'));
  const updateNameINput: HTMLInputElement = document.querySelector('.second__input_block-input1');
  const updateColorINput: HTMLInputElement = document.querySelector('.second__input_block-input2');

  updateButton.forEach((item: HTMLElement) => {
    const updateCarHeandler = (e: Event) => {
      const element = e.target as HTMLElement;
      GetSingleCar(element.id).then((data: newColorNameId) => {
        carState.name = data.name;
        carState.color = data.color;
        updateNameINput.value = data.name;
        updateColorINput.value = data.color;
        UpdateInputsCar(`${data.id}`);
      });
    };
    item.addEventListener('click', updateCarHeandler);
  });
};
export default UpdateCar;
