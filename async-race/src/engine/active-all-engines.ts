import { VelocityAndDist } from '../types/velocity-and-time';
import StartCarApi from '../dal/start-car-engine';
import CarsArray from '../types/cars-array';
import flag from '../types/winner-bollean';
import AnimateCar from './animate-car';

const ActiveAllEngines = () => {
  const ActiveAll: HTMLElement = document.querySelector('.buttons__block_1');
  const activeAllHeandler = () => {
    flag.splice(0, flag.length);
    flag.push(true);
    CarsArray.map((item: number) => {
      StartCarApi(`${item}`).then((res: VelocityAndDist) => {
        AnimateCar(res, `${item}`);
      });
      return item;
    });
  };
  ActiveAll.addEventListener('click', activeAllHeandler);
};
export default ActiveAllEngines;
