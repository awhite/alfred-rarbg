const axios = require('axios');

const searchUrl = 'https://apwhite.dev/rarbg/v1/search'

async function search(query, options = {}) {
  const res = await axios.get(searchUrl, {
    params: {
      query,
      ...options,
    }
  });

  return res.data.map(x => ({
    title: x.title,
    subtitle: x.subtitle,
    arg: x.link,
  }));
}

const alfredRarbgClient = {
  search
};

module.exports = alfredRarbgClient;
