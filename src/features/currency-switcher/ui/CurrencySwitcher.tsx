import { useSearchParams } from "react-router-dom";

import type { Currency } from "../../../shared/types/currency";

import styles from "./CurrencySwitcher.module.scss";

const CURRENCIES: { value: Currency; label: string }[] = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
];

export function CurrencySwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();
  const current = (searchParams.get("currency") as Currency) ?? "usd";

  function handleSelect(currency: Currency) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("currency", currency);
      return next;
    });
  }

  return (
    <div className={styles.switcher}>
      {CURRENCIES.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`${styles.button} ${current === value ? styles.active : ""}`}
          onClick={() => handleSelect(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
