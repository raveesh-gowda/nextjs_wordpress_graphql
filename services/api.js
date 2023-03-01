import axios from 'axios';

const baseURL = process.env.SERVER;

const client = axios.create({
  baseURL,
  maxBodyLength: Infinity,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = async (config) => {
  try {
    const res = await client({ ...config });
    return res.data.data;
  } catch (err) {
    return await Promise.reject(err.response);
  }
};
