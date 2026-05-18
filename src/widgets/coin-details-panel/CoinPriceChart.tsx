import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ChartPoint } from "../../entities/coin";
import { formatCurrency } from "../../shared/lib/formatters";
import type { Currency } from "../../shared/types/currency";

type Props = {
  data: ChartPoint[];
  currency: Currency;
  days: number;
};

function formatAxisPrice(value: number, currency: Currency): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatXTick(timestamp: number, days: number): string {
  const date = new Date(timestamp);
  if (days === 1) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function CoinPriceChart({ data, currency, days }: Props) {
  const step = Math.max(1, Math.ceil(data.length / 60));
  const sampled = data.filter((_, i) => i % step === 0 || i === data.length - 1);

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={sampled} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(ts) => formatXTick(ts as number, days)}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tickFormatter={(v) => formatAxisPrice(v as number, currency)}
          tick={{ fill: "#9ca3af", fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          width={72}
          domain={["auto", "auto"]}
        />
        <Tooltip
          contentStyle={{
            background: "#252b38",
            border: "1px solid #2e3545",
            borderRadius: 12,
            fontSize: 13,
          }}
          labelFormatter={(ts) => new Date(ts as number).toLocaleString()}
          formatter={(value) => [formatCurrency(value as number, currency), "Price"]}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#c4b5fd"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: "#c4b5fd", strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
