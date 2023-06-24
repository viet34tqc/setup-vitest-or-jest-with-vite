import { render, screen } from '@testing-library/react';
import App from '../App';

describe('test', () => {
  describe('sum module', () => {
    it('adds 1 + 2 to equal 3', () => {
      render(<App />);
      expect(screen.getByText('Vite + React')).toBeDefined();
    });
  });
});
