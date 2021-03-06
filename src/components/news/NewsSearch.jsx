import React, { Component } from 'react';
import { getNewsArticles } from '../../services/newsApi';
import NewsArticleList from './NewsArticleList';

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
    return (
      <>
        {this.loading && <h1>Loading...please wait. Thank you.</h1>}
        Search for news articles:
        <form onSubmit={this.handleSearchTermSubmit}>
          <label htmlFor="search">search</label>
          <input
            id="search"
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
