import { VelocityAndDist } from '../types/velocity-and-time';
import StartCarApi from '../dal/start-car-engine';
import AnimateCar from './animate-car';

const StartButton = () => {
  const startEngine: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_engine-1'));
  startEngine.forEach((item: HTMLElement) => {
    const startButtonHeandler = (e: Event) => {
      const element = e.target as HTMLElement;
      StartCarApi(element.id).then((item: VelocityAndDist) => { // eslint-disable-line no-shadow
        AnimateCar(item, element.id);
      });
    };
    item.addEventListener('click', startButtonHeandler);
  });
};
export default StartButton;
