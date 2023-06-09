import React from "react";
import { LogBox } from "react-native";
import { QueryClientProvider } from "@tanstack/react-query";

import MainScreen from "./src/view/screens/main_screen";
import AppProvider from "./src/state/app_context";
import { queryClient } from "./src/data/query_client";

function App() {
  LogBox.ignoreAllLogs(true);

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <MainScreen />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
