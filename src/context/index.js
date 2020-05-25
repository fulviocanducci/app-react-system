import React, { createContext, useState, useContext, useEffect } from "react";

export const SystemContext = createContext();

export default function SystemProvider({ children }) {
  const tokenName = "@token";

  const [token, setToken] = useState(() => {
    return window.localStorage.getItem(tokenName);
  });

  useEffect(() => {
    (() => {
      console.log("Init App ...");
    })();
  }, []);

  useEffect(() => {
    function handleLogged() {
      if (token === null) {
        window.localStorage.removeItem(tokenName);
      } else {
        window.localStorage.setItem(tokenName, token);
      }
    }
    handleLogged();
  }, [token]);

  return (
    <SystemContext.Provider value={{ token, setToken }}>
      {children}
    </SystemContext.Provider>
  );
}

export const useLogged = () => {
  const context = useContext(SystemContext);
  const { token } = context;
  return token != null;
};
export const useToken = () => {
  const context = useContext(SystemContext);
  const { token, setToken } = context;
  return [token, setToken];
};
