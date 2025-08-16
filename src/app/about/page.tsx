import imagemBottom from '../../assets/sobre/imagem_sobre_bottom.png';
import imagemLeft from '../../assets/sobre/imagem_sobre_left.png';
import imagemRight from '../../assets/sobre/imagem_sobre_right.png';
import imagemFaleConosco from '../../assets/sobre/fale_conosco.svg';
import Link from 'next/link';
import styles from './styles.module.css';

export default function About() {
  return (
    <main className={styles.main_sobre}>
      <div className={styles.div_top_sobre}>
        <div className={styles.div_left}>
          <br />
          <div className={styles.div_titulo}>Sobre a AL SKIN</div>
          <br />
          <div className={styles.div_textao}>
            QUEM SOMOS<br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br />
            <br />
            POR QUE EXISTIMOS?<br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br />
            <br />
            O QUE A GENTE FAZ?<br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br />
          </div>
          <br />
          <img className={styles.img_dente} src={imagemLeft.src} alt='Conta-gotas' />
        </div>
        <div className={styles.div_right}>
          <img className={styles.img_bisnaga} src={imagemRight.src} alt='Bisnaga de plástico' />
          <div className={styles.div_textao}>
            <br />
            <br />
            VAMOS CONVERSAR?<br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            <br />
            <br />
            <br />
          </div>
          <div className={styles.div_link_fale_conosco}>
            <Link className={styles.link_fale_conosco} href='/faleconosco'><img src={imagemFaleConosco.src} alt='Fale conosco' /><div className={styles.texto_fale_conosco}>Fale conosco</div></Link>
          </div>
        </div>
      </div>
      <img className={styles.img_dente} src={imagemBottom.src} alt='Caiu meu dente' />
    </main>
  );
}