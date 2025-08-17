import imgDireita from '../../assets/fale_conosco/imagem_fale_conosco.png';
import imgEnviar from '../../assets/enviar.svg';
import styles from './styles.module.css';
import Image from 'next/image';

export default async function FaleConosco() {
  return (<main className={styles.main_fale_conosco}>
    <div className={styles.div_superior}>
      <div  className={styles.div_esquerda}>
        <span className={styles.span_titulo}>Fale Conosco:</span>
        <br />
        <input className={styles.input_fale_conosco} name="nome" type="text" placeholder="Seu nome" autoComplete='off' />
        <br />
        <input className={styles.input_fale_conosco}
          name="email"
          type="text"
          placeholder="Seu e-mail para contato"
          autoComplete='off' />
        <br />
        <input className={styles.input_fale_conosco}
          name="telefone"
          type="text"
          placeholder="Seu telefone com DDD"
          autoComplete='off' />
        <br />
        <input className={styles.input_fale_conosco}
          name="cpf"
          type="text"
          placeholder="Seu CPF"
          autoComplete='off' />
        <br />
        <br />
        <span className={styles.span_texto}>Categoria:</span>
        <br />
        <div className={styles.div_checks}>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_duvidas" />
          <label className={styles.label_checks} htmlFor="check_duvidas">
            Dúvidas
          </label>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_problema" />
          <label className={styles.label_checks} htmlFor="check_problema">
            Problema com pedido
          </label>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_reclamacao" />
          <label className={styles.label_checks} htmlFor="check_reclamacao">
            Reclamação
          </label>
        </div><div className={styles.div_checks}>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_sugestao" />
          <label className={styles.label_checks} htmlFor="check_sugestao">
            Sugestão
          </label>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_elogios" />
          <label className={styles.label_checks} htmlFor="check_elogios">
            Elogios
          </label>
          <input className={styles.check_fale_conosco} type="checkbox" id="check_outro" />
          <label className={styles.label_checks} htmlFor="check_outro">
            Outro
          </label>
        </div>
        <br />
        <textarea className={styles.text_area} name="sua_mensagem" placeholder="Sua mensagem..."/>
        <br />
        <br />
        <br />
        <div className={styles.div_botao_enviar}>
          <button className={styles.botao_enviar_mensagem}>
            Enviar mensagem<Image className={styles.img_enviar} src={imgEnviar} alt="Enviar" />
          </button>
        </div>
      </div>
      <div className={styles.div_direita}>
        <Image className={styles.img_direita} src={imgDireita} alt="Imagem contato" />
      </div>
    </div>
    <br /><br /><br /><br />
    <div>
      <span className={styles.span_titulo}>AJUDA - FAQ</span>
      <br /><br />
      <div className={styles.div_texto}>
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
  </main>);
}