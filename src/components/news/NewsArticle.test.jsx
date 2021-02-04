import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsArticle from './NewsArticle';
// global.fetch = require('node-fetch');

describe('NewsArticle component', () => {
  afterEach(() => cleanup());
  it('renders NewsArticle', () => {
    const { asFragment } = render(<NewsArticle
      title="a title"
      article="this article"
      description="that description" />);
    expect(asFragment()).toMatchSnapshot();
  });

});

