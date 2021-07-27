import DeleteCarFromApi from '../dal/delete-api-car'; // eslint-disable-line import/no-cycle
import DeleteFromWinners from '../dal/delete-from-winners';

const DeleteCar = () => {
  const deleteButton: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_button2'));
  deleteButton.forEach((item: HTMLElement) => {
    const deleteCarHeandler = (e: Event) => {
      const element = e.target as HTMLElement;
      DeleteCarFromApi(element.id);
      DeleteFromWinners(element.id);
    };
    item.addEventListener('click', deleteCarHeandler);
  });
};
export default DeleteCar;
