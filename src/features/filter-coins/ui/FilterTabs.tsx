import { useSearchParams } from "react-router-dom";

import type { FilterMode } from "../../../shared/types/market";

import styles from "./FilterTabs.module.scss";

const MODES: { value: FilterMode; label: string }[] = [
  { value: "all", label: "All" },
  { value: "gainers", label: "Gainers" },
  { value: "losers", label: "Losers" },
];

export function FilterTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = (searchParams.get("filter") as FilterMode) ?? "all";

  function handleSelect(mode: FilterMode) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("filter", mode);
      return next;
    });
  }

  return (
    <div className={styles.tabs}>
      {MODES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          data-mode={value}
          className={`${styles.tab} ${current === value ? styles.active : ""}`}
          onClick={() => handleSelect(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
