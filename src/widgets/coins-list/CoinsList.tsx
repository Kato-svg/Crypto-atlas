import { Link, useSearchParams } from "react-router-dom";

import type { Coin } from "../../entities/coin";
import { FilterTabs } from "../../features/filter-coins";
import { SearchCoinsInput } from "../../features/search-coins";
import { SortSelect } from "../../features/sort-coins";
import { EmptyState } from "../../shared/ui/empty-state";
import { formatCurrency, formatPercent } from "../../shared/lib/formatters";
import type { Currency } from "../../shared/types/currency";

import styles from "./CoinsList.module.scss";

type CoinsListProps = {
  coins: Coin[];
  activeCoinId: string | null;
  currency: Currency;
  search: string;
  onSearchChange: (value: string) => void;
};

export function CoinsList({
  coins,
  activeCoinId,
  currency,
  search,
  onSearchChange,
}: CoinsListProps) {
  const [searchParams] = useSearchParams();

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Market</h2>
          <p className={styles.subtitle}>Top crypto assets</p>
        </div>
      </div>

      <SearchCoinsInput value={search} onChange={onSearchChange} />

      <div className={styles.controls}>
        <FilterTabs />
        <SortSelect />
      </div>

      {coins.length === 0 ? (
        <EmptyState
          title="No coins found"
          description={
            search ? `No results for "${search}"` : "No coins in this category"
          }
        />
      ) : (
        <ul className={styles.list}>
          {coins.map((coin) => {
            const isActive = activeCoinId === coin.id;

            return (
              <li className={styles.item} key={coin.id}>
                <Link
                  className={`${styles.coinButton} ${isActive ? styles.active : ""}`}
                  to={{
                    pathname: `/coin/${coin.id}`,
                    search: searchParams.toString(),
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className={styles.coinMeta}>
                    {coin.image && (
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className={styles.coinIcon}
                        width={32}
                        height={32}
                      />
                    )}
                    <div>
                      <p className={styles.coinName}>
                        #{coin.rank} {coin.name}
                      </p>
                      <p className={styles.coinSymbol}>{coin.symbol}</p>
                    </div>
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
      )}
    </section>
  );
}
