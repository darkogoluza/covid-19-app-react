import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState();
  const [sortBy, setSortBy] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        sortBy,
        setSortBy,
        isDarkTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
