import { newIdWinTIme } from './types/id-wins-time';
import RandomCars from './components/random-cars';
import CreateCar from './create-car';
import CreateSettings from './create-html/settings-html-create';
import GetAllWiners from './dal/get-all-winners';
import ActiveAllEngines from './engine/active-all-engines';
import ConstructWinnerArray from './engine/construct-winner-array';
import StopAllEngines from './engine/stop-all-engines';
import FirstCreate from './first-request';
import './style/index.css';
import DisplayWinners from './winnersPage/display-winners';
import WinnersArray from './winners/winners-id';

CreateSettings();
FirstCreate();
CreateCar();
RandomCars();
ActiveAllEngines();
StopAllEngines();
DisplayWinners();
ConstructWinnerArray();
GetAllWiners().then((res: Array<newIdWinTIme>) => {
  res.map((item: newIdWinTIme) => {
    WinnersArray.push(`${item.id}`);
    return item;
  });
});
