import { useState } from "react";
import "./styles/index.scss";
import { RoutesMain } from "./Routes";

function App() {
   const [user, setUser] = useState();
   return (
      <>
               <RoutesMain user={user} setUser={setUser} />
      </>
   );
}

export default App;
