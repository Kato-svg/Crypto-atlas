import type { Coin } from "../../../entities/coin";
import type { SortField } from "../../../shared/types/market";

export function sortCoins(coins: Coin[], sortBy: SortField): Coin[] {
  return [...coins].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return b.price - a.price;
      case "change24h":
        return b.change24h - a.change24h;
      case "name":
        return a.name.localeCompare(b.name);
      case "market_cap":
      default:
        return b.marketCap - a.marketCap;
    }
  });
}
