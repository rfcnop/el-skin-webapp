import { screen } from '@testing-library/react';
import NotFound from './not-found';
import { renderComTema } from '../test-utils';

test('Tela "NotFound" deve ser renderizada', async () => {
  renderComTema(await NotFound());
  expect(screen.getByText('Página não encontrada.')).toBeInTheDocument();
});