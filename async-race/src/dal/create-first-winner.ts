import { newWinner } from '../types/winner-type';
import { url } from './instance';

const CreateFirstWinner = async (NewWinnerData: newWinner) => {
  const response = await fetch(`${url}/winners`, {
    method: 'POST',
    body: JSON.stringify(NewWinnerData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const greeting = await response.json();
  return greeting;
};
export default CreateFirstWinner;
