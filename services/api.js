import axios from 'axios';

const API_KEY = '7ffea8fb-6981-43ad-beb2-7bbf3f5ee022';

const api = axios.create({
  baseURL: 'https://eventregistry.org/api/v1/',
});

// Interceptor para adicionar a API KEY automaticamente
api.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = {
      apiKey: API_KEY,
      ...config.data, // mantém os parâmetros que você enviar
    };
  }
  return config;
});

export default api;
