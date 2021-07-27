import { newIdWinTIme } from '../types/id-wins-time';
import upDown from '../types/up-down-flag';
import ToggleAllWiners from './toggle-new-winners'; // eslint-disable-line import/no-cycle

const WinnersToggler = (res: Array<newIdWinTIme>) => {
  const WinsToggler: HTMLElement = document.querySelector('.winners__block_header-wins');
  const TimeToggler: HTMLElement = document.querySelector('.winners__block_header-best');
  const sort = {
    wins: 'wins',
    time: 'time',
  };
  const oreder = {
    ASC: 'ASC',
    DESC: 'DESC',
  };
  const winsHeandler = () => {
    if (upDown.flag1 === true) {
      ToggleAllWiners(sort.wins, oreder.ASC, res);
      upDown.flag1 = false;
    } else if (upDown.flag1 === false) {
      ToggleAllWiners(sort.wins, oreder.DESC, res);
      upDown.flag1 = true;
    }
  };
  const timeHeandler = () => {
    if (upDown.flag2 === true) {
      ToggleAllWiners(sort.time, oreder.ASC, res);
      upDown.flag2 = false;
    } else if (upDown.flag2 === false) {
      ToggleAllWiners(sort.time, oreder.DESC, res);
      upDown.flag2 = true;
    }
  };
  WinsToggler.addEventListener('click', winsHeandler);
  TimeToggler.addEventListener('click', timeHeandler);
};
export default WinnersToggler;
