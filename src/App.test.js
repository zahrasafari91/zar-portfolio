import { render, screen } from '@testing-library/react';
import App from './App';

test('renders work experiences narrative', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /^experience$/i })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole('heading', { name: /^education$/i }).length
  ).toBeGreaterThan(0);
  expect(
    screen.getByRole('heading', { name: /ai\/ml research assistant/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /^publications$/i })
  ).toBeInTheDocument();
});
