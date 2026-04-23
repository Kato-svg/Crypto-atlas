const baseUrl = import.meta.env.VITE_COINGECKO_BASE_URL;
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

if (!baseUrl) {
  throw new Error(
    "VITE_COINGECKO_BASE_URL is not defined in the environment variables.",
  );
}

if (!apiKey) {
  throw new Error(
    "VITE_COINGECKO_API_KEY is not defined in the environment variables.",
  );
}

export const env = {
  baseUrl: baseUrl,
  apiKey: apiKey,
};
