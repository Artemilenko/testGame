import axios from 'axios';

export const get = async (url) => {
  const result = await axios(url);

  return await result;
}