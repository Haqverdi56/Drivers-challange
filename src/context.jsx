import { createContext, useState } from "react";
export const dataContext = createContext(null);

export const DataProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([])

  const values = {
    favorites,
    setFavorites
  };

  return (
    <dataContext.Provider value={values}>
      {children}
    </dataContext.Provider>
  );
};
