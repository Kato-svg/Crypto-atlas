import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { queryClient } from "./providers/query-client";
import AppRouter from "./router/AppRouter";

import { AppLayout } from "../shared/ui/app-layout";
import { Header } from "../widgets/header/Header";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppLayout>
          <Header />
          <AppRouter />
        </AppLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
