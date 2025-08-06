import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import tema from './styles/theme';

export function renderComTema(ui: React.ReactNode) {
  render(
    <ThemeProvider theme={tema}>
      { ui }
    </ThemeProvider>
  );
}