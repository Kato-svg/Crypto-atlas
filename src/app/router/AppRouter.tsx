import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CoinsPage } from "../../pages/coins-page";
import { NotFoundPage } from "../../pages/not-found-page";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoinsPage />} />
        <Route path="/coin/:id" element={<CoinsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
