import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCoinsMarkets } from "../../entities/coin";
import {
  filterCoins,
  useDebouncedValue,
} from "../../features/search-coins";

import { EmptyState } from "../../shared/ui/empty-state";
import { ErrorMessage } from "../../shared/ui/error-message";
import { Loader } from "../../shared/ui/loader";
import { CoinDetailsPanel, CoinsList, MarketLayout } from "../../widgets";
import { useMarketParams } from "./model/useMarketParams";

const COINS_LIMIT = 50;

function CoinsPage() {
  const { id } = useParams<{ id: string }>();
  const { currency, search, setSearch } = useMarketParams();

  const debouncedSearch = useDebouncedValue(search, 300);

  const coinsQuery = useQuery({
    queryKey: ["coins", currency, COINS_LIMIT],
    queryFn: () => getCoinsMarkets(currency, COINS_LIMIT),
  });

  if (coinsQuery.isPending) {
    return (
      <MarketLayout
        left={
          <Loader
            title="Loading market"
            description="Fetching latest crypto assets..."
          />
        }
        right={
          <Loader
            title="Loading details"
            description="Preparing selected coin data..."
          />
        }
      />
    );
  }

  if (coinsQuery.isError) {
    const message =
      coinsQuery.error instanceof Error
        ? coinsQuery.error.message
        : "Failed to load market data.";

    return (
      <ErrorMessage
        title="Failed to load coins"
        message={message}
        actionLabel="Try again"
        onAction={() => coinsQuery.refetch()}
      />
    );
  }

  const coins = coinsQuery.data;

  if (!coins.length) {
    return (
      <EmptyState
        title="No coins found"
        description="CoinGecko returned an empty market list."
      />
    );
  }

  const visibleCoins = filterCoins(coins, debouncedSearch);

  const defaultCoin = visibleCoins[0] ?? coins[0];
  const selectedCoin = id ? coins.find((coin) => coin.id === id) : defaultCoin;
  const activeCoinId = selectedCoin?.id ?? null;

  return (
    <MarketLayout
      left={
        <CoinsList
          coins={visibleCoins}
          activeCoinId={activeCoinId}
          currency={currency}
          search={search}
          onSearchChange={setSearch}
        />
      }
      right={
        <CoinDetailsPanel coin={selectedCoin} currency={currency} />
      }
    />
  );
}

export default CoinsPage;
