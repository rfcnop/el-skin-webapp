import { render, screen } from '@testing-library/react';
import FaleConosco from './FaleConosco';

test('Tela "Fale Conosco" deve ser renderizada', () => {
  render(<FaleConosco />);
  expect(screen.getByText('Fale Conosco:')).toBeInTheDocument();
});