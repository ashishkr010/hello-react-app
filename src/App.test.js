import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World! message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello World!/i);
  expect(headingElement).toBeInTheDocument();
});
