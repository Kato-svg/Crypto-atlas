import { env } from "../config";

export async function apiClient<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${env.COINGECKO_API_BASE_URL}${endpoint}`, {
    headers: {
      "x-cg-demo-api-key": env.COINGECKO_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed with status ${response.status}: ${response.statusText}`,
    );
  }

  return response.json();
}
