import { VelocityAndDist } from '../types/velocity-and-time';
import checkIfCrash from '../dal/check-crash-api';
import RaceState from '../types/race-state';
import GetWinner from '../winners/get-winner';
import ConstructWinnerArray from './construct-winner-array';
import stopEngineHeandler from './stop-engine-animation';

const AnimateCar = (res: VelocityAndDist, id: string) => {
  const singleCar: HTMLElement = document.querySelector(`.single__car_${id}`);
  const stopCapEngine: HTMLElement = document.querySelector(`.stop__car_${id}`);
  const startEngine: HTMLElement = document.querySelector(`.start__car_${id}`);

  RaceState[id] = {};
  RaceState[id].driveStatus = 0;
  RaceState[id].isCarStoped = false;
  const duration = res.distance / res.velocity;
  const start = performance.now();
  checkIfCrash(id, 'drive').then((item: Response) => {
    RaceState[id].driveStatus = item?.status;
  });
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timeFraction;
    singleCar.style.left = `${progress * 90}%`;
    if (RaceState[id].isCarStoped !== true && RaceState[id].driveStatus !== 500) {
      startEngine.style.color = 'red';
      startEngine.style.pointerEvents = 'none';
      if (timeFraction < 1) requestAnimationFrame(animate);
    } else if (RaceState[id].driveStatus === 500) {
      startEngine.style.color = 'red';
      startEngine.style.pointerEvents = 'none';
      singleCar.style.transform = 'rotate(-40deg)';
    }
    if (timeFraction === 1) {
      startEngine.style.pointerEvents = 'all';
      startEngine.style.color = 'green';
      GetWinner(res, id);
      ConstructWinnerArray();
    }
  });
  stopCapEngine.addEventListener('click', stopEngineHeandler);
};
export default AnimateCar;
