import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <a href="/">
        <i className="fa-solid fa-list-check"></i>
      </a>
      <ul className={styles.navList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/favorite">Favorite</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
