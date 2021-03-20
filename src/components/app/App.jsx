import React, { Component } from 'react';
import NewsArticleList from '../news/NewsArticleList';
import NewsSearch from '../news/NewsSearch';

export default class App extends Component {
  state = {
    newsArticles: []
  };

  render() {  
    return (
      <div data-testid="display">
        <h1>
        Welcome to the News Searcher!
        </h1>
        <NewsSearch />
        <NewsArticleList newsArticles={this.state.newsArticles}/>
      </div>
    );
  }
}
