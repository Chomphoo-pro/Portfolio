export default async function strapi(url) {
  const axios = require('axios');
  const datas = await axios.get(url)
  
  return datas.data

}
