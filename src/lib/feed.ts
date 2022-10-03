import axios from 'axios';

export const getFeed = async (filter: string) => {
  const res = await axios.get('/api/rss' + `?filter=${filter}`);
  const data = await res.data[0];

  return data;
};
