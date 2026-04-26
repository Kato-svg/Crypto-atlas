import type { ReactNode } from "react";
import styles from "./MarketLayout.module.scss";

type MarketLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

export function MarketLayout({ left, right }: MarketLayoutProps) {
  return (
    <section className={styles.layout}>
      <div className={styles.leftColumn}>{left}</div>
      <div className={styles.rightColumn}>{right}</div>
    </section>
  );
}
