import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState();
  const [sortBy, setSortBy] = useState("");

  return (
    <AppContext.Provider
      value={{ searchValue, setSearchValue, sortBy, setSortBy }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
