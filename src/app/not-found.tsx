import styles from './not-found.module.css';

export default async function NotFound() {
  return (
    <main className={styles.not_found}>
      <br />
      <h1>Página não encontrada.</h1>
      <br />
    </main>
  );
}