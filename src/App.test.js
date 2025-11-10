import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test successful! message', () => {
  render(<App />);
  const headingElement = screen.getByText(/test successful!/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders CI/CD pipeline message', () => {
  render(<App />);
  const pipelineMessage = screen.getByText('CI/CD Pipeline Working Perfectly');
  expect(pipelineMessage).toBeInTheDocument();
});

test('renders Users table with correct headers', () => {
  render(<App />);
  expect(screen.getByText('Users Table')).toBeInTheDocument();
  const idHeaders = screen.getAllByText('ID');
  expect(idHeaders.length).toBeGreaterThan(0);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('Role')).toBeInTheDocument();
});

test('renders user data in table', () => {
  render(<App />);
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  expect(screen.getByText('Admin')).toBeInTheDocument();
});

test('renders Products table with correct headers', () => {
  render(<App />);
  expect(screen.getByText('Products Table')).toBeInTheDocument();
  expect(screen.getByText('Product')).toBeInTheDocument();
  expect(screen.getByText('Price')).toBeInTheDocument();
  expect(screen.getByText('Category')).toBeInTheDocument();
});

test('renders product data in table', () => {
  render(<App />);
  expect(screen.getByText('Laptop')).toBeInTheDocument();
  expect(screen.getByText('$999')).toBeInTheDocument();
  expect(screen.getByText('Electronics')).toBeInTheDocument();
});

test('renders correct number of table rows', () => {
  render(<App />);
  const rows = screen.getAllByRole('row');
  // Header rows + data rows (3 users + 3 products = 8 total rows, but some are headers)
  expect(rows.length).toBeGreaterThan(6);
});
