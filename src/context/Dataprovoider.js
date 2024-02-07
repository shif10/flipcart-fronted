// Dataprovoider.js

import React, { createContext, useState } from "react";

const DataContext = createContext(null);

const Dataprovider = ({ children }) => {
  const [account, setAccount] = useState(null);

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, Dataprovider };
