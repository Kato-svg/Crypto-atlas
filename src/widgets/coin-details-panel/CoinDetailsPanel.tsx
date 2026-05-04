import type { Coin } from "../../entities/coin";
import {
  formatCompactCurrency,
  formatCurrency,
  formatPercent,
} from "../../shared/lib/formatters";
import type { Currency } from "../../shared/types/currency";
import styles from "./CoinDetailsPanel.module.scss";

type CoinDetailsPanelProps = {
  coin: Coin | undefined;
  currency: Currency;
};

export function CoinDetailsPanel({ coin, currency }: CoinDetailsPanelProps) {
  if (!coin) {
    return (
      <section className={styles.panel}>
        <div className={styles.emptyState}>Coin not found</div>
      </section>
    );
  }

  const isPositiveChange = coin.change24h >= 0;

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <p className={styles.label}>Selected coin</p>
          <h2 className={styles.title}>
            {coin.name} {coin.symbol}
          </h2>
        </div>

        <div className={styles.priceBlock}>
          <p className={styles.price}>{formatCurrency(coin.price, currency)}</p>
          <p
            className={`${styles.change} ${
              isPositiveChange ? styles.positive : styles.negative
            }`}
          >
            {formatPercent(coin.change24h)} 24h
          </p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Market cap</span>
          <strong>{formatCompactCurrency(coin.marketCap, currency)}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Volume</span>
          <strong>{formatCompactCurrency(coin.volume, currency)}</strong>
        </div>

        <div className={styles.statCard}>
          <span className={styles.statLabel}>Rank</span>
          <strong>#{coin.rank}</strong>
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
