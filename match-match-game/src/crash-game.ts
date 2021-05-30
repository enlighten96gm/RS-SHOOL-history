const GameCrash = (): void => {
  const deleteElement: HTMLElement = document.querySelector('.game__board_cards');
  const timerTIme: HTMLElement = document.querySelector('.game__board_timer');
  deleteElement.innerHTML = '';
  timerTIme.innerHTML = '';
};
export default GameCrash;
