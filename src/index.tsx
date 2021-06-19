import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeContextProvider from "./contexts/ThemeContext";
import { CountryProvider } from "./contexts/CountryContext";


const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <ThemeContextProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeContextProvider>
  </QueryClientProvider>,
  document.getElementById("root")
);
