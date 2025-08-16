import { screen } from '@testing-library/react';
import Footer from './Footer';
import { renderComTema } from '../test-utils';

test('O rodapé deve ser renderizado', () => {
  renderComTema(<Footer />);
  expect(screen.getByTestId('footer_footer')).toBeInTheDocument();
});