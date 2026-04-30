import { apiClient } from "../../../shared/api/client";
import type { Coin } from "../model/types";
import { mapCoinMarketApiResponseToCoin } from "../model/mappers";
import type { CoinMarketApiResponse } from "../model/types";

type Currency = "usd" | "eur";

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
