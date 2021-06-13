import { url } from './instance';

const GetWinnerApi = async (id: string) => {
  const response = await fetch(`${url}/winners/${id}`, {
    method: 'GET',
  });
  const greeting = await response.json();
  return greeting;
};
export default GetWinnerApi;
