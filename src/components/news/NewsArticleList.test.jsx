import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsArticleList from './NewsArticleList';

describe('NewsArticleList component', () => {
  afterEach(() => cleanup());
  it('renders NewsArticleList', () => {
    const { asFragment } = render(<NewsArticleList newsArticles={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
