import { url } from './instance';

const StopCarApi = async (id: string) => {
  const response = await fetch(`${url}/engine?id=${id}&status=stopped`, {
    method: 'GET',
  });
  const greeting = await response.json();
  return greeting;
};
export default StopCarApi;
