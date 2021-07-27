import { url } from './instance';

const GetSingleCar = async (id: string) => {
  const response = await fetch(`${url}/garage/${id}`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
};
export default GetSingleCar;
