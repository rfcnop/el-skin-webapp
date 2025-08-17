import { screen } from '@testing-library/react';
import About from './page';
import { renderComTema } from '../../test-utils';

test('Tela "Sobre" deve ser renderizada', async () => {
  renderComTema(await About());
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
});