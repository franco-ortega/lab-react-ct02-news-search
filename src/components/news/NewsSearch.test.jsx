require ('dotenv').config();
global.fetch = require('node-fetch');
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
  
  it('creates a search', () => {
    render(<NewsSearch />);

    // const display = screen.getByTestId('display');
    const input = screen.getByLabelText('search');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'cats'
      }
    });

    fireEvent.click(button);

    return waitFor(() => {
      expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
    });

  });
});





// import userEvent from '@testing-library/user-event';
//
// const search = screen.getByPlaceholderTest('Search');
// userEvent.type(search, 'cats');

// return waitFor(() => {
//   expect(screen.getByTestId('display')).not.toBeEmptyDOMElement();
// });
