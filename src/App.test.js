import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Together We Can Make a Difference/i);
  expect(headingElement).toBeInTheDocument();
});