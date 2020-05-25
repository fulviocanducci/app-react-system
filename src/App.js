import React from "react";

import { useLogged } from "./context";
import { Home, Login } from "./components";

function App() {
  const isLogged = useLogged();
  return <>{isLogged ? <Home /> : <Login />}</>;
}

export default App;
