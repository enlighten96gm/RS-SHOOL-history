import { url } from './url';

const LoginApi = {
  postLogin: async (body: any) => {
    const response = await fetch(`${url}/api/users/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
  getSingleLogin: async ({ id }: any) => {
    const response = await fetch(`${url}/api/users/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
  getAllLogin: async () => {
    const response = await fetch(`${url}/api/users/`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
  deleteLogin: async ({ id }: any) => {
    const response = await fetch(`${url}/api/users/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
  putLogin: async ({ id, body }: any) => {
    const response = await fetch(`${url}/api/users/${id}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};
export default LoginApi;
