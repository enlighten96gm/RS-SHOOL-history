import { newColorNameId } from '../types/color-name-id';
import { newIdWinTIme } from '../types/id-wins-time';
import { nameOfTheCar, colorOfTheCar } from '../types/for-winners-state';
import GetAllWiners from '../dal/get-all-winners';
import GetSingleCar from '../dal/get-single-car';

const ConstructWinnerArray = () => {
  GetAllWiners().then((item: Array<newIdWinTIme>) => {
    nameOfTheCar.splice(0, nameOfTheCar.length);
    colorOfTheCar.splice(0, colorOfTheCar.length);
    item.map((res: newIdWinTIme) => {
      GetSingleCar(`${res.id}`).then((car: newColorNameId) => {
        nameOfTheCar.push(car.name);
        colorOfTheCar.push(car.color);
      });
      return res;
    });
  });
};
export default ConstructWinnerArray;
