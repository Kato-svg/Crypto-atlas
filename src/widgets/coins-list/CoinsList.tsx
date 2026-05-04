import { Link } from "react-router-dom";

import type { Coin } from "../../entities/coin";
import { formatCurrency, formatPercent } from "../../shared/lib/formatters";
import type { Currency } from "../../shared/types";
import styles from "./CoinsList.module.scss";

type CoinsListProps = {
  coins: Coin[];
  activeCoinId: string | null;
  currency: Currency;
};

export function CoinsList({ coins, activeCoinId, currency }: CoinsListProps) {
  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Market</h2>
          <p className={styles.subtitle}>Top crypto assets</p>
        </div>
      </div>

      <div className={styles.searchPlaceholder}>Search coin...</div>

      <div className={styles.filters}>
        <button className={styles.filterButton} type="button">
          All
        </button>
        <button className={styles.filterButton} type="button">
          Gainers
        </button>
        <button className={styles.filterButton} type="button">
          Losers
        </button>
      </div>

      <ul className={styles.list}>
        {coins.map((coin) => {
          const isActive = activeCoinId === coin.id;

          return (
            <li className={styles.item} key={coin.id}>
              <Link
                className={`${styles.coinButton} ${
                  isActive ? styles.active : ""
                }`}
                to={`/coin/${coin.id}`}
                aria-current={isActive ? "page" : undefined}
              >
                <div>
                  <p className={styles.coinName}>
                    #{coin.rank} {coin.name}
                  </p>
                  <p className={styles.coinSymbol}>{coin.symbol}</p>
                </div>

                <div className={styles.coinInfo}>
                  <p className={styles.price}>
                    {formatCurrency(coin.price, currency)}
                  </p>
                  <p
                    className={`${styles.change} ${
                      coin.change24h >= 0 ? styles.positive : styles.negative
                    }`}
                  >
                    {formatPercent(coin.change24h)}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
