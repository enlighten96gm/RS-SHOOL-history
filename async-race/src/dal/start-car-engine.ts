import { url } from './instance';

const StartCarApi = async (id: string) => {
  const response = await fetch(`${url}/engine?id=${id}&status=started`, {
    method: 'GET',
  });
  const greeting = await response.json();
  return greeting;
};
export default StartCarApi;
