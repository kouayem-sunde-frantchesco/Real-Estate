import axios from 'axios';

const api = axios.create({
  baseURL: 'http://109.199.107.125:5001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
