const COINGECKO_API_BASE_URL = import.meta.env.VITE_COINGECKO_API_BASE_URL;
const COINGECKO_API_KEY = import.meta.env.VITE_COINGECKO_API_KEY;

if (!COINGECKO_API_BASE_URL) {
  throw new Error(
    "VITE_COINGECKO_API_BASE_URL is not defined in the environment variables.",
  );
}

if (!COINGECKO_API_KEY) {
  throw new Error(
    "VITE_COINGECKO_API_KEY is not defined in the environment variables.",
  );
}

export const env = {
  COINGECKO_API_BASE_URL,
  COINGECKO_API_KEY,
} as const;
