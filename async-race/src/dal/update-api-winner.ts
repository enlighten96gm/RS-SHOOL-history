import { newIdWinTIme } from '../types/id-wins-time';
import GetWinnerApi from './get-winner';
import { url } from './instance';

const UpadtePrevWiner = async (id: string, time: string) => {
  const newTime = parseFloat(time.replace(',', '.').replace(' ', ''));
  await GetWinnerApi(id).then(async (res: newIdWinTIme) => {
    const newInfo = {
      wins: res.wins + 1,
      time: newTime,
    };
    const response = await fetch(`${url}/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInfo),
    });
    const data = await response.json();
    return data;
  });
};
export default UpadtePrevWiner;
