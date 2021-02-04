import React, { Component } from 'react';
import { getNewsArticles } from '../../services/newsApi';
import NewsArticleList from './newsArticleList';

export default class NewsSearch extends Component {
  state = {
    searchTerm: 'news',
    newsArticles: [],
    loading: false
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  handleSearchTermSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;

    this.setState({ loading: true });

    getNewsArticles(searchTerm)
      .then(newsArticles => this.setState({ newsArticles, loading: false }));
  }

  render() {
    console.log(this.state.newsArticles);
    return (
      <>
        Search for news articles:
        <form onSubmit={this.handleSearchTermSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="search the news"
            value={this.state.searchTerm} />
          <button>Search</button>
        </form>
        <NewsArticleList newsArticles={this.state.newsArticles}/>
      </>
    );
  }
}
