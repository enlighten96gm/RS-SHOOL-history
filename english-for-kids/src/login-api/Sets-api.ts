import { url } from './url';

const SetsApi = {
  postSet: async (body: any, name: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  getSets: async (name: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  updateSet: async (body: any, _id: any, name: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${_id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    return data;
  },
  deleteSet: async (_id: any, name: any) => {
    const response = await fetch(`${url}/api/users/${name}/sets/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};
export default SetsApi;
