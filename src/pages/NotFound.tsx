import styled from 'styled-components';

export default function NotFound() {
  return (
    <MainNotFound>
      <br />
      <h1>Página não encontrada.</h1>
      <br />
    </MainNotFound>
  );
}

const MainNotFound = styled.main`
    margin-left: 10%;
    margin-right: 10%;
    padding-left: 1%;
    padding-right: 1%;
    background-color: ${ ({theme}) => theme.cores.background.primaria };
`;