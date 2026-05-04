import { apiClient } from "../../../shared/api/client";
import type { Currency } from "../../../shared/types/currency";

import { mapCoinMarketApiResponseToCoin } from "../model/mappers";
import type { Coin, CoinMarketApiResponse } from "../model/types";

export async function getCoinsMarkets(
  currency: Currency,
  limit: number,
): Promise<Coin[]> {
  const searchParams = new URLSearchParams({
    vs_currency: currency,
    order: "market_cap_desc",
    per_page: String(limit),
    page: "1",
    sparkline: "false",
    price_change_percentage: "24h",
  });

  const coins = await apiClient<CoinMarketApiResponse[]>(
    `/coins/markets?${searchParams.toString()}`,
  );

  return coins.map(mapCoinMarketApiResponseToCoin);
}
