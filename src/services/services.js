import axios from 'axios';

export const get = async (url) => {
  const result = await axios.get(url);

  return await result;
}