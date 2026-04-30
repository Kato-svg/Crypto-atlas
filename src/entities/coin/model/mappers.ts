import type { Coin, CoinMarketApiResponse } from "./types";

export function mapCoinMarketApiResponseToCoin(
  coin: CoinMarketApiResponse,
): Coin {
  return {
    id: coin.id,
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price ?? 0,
    change24h: coin.price_change_percentage_24h ?? 0,
    marketCap: coin.market_cap ?? 0,
    volume: coin.total_volume ?? 0,
    rank: coin.market_cap_rank ?? 0,
  };
}
