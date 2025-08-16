import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import About from './page';
import { renderComTema } from '../../test-utils';

test('Tela "Sobre" deve ser renderizada', () => {
  renderComTema(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <About />
    </BrowserRouter>);
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
});