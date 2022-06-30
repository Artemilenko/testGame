export const get = async (url) => {
  const result = await fetch(url);

  return await result;
} 