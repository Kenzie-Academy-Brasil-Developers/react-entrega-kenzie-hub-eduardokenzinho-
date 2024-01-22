import { useState } from "react";
import { RoutesMain } from "./routes";
import "./styles/index.scss";

function App() {
   const [user, setUser] = useState();
   return (
      <>
               <RoutesMain user={user} setUser={setUser} />
      </>
   );
}

export default App;
