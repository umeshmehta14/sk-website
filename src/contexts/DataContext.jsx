import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <DataContext.Provider value={{ hamburger, setHamburger }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
