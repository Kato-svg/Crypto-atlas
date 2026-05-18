import { apiClient } from "../../../shared/api/client";
import type { Currency } from "../../../shared/types/currency";
import type { ChartPoint, CoinMarketChartApiResponse } from "../model/chartTypes";

export async function getCoinMarketChart(
  coinId: string,
  currency: Currency,
  days: number,
): Promise<ChartPoint[]> {
  const searchParams = new URLSearchParams({
    vs_currency: currency,
    days: String(days),
  });

  const data = await apiClient<CoinMarketChartApiResponse>(
    `/coins/${coinId}/market_chart?${searchParams.toString()}`,
  );

  return data.prices.map(([timestamp, price]) => ({ timestamp, price }));
}
