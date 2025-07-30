import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('O rodapé deve ser renderizado', () => {
  render(<BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
    <Footer />
  </BrowserRouter>);
  expect(screen.getByTestId('footer_footer')).toBeInTheDocument();
});