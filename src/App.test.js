import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test successful! message', () => {
  render(<App />);
  const headingElement = screen.getByText(/test successful!/i);
  expect(headingElement).toBeInTheDocument();
});
