import { Link } from "react-router-dom";
import type { Coin } from "../../entities/coin";
import styles from "./CoinsList.module.scss";

type CoinsListProps = {
  coins: Coin[];
  activeCoinId: string | null;
};

export function CoinsList({ coins, activeCoinId }: CoinsListProps) {
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
        {coins.map((coin) => (
          <li className={styles.item} key={coin.id}>
            <Link
              className={`${styles.coinButton} ${
                activeCoinId === coin.id ? styles.active : ""
              }`}
              to={`/coin/${coin.id}`}
            >
              <div>
                <p className={styles.coinName}>{coin.name}</p>
                <p className={styles.coinSymbol}>{coin.symbol}</p>
              </div>

              <div className={styles.coinInfo}>
                <p className={styles.price}>{coin.price}</p>
                <p
                  className={`${styles.change} ${
                    coin.change24h >= 0 ? styles.positive : styles.negative
                  }`}
                >
                  {coin.change24h >= 0 ? "+" : ""}
                  {coin.change24h}%
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
