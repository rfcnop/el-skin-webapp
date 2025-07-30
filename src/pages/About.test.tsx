import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import About from './About';

test('Tela "Sobre" deve ser renderizada', () => {
  render(
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <About />
    </BrowserRouter>);
  expect(screen.getByText('Sobre a AL SKIN')).toBeInTheDocument();
});