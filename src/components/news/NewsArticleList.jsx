import React, { Component } from 'react'
import newsArticle from './NewsArticle'

export default class NewsArticleList extends Component {
  render() {
    return (
      <>
        <h2>
            This is a list of news articles.
        </h2>
        <newsArticle />
      </>
    );
  }
}
