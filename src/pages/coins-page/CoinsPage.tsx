import { useParams } from "react-router-dom";
import { CoinDetailsPanel, CoinsList, MarketLayout } from "../../widgets";
import { mockCoins } from "../../entities/coin/model";

function CoinsPage() {
  const { id } = useParams();
  const defaultCoin = mockCoins[0];

  const selectedCoin = id
    ? mockCoins.find((coin) => coin.id === id)
    : defaultCoin;

  const activeCoin = selectedCoin?.id ?? null;
  return (
    <MarketLayout
      left={<CoinsList coins={mockCoins} activeCoinId={activeCoin} />}
      right={<CoinDetailsPanel coin={selectedCoin} />}
    />
  );
}

export default CoinsPage;
