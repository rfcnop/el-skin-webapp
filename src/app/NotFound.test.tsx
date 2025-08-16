import { screen } from '@testing-library/react';
import NotFound from './not-found';
import { renderComTema } from '../test-utils';

test('Tela "NotFound" deve ser renderizada', () => {
  renderComTema(<NotFound />);
  expect(screen.getByText('Página não encontrada.')).toBeInTheDocument();
});