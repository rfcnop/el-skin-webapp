import { screen } from '@testing-library/react';
import FaleConosco from './page';
import { renderComTema } from '../../test-utils';

test('Tela "Fale Conosco" deve ser renderizada', async () => {
  renderComTema(await FaleConosco());
  expect(screen.getByText('Fale Conosco:')).toBeInTheDocument();
});