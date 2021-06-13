import CreateWinnerPage from './create-winners-page';

const DisplayWinners = () => {
  const raceToDisable: Array<HTMLElement> = Array.from(document.querySelectorAll('.input__block, .buttons__block, .garage__block'));
  const changeToWinners: HTMLElement = document.querySelector('.winners__button');
  const changeToGarage: HTMLElement = document.querySelector('.garage__button');
  const winnersBlock: HTMLElement = document.querySelector('.winners__block');
  const disableGarage = () => {
    raceToDisable.forEach((item: HTMLElement) => {
      item.classList.add('inactive__race');
    });
    CreateWinnerPage();
  };
  const enableGarage = () => {
    winnersBlock.classList.add('inactive__winers');
    raceToDisable.forEach((item: HTMLElement) => {
      item.classList.remove('inactive__race');
    });
  };
  changeToGarage.addEventListener('click', enableGarage);
  changeToWinners.addEventListener('click', disableGarage);
};
export default DisplayWinners;
