import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portafolio text', () => {
  render(<App />);
  const labelElement = screen.getByText(/Portafolio/i);
  expect(labelElement).toBeInTheDocument();
});
