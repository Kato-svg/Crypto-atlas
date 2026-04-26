import { CoinDetailsPanel } from "../../widgets/coin-details-panel/CoinDetailsPanel";
import { CoinsList } from "../../widgets/coins-list/CoinsList";
import { MarketLayout } from "../../widgets/market-layout/MarketLayout";

function CoinsPage() {
  return <MarketLayout left={<CoinsList />} right={<CoinDetailsPanel />} />;
}

export default CoinsPage;
