import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [quantity, setQuantity] = useState();

  return (
    <LoginContext.Provider
      value={{ account, setAccount, quantity, setQuantity }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default ContextProvider;
