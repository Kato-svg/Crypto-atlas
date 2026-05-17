import { useSearchParams } from "react-router-dom";

import type { Currency } from "../../../shared/types/currency";
import type { FilterMode, SortField } from "../../../shared/types/market";

type MarketParams = {
  search: string;
  currency: Currency;
  sortBy: SortField;
  filterMode: FilterMode;
};

type MarketParamSetters = {
  setSearch: (value: string) => void;
  setCurrency: (value: Currency) => void;
  setSortBy: (value: SortField) => void;
  setFilterMode: (value: FilterMode) => void;
};

export function useMarketParams(): MarketParams & MarketParamSetters {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const currency = (searchParams.get("currency") as Currency) ?? "usd";
  const sortBy = (searchParams.get("sort") as SortField) ?? "market_cap";
  const filterMode = (searchParams.get("filter") as FilterMode) ?? "all";

  function setParam(key: string, value: string) {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    });
  }

  return {
    search,
    currency,
    sortBy,
    filterMode,
    setSearch: (value) => setParam("search", value),
    setCurrency: (value) => setParam("currency", value),
    setSortBy: (value) => setParam("sort", value),
    setFilterMode: (value) => setParam("filter", value),
  };
}
