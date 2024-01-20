   import React from "react";
   import ReactDOM from "react-dom/client";
   import App from "./App.jsx";
   import { BrowserRouter } from "react-router-dom";
   import { UserProvider } from "./providers/index.jsx";
   import { QueryClientProvider, QueryClient } from "react-query";
   import { TecnologiesProvider } from "./providers/TecnologiesContext.jsx";

   const queryclient = new QueryClient();

   ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
         <QueryClientProvider client={queryclient}>
               <BrowserRouter>
                  <UserProvider>
                     <TecnologiesProvider>
                           <App />
                     </TecnologiesProvider>
                  </UserProvider>
               </BrowserRouter>
         </QueryClientProvider>
      </React.StrictMode>
   );
