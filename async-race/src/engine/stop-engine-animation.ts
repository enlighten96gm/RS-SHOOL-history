import StopCarApi from '../dal/stop-car-engine';
import RaceState from '../types/race-state';

const stopEngineHeandler = (e: Event) => {
  const element = e.target as HTMLElement;
  const singleCar: HTMLElement = document.querySelector(`.single__car_${element.id}`);
  const startEngine: HTMLElement = document.querySelector(`.start__car_${element.id}`);
  startEngine.style.color = 'green';
  startEngine.style.pointerEvents = 'all';
  singleCar.style.transform = 'rotate(0deg)';
  singleCar.style.transform = 'translate(50px, -30px)';
  RaceState[element.id].isCarStoped = true;
  setTimeout(() => { singleCar.style.left = '0'; }, 400);
  StopCarApi(element.id);
};
export default stopEngineHeandler;
