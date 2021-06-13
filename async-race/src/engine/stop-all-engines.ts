const StopAllEngines = () => {
  const activeStop: HTMLElement = document.querySelector('.buttons__block_2');
  const stopRaceHeandler = () => {
    const allCarsButton: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_engine-1'));
    const allCars: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__main'));
    allCarsButton.forEach((item: HTMLElement) => {
      item.style.color = 'green';
      item.style.pointerEvents = 'all';
    });
    allCars.forEach((item: HTMLElement) => {
      item.style.left = '0%';
      item.style.transform = 'rotate(0deg)';
      item.style.transform = 'translate(50px, -30px)';
    });
  };
  activeStop.addEventListener('click', stopRaceHeandler);
};
export default StopAllEngines;
