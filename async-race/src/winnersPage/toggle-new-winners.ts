import { newColorNameId } from '../types/color-name-id';
import { newIdWinTIme } from '../types/id-wins-time';
import GetSingleCar from '../dal/get-single-car';
import { url } from '../dal/instance';
import SortWInnersToggler from './sort-toggle-winners'; // eslint-disable-line import/no-cycle
import { nameOfTheCar, colorOfTheCar } from '../types/for-winners-state';

const ToggleAllWiners = async (sort: string, oreder: string, res: Array<newIdWinTIme>) => {
  await nameOfTheCar.splice(0, nameOfTheCar.length);
  await colorOfTheCar.splice(0, colorOfTheCar.length);
  await res.map((item: newIdWinTIme) => {
    GetSingleCar(`${item.id}`).then((car: newColorNameId) => {
      nameOfTheCar.push(car.name);
      colorOfTheCar.push(car.color);
    });
    return item;
  });

  const response = await fetch(`${url}/winners?_sort=${sort}&_order=${oreder}`, {
    method: 'GET',
  });
  const greeting = await response.json();
  setTimeout(() => {
    SortWInnersToggler(greeting);
  }, 100);
  return greeting;
};
export default ToggleAllWiners;
