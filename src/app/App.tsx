import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./providers/query-client";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
