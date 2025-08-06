import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import Footer from './Footer';
import { renderComTema } from '../test-utils';

test('O rodapé deve ser renderizado', () => {
  renderComTema(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <Footer />
    </BrowserRouter>);
  expect(screen.getByTestId('footer_footer')).toBeInTheDocument();
});