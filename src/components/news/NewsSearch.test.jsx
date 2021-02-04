import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
// global.fetch = require('node-fetch');

describe('NewsSearch component', () => {
  
  it('creates a search', () => {
    render(<NewsSearch />);

    const display = screen.getByTestId('display');
    const input  = screen.getByLabelTest('Search');

    fireEvent.change(input, {
      target: {
        value: 'cats'
      }
    });

    return waitFor(() => {
      expect(display).toHaveValue('cats');
    });

  });
});
