import React, { createContext, useContext, useState } from "react";

const StateContext = createContext<any>({});

export const ContextProvider = ({ children }: any) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContext;
