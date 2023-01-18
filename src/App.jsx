import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <div className=" bg-gray-800 p-10">
          <Characters />
        </div>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
