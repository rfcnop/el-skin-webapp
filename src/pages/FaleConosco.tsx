import './FaleConosco.css';
import imgDireita from '../assets/fale_conosco/imagem_fale_conosco.png';
import imgEnviar from '../assets/enviar.svg';

export default function FaleConosco() {
  return (
    <main>
      <div className="margem_10 padding_1 div_fale_conosco">
        <div id="div_superior">
          <div id="div_esquerda">
            <span className="fonte_negrito titulo">Fale Conosco:</span>
            <br />
            <input name="nome" type="text" className="fonte_normal inputs" placeholder="Seu nome" />{' '}
            <br />
            <input
              name="email"
              type="text"
              className="fonte_normal inputs"
              placeholder="Seu e-mail para contato"
            />
            <br />
            <input
              name="telefone"
              type="text"
              className="fonte_normal inputs"
              placeholder="Seu telefone com DDD"
            />
            <br />
            <input name="cpf" type="text" className="fonte_normal inputs" placeholder="Seu CPF" />
            <br />
            <br />
            <span className="fonte_normal texto">Categoria:</span>
            <br />
            <div className="fonte_normal texto div_checks">
              <input className="checks" type="checkbox" id="check_duvidas" />
              <label className="label_checks" htmlFor="check_duvidas">
                Dúvidas
              </label>
              <input className="checks" type="checkbox" id="check_problema" />
              <label className="label_checks" htmlFor="check_problema">
                Problema com pedido
              </label>
              <input className="checks" type="checkbox" id="check_reclamacao" />
              <label className="label_checks" htmlFor="check_reclamacao">
                Reclamação
              </label>
            </div><div className="fonte_normal texto div_checks">
              <input className="checks" type="checkbox" id="check_sugestao" />
              <label className="label_checks" htmlFor="check_sugestao">
                Sugestão
              </label>
              <input className="checks" type="checkbox" id="check_elogios" />
              <label className="label_checks" htmlFor="check_elogios">
                Elogios
              </label>
              <input className="checks" type="checkbox" id="check_outro" />
              <label className="label_checks" htmlFor="check_outro">
                Outro
              </label>
            </div>
            <br />
            <textarea name="sua_mensagem" className="fonte_normal inputs" id='mensagem_text_area' placeholder="Sua mensagem..." style={{ height: '140px' }} />
            <br />
            <br />
            <br />
            <div id='div_botao_enviar_mensagem'>
              <button className="fonte_normal botao_enviar_mensagem texto_fale_conosco">Enviar mensagem<img id='img_enviar' src={imgEnviar} alt="Enviar"></img></button>
            </div>
          </div>
          <div id="div_direita">
            <img src={imgDireita} alt="Imagem contato" width="100%" />
          </div>
        </div>
        <br /><br /><br /><br />
        <div>
          <span className="fonte_negrito titulo">AJUDA - FAQ</span>
          <br /><br />
          <div className="fonte_normal texto">
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
          </div>
        </div>
      </div>
    </main>
  );
}
