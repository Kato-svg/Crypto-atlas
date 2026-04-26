import styles from "./CoinDetailsPanel.module.scss";

export function CoinDetailsPanel() {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Selected coin</p>
          <h2 className={styles.title}>Bitcoin BTC</h2>
        </div>

        <div className={styles.priceBlock}>
          <p className={styles.price}>$42,300.12</p>
          <p className={styles.change}>+3.23% 24h</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Market cap</span>
          <strong>$830B</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Volume</span>
          <strong>$24.8B</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Rank</span>
          <strong>#1</strong>
        </div>
      </div>

      <div className={styles.chartPlaceholder}>Price chart placeholder</div>

      <div className={styles.periods}>
        <button className={styles.periodButton} type="button">
          24h
        </button>
        <button className={styles.periodButton} type="button">
          7d
        </button>
        <button className={styles.periodButton} type="button">
          30d
        </button>
      </div>
    </section>
  );
}
