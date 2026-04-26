import styles from "./CoinsList.module.scss";

const mockCoins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$42,300.12",
    change: 3.23,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,009.38",
    change: 2.18,
  },
  {
    name: "Tether",
    symbol: "USDT",
    price: "$1.00",
    change: -0.01,
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: "$417.62",
    change: 1.95,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$98.44",
    change: 4.82,
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: "$0.81",
    change: -0.79,
  },
];

export function CoinsList() {
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
        {mockCoins.map((coin) => (
          <li className={styles.item} key={coin.symbol}>
            <button className={styles.coinButton} type="button">
              <div>
                <p className={styles.coinName}>{coin.name}</p>
                <p className={styles.coinSymbol}>{coin.symbol}</p>
              </div>

              <div className={styles.coinInfo}>
                <p className={styles.price}>{coin.price}</p>
                <p
                  className={`${styles.change} ${
                    coin.change >= 0 ? styles.positive : styles.negative
                  }`}
                >
                  {coin.change >= 0 ? "+" : ""}
                  {coin.change}%
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
