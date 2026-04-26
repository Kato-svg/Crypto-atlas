import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Crypto Atlas</h1>
        <p className={styles.subtitle}>Market overview</p>
      </div>

      <div className={styles.actions}>
        <span className={styles.currency}>USD</span>
        <span className={styles.currency}>EUR</span>
      </div>
    </header>
  );
}

export default Header;
