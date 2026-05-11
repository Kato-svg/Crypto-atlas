import type { Coin } from "../../../entities/coin";

export function filterCoins(coins: Coin[], query: string): Coin[] {
  const q = query.trim().toLowerCase();
  if (!q) return coins;

  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(q) ||
      coin.symbol.toLowerCase().includes(q),
  );
}
