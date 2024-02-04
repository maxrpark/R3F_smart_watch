import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/App.css";
import { ThreeProvider } from "./context/useThreeContext.tsx";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers/Providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <ThreeProvider>
        <App />
        <Analytics />
      </ThreeProvider>
    </Providers>
  </React.StrictMode>
);
