import { url } from './url';

const WordsApi = {
  postWord: async (body: any, name: any, set: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${set}/game`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  getWords: async (name: any, set: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${set}/game`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  updateWord: async (body: any, name: any, set: any, _id: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${set}/game/${_id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  deleteWord: async (name: any, set: any, _id: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${set}/game/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};
export default WordsApi;
