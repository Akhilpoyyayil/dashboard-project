import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store/";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@material-ui/core/";
import theme from "../theme/theme";
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
