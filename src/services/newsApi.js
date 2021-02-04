export const getNewsArticles = async(searchTerm) => {

  // eslint-disable-next-line max-len
  return await fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.API_KEY}`, { headers: { origin: null } })
    .then(res => res.json())
    .then(json => json.articles);
};
