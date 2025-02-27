import { createBrowserRouter } from "react-router-dom";
import BuyPage from "./BuyPage";
import Home from "./Home";
import CartSection from "./CartSection";
import WishSection from "./WishSection";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/BuyPage",
      element: <BuyPage />,
    },
    {
      path: "/CartSection",
      element: <CartSection />,
    },
    {
      path: "/WishSection",
      element: <WishSection />,
    },
  ],
  {
    basename: "/electra/", // This tells the router that everything lives under /electra
  }
);
