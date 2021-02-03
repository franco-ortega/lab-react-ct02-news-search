export const getNewsArticles = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${searchIput}&apiKey=${process.env.API_KEY}`)
    .then(res => res.json())
    .then(json => json.artciles);
};
