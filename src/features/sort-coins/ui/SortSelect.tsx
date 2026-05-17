import { useSearchParams } from "react-router-dom";

import type { SortField } from "../../../shared/types/market";

import styles from "./SortSelect.module.scss";

const SORT_OPTIONS: { value: SortField; label: string }[] = [
  { value: "market_cap", label: "Market Cap" },
  { value: "price", label: "Price" },
  { value: "change24h", label: "24h Change" },
  { value: "name", label: "Name" },
];

export function SortSelect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = (searchParams.get("sort") as SortField) ?? "market_cap";

  function handleChange(sortBy: SortField) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("sort", sortBy);
      return next;
    });
  }

  return (
    <select
      className={styles.select}
      value={current}
      onChange={(e) => handleChange(e.target.value as SortField)}
      aria-label="Sort coins by"
    >
      {SORT_OPTIONS.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
