import { createBrowserRouter } from "react-router-dom";
import BuyPage from "./BuyPage";
import Header from "./Header";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/BuyPage",
    element: (
      <>
        <Header />
        <BuyPage />
      </>
    ),
  },
]);
