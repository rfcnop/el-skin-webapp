import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

test('Tela "NotFound" deve ser renderizada', () => {
  render(<NotFound />);
  expect(screen.getByText('Página não encontrada.')).toBeInTheDocument();
});