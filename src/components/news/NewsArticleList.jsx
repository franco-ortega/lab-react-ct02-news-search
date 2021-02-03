import React, { Component } from 'react';
import NewsArticle from './NewsArticle';

export default class NewsArticleList extends Component {
  render() {
    return (
      <>
        <h2>
            This is a list of news article.
        </h2>
        <NewsArticle />
      </>
    );
  }
}
