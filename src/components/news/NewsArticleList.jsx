import React from 'react';
import PropTypes from 'prop-types';
import NewsArticle from './NewsArticle';

const NewsArticleList = ({ newsArticles }) => {
  const articleElements = newsArticles.map(newsArticle => (
    <li key={newsArticle.title + Date.now()}>
      <NewsArticle {...newsArticle}/>
    </li>
  ));

  return (
    <ul>
      {articleElements}
    </ul>
  );
};

NewsArticleList.propTypes = {
  newsArticles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string
  })).isRequired
};

export default NewsArticleList;
