import React, { Component } from 'react';
import { getNewsArticles } from '../../services/newsApi';

export default class NewsSearch extends Component {
  state = {
    searchTerm: 'news',
    newsArticles: []
  }

  handleChange = ({ target }) => {
    this.setState({ searchTerm: target.value });
  }

  handleSearchTermSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    getNewsArticles(searchTerm)
      .then(newsArticles => this.setState({ newsArticles }));
  }

  render() {
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
      </>
    );
  }
}
