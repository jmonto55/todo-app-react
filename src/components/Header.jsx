import styles from '../sass/Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1>todos</h1>
    <p>Items will persist in the browsers local storage</p>
  </header>
);
export default Header;
