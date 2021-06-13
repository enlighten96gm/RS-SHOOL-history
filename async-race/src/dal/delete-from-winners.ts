import { url } from './instance';

const DeleteFromWinners = async (id: string) => {
  const response = await fetch(`${url}/winners/${id}`, {
    method: 'DELETE',
  });
  const greeting = await response.json();
  return greeting;
};
export default DeleteFromWinners;
