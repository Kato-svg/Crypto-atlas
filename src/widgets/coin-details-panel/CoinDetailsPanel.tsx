import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import type { Coin } from "../../entities/coin";
import { getCoinMarketChart } from "../../entities/coin";
import {
  formatCompactCurrency,
  formatCurrency,
  formatPercent,
} from "../../shared/lib/formatters";
import type { Currency } from "../../shared/types/currency";
import { CoinPriceChart } from "./CoinPriceChart";
import styles from "./CoinDetailsPanel.module.scss";

type Period = 1 | 7 | 30;

const PERIODS: { value: Period; label: string }[] = [
  { value: 1, label: "24h" },
  { value: 7, label: "7d" },
  { value: 30, label: "30d" },
];

type CoinDetailsPanelProps = {
  coin: Coin | undefined;
  currency: Currency;
};

export function CoinDetailsPanel({ coin, currency }: CoinDetailsPanelProps) {
  const [days, setDays] = useState<Period>(1);

  const chartQuery = useQuery({
    queryKey: ["coin-chart", coin?.id, currency, days],
    queryFn: () => getCoinMarketChart(coin!.id, currency, days),
    enabled: !!coin?.id,
  });

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
        <div className={styles.coinMeta}>
          {coin.image && (
            <img
              src={coin.image}
              alt={coin.name}
              className={styles.coinIcon}
              width={48}
              height={48}
            />
          )}
          <div>
            <p className={styles.label}>Selected coin</p>
            <h2 className={styles.title}>
              {coin.name} <span className={styles.symbol}>{coin.symbol}</span>
            </h2>
          </div>
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

      {chartQuery.isPending && (
        <div className={styles.chartLoading}>Loading chart...</div>
      )}
      {chartQuery.isError && (
        <div className={styles.chartLoading}>Failed to load chart</div>
      )}
      {chartQuery.data && (
        <div className={styles.chartArea}>
          <CoinPriceChart data={chartQuery.data} currency={currency} days={days} />
        </div>
      )}

      <div className={styles.periods}>
        {PERIODS.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.periodButton} ${days === value ? styles.periodButtonActive : ""}`}
            type="button"
            onClick={() => setDays(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
