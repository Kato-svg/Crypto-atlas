import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCoinsMarkets } from "../../entities/coin";

import { EmptyState } from "../../shared/ui/empty-state";
import { ErrorMessage } from "../../shared/ui/error-message";
import { Loader } from "../../shared/ui/loader";
import { CoinDetailsPanel, CoinsList, MarketLayout } from "../../widgets";
import type { Currency } from "../../shared/types/currency";

const DEFAULT_CURRENCY: Currency = "usd";
const COINS_LIMIT = 50;

function CoinsPage() {
  const { id } = useParams<{ id: string }>();

  const coinsQuery = useQuery({
    queryKey: ["coins", DEFAULT_CURRENCY, COINS_LIMIT],
    queryFn: () => getCoinsMarkets(DEFAULT_CURRENCY, COINS_LIMIT),
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

  const defaultCoin = coins[0];

  const selectedCoin = id ? coins.find((coin) => coin.id === id) : defaultCoin;

  const activeCoinId = selectedCoin?.id ?? null;

  return (
    <MarketLayout
      left={
        <CoinsList
          coins={coins}
          activeCoinId={activeCoinId}
          currency={DEFAULT_CURRENCY}
        />
      }
      right={
        <CoinDetailsPanel coin={selectedCoin} currency={DEFAULT_CURRENCY} />
      }
    />
  );
}

export default CoinsPage;
