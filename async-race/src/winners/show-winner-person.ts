import { newColorNameId } from '../types/color-name-id';
import GetSingleCar from '../dal/get-single-car';

const ShowMeTheWinner = (id: string, time: string) => {
  const newTime = parseFloat(time.replace(',', '.').replace(' ', ''));
  const celebrationShow: HTMLElement = document.querySelector('.celebration__for_win');
  GetSingleCar(id).then((res: newColorNameId) => {
    celebrationShow.innerHTML = `${res.name} WIN WITH ${newTime}`;
  });
  celebrationShow.classList.remove('celebration__none');
  setTimeout(() => {
    celebrationShow.classList.add('celebration__none');
  }, 2000);
};

export default ShowMeTheWinner;
