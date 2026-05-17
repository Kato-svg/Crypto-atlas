import type { Coin } from "../../../entities/coin";
import type { FilterMode } from "../../../shared/types/market";

export function applyFilterMode(coins: Coin[], mode: FilterMode): Coin[] {
  if (mode === "gainers") {
    return coins
      .filter((c) => c.change24h > 0)
      .sort((a, b) => b.change24h - a.change24h);
  }

  if (mode === "losers") {
    return coins
      .filter((c) => c.change24h < 0)
      .sort((a, b) => a.change24h - b.change24h);
  }

  return coins;
}
