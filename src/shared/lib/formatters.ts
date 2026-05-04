import type { Currency } from "../types/currency";

export function formatCurrency(value: number, currency: Currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    maximumFractionDigits: value < 1 ? 6 : 2,
  }).format(value);
}

export function formatCompactCurrency(
  value: number,
  currency: Currency = "usd",
) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}
