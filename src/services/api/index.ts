import axios, {Method} from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 10000,
});

const useAPI = () => {
  const request = async (endpoint: string, method: Method, params?: any) => {
    const api = await API;
    return api.request({
        url: endpoint,
        method: method,
        data: params,
      });
  };
  
  return {
      request
  };
};

export default useAPI;
