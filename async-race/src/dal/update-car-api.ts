import { carState } from '../types/state';
import CreateGarage from '../components/create-garage'; // eslint-disable-line import/no-cycle
import { url } from './instance';

const UpdateCaraApi = async (id: string) => {
  const newCar = {
    name: carState.name,
    color: carState.color,
  };

  const response = await fetch(`${url}/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCar),
  });
  const data = await response.json();
  CreateGarage();
  return data;
};
export default UpdateCaraApi;
