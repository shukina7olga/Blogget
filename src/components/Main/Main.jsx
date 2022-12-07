import style from './Main.module.css';
import Layout from '../Layout';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <div className={style.gridContainer}>
        <h2>Привет мир</h2>
      </div>
    </Layout>
  </main>
);
