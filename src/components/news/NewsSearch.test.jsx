require ('dotenv').config();
global.fetch = require('node-fetch');
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {

  it('creates a search', () => {
    render(<NewsSearch />);

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
