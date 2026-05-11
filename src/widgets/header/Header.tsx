import { CurrencySwitcher } from "../../features/currency-switcher";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Crypto Atlas</h1>
        <p className={styles.subtitle}>Market overview</p>
      </div>

      <div className={styles.actions}>
        <CurrencySwitcher />
      </div>
    </header>
  );
}

export default Header;
