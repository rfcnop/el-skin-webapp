import { screen } from '@testing-library/react';
import About from './page';
import { renderComTema } from '../../test-utils';

test('Tela "Sobre" deve ser renderizada', () => {
  renderComTema(<About />);
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
});