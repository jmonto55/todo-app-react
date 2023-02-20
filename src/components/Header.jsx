import styles from '../sass/Header.module.scss';

const Header = () => (
  <header style={styles} className={styles.header}>
    <h1>todos</h1>
    <p>Items will persist ini the browser local storage</p>
  </header>
);
export default Header;
