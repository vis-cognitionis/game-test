import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import MainScreen from "./src/view/screens/main_screen";
import AppProvider from "./src/view-model/app_context";
import { queryClient } from "./src/queries/query_client";

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <MainScreen />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
