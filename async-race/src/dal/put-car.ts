import CreateGarage from '../components/create-garage';
import { carState } from '../types/state';
import { url } from './instance';

const PutCar = async () => {
  const data = {
    name: carState.name,
    color: carState.color,
  };
  const response = await fetch(`${url}/garage`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const greeting = await response.json();
  CreateGarage();
  return greeting;
};
export default PutCar;
