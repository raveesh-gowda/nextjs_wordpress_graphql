import axios from 'axios';

const baseURL = process.env.SERVER;

const client = axios.create({
  baseURL,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = (config) => {
  return client({ ...config })
    .then((res) => res.data.data)
    .catch((err) => Promise.reject(err.response));
};
