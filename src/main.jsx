import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/css/index.css";
import "../public/css/styles.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/clfy8sv6w6d7y01uofnlm1eo5/master",
  cache: new InMemoryCache(),
});

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <ToastContainer rtl={true} position={"top-right"} theme={"colored"} />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
