import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Credible Chain header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Credible Chain/i);
  expect(headerElement).toBeInTheDocument();
});