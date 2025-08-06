import imgDireita from '../assets/fale_conosco/imagem_fale_conosco.png';
import imgEnviar from '../assets/enviar.svg';
import styled from 'styled-components';

export default function FaleConosco() {
  return (
    <MainFaleConosco>
      <DivSuperior>
        <DivEsquerda>
          <SpanTitulo>Fale Conosco:</SpanTitulo>
          <br />
          <InputFaleConosco name="nome" type="text" placeholder="Seu nome" />{' '}
          <br />
          <InputFaleConosco
            name="email"
            type="text"
            placeholder="Seu e-mail para contato"
          />
          <br />
          <InputFaleConosco
            name="telefone"
            type="text"
            placeholder="Seu telefone com DDD"
          />
          <br />
          <InputFaleConosco name="cpf" type="text" placeholder="Seu CPF" />
          <br />
          <br />
          <SpanTexto>Categoria:</SpanTexto>
          <br />
          <DivChecks>
            <CheckFaleConosco type="checkbox" id="check_duvidas" />
            <LabelChecks htmlFor="check_duvidas">
              Dúvidas
            </LabelChecks>
            <CheckFaleConosco type="checkbox" id="check_problema" />
            <LabelChecks htmlFor="check_problema">
              Problema com pedido
            </LabelChecks>
            <CheckFaleConosco type="checkbox" id="check_reclamacao" />
            <LabelChecks htmlFor="check_reclamacao">
              Reclamação
            </LabelChecks>
          </DivChecks><DivChecks>
            <CheckFaleConosco type="checkbox" id="check_sugestao" />
            <LabelChecks htmlFor="check_sugestao">
              Sugestão
            </LabelChecks>
            <CheckFaleConosco type="checkbox" id="check_elogios" />
            <LabelChecks htmlFor="check_elogios">
              Elogios
            </LabelChecks>
            <CheckFaleConosco type="checkbox" id="check_outro" />
            <LabelChecks htmlFor="check_outro">
              Outro
            </LabelChecks>
          </DivChecks>
          <br />
          <TextArea name="sua_mensagem" placeholder="Sua mensagem..."/>
          <br />
          <br />
          <br />
          <DivBotaoEnviar>
            <BotaoEnviarMensagem>
              Enviar mensagem<ImagemEnviar src={imgEnviar} alt="Enviar"></ImagemEnviar>
            </BotaoEnviarMensagem>
          </DivBotaoEnviar>
        </DivEsquerda>
        <DivDireita>
          <img src={imgDireita} alt="Imagem contato" width="100%" />
        </DivDireita>
      </DivSuperior>
      <br /><br /><br /><br />
      <div>
        <SpanTitulo>AJUDA - FAQ</SpanTitulo>
        <br /><br />
        <DivTexto>
          QUEM SOMOS<br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.<br /><br />
          POR QUE EXISTIMOS?
          <br />Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.<br /><br />
          O QUE A GENTE FAZ?<br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.<br /><br />
          QUEM SOMOS<br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.<br /><br />
          POR QUE EXISTIMOS?<br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt.<br /><br />
          O QUE A GENTE FAZ?<br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.<br /><br /><br />
        </DivTexto>
      </div>
    </MainFaleConosco>
  );
}

const MainFaleConosco = styled.main`
  margin-left: 10%;
  margin-right: 10%;
  padding-left: 1%;
  padding-right: 1%;
  background-color: ${ ({theme}) => theme.cores.background.primaria };
`;

const DivSuperior = styled.div`
  display: flex;
  padding-top: 20px;
`;

const DivEsquerda = styled.div`
  width: 50%;
  margin-right: 1%
`;

const SpanTitulo = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.bold };
  font-size: ${ ({theme}) => theme.tamanhoFonte.grande };
  line-height: 30px;

  text-align: center;

  color: ${ ({theme}) => theme.cores.texto.primaria };
`;

const InputFaleConosco = styled.input`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  background: #F5F5F5;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  border: none;

  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.quaternaria };

  margin-top: 10px;
  padding-left: 15px;
  height: 47px;
  width: 90%;
`;

const SpanTexto = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: ${ ({theme}) => theme.fontWeight.normal };
    font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
    line-height: 24px;

    color: ${ ({theme}) => theme.cores.texto.secundaria };
`;

const DivChecks = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckFaleConosco = styled.input`
  box-sizing: border-box;
  border: 1px solid #878787;
`;

const LabelChecks = styled.label`
  padding-right: 15px;
  padding-left: 5px;
`;

const TextArea = styled.textarea`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  background: #F5F5F5;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  border: none;

  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.quaternaria };

  margin-top: 10px;
  padding-left: 15px;
  height: 47px;
  width: 90%;
  padding-top: 10px;
  resize: none;

  height: 140px;
`;

const DivBotaoEnviar = styled.div`
  display: flex;
`;

const BotaoEnviarMensagem = styled.button`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };
  background: #94426E;
  border-radius: ${ ({theme}) => theme.borderRadius.medio };
  border: none;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: center;
  width: 91%;

  cursor: pointer;
  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.terciaria };
`;

const ImagemEnviar = styled.img`
  padding-left: 20px;
`;

const DivDireita = styled.div`
  width: 50%;
  margin-left: 1%
`;

const DivTexto = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${ ({theme}) => theme.fontWeight.normal };

  font-size: ${ ({theme}) => theme.tamanhoFonte.normal };
  line-height: 24px;

  color: ${ ({theme}) => theme.cores.texto.secundaria };
`;
