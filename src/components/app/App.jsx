import React from 'react';
import NewsArticleList from '../news/newsArticleList';
import NewsSearch from '../news/newsSearch';

export default function App() {
  return (
    <>
      <h1>
        Welcome to the News Articles site!
      </h1>
      <NewsSearch />
      <NewsArticleList />
    </>
  );
}
