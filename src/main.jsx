import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./routing/routing";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <Routing />
  </StrictMode>
);
