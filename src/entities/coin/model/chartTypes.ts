export type ChartPoint = {
  timestamp: number;
  price: number;
};

export type CoinMarketChartApiResponse = {
  prices: [number, number][];
};
