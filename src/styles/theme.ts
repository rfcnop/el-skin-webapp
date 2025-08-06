const tema = {
  cores: {
    texto: {
      primaria: '#000',
      secundaria: '#222222',
      terciaria: '#FFF',
      quaternaria: '#878787',
      carrossel: '#94426E',
      promocao: '#DC5E5E'
    },
    background: {
      primaria: '#FFF',
      secundaria: '#F5F5F5',
      terciaria: '#222222',
      promocao: '#DC995E',
      botaoComprar: '#7045F5',
      overlay: 'rgba(0, 0, 0, 0.5)'
    },
  },
  borderRadius: {
    pequeno: '5px',
    medio: '8px'
  },
  tamanhoFonte: {
    minusculo: '13px',
    pequeno: '14px',
    normal: '16px',
    grande: '20px',
    muitoGrande: '24px',
    gigante: '48px'

  },
  fontWeight: {
    normal: 400,
    bold: 700
  }
};

type Tema = typeof tema;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Tema {}
}

export default tema;