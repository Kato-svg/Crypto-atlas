import styles from "./CoinDetailsPanel.module.scss";
import type { Coin } from "../../entities/coin";

type CoinDetailsPanelProps = {
  coin: Coin | undefined;
};

export function CoinDetailsPanel({ coin }: CoinDetailsPanelProps) {
  if (!coin) {
    return (
      <section className={styles.panel}>
        <div className={styles.emptyState}>Coin not found</div>
      </section>
    );
  }

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Selected coin</p>
          <h2 className={styles.title}>{coin.name}</h2>
        </div>

        <div className={styles.priceBlock}>
          <p className={styles.price}>${coin.price}</p>
          <p className={styles.change}>
            {coin.change24h >= 0 ? "+" : ""}
            {coin.change24h}%
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Market cap</span>
          <strong>${coin.marketCap}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Volume</span>
          <strong>${coin.volume}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Rank</span>
          <strong>{coin.rank}</strong>
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
