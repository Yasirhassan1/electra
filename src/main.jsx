import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CounterProvider } from "./UseCounter";
import {CartColorChange} from "./CartColorChange";
import { WishProvider } from "./UseWishList";
import "./index.css";
import { router } from "./Router"; // Import the router from a separate file

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <CounterProvider>
        <CartColorChange>
        <WishProvider>
    <RouterProvider router={router} />
    </WishProvider>
    </CartColorChange>
    </CounterProvider>
  </StrictMode>
);
