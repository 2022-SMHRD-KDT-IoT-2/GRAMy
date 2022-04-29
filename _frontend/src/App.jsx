import React, { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./GlobalStyles";

export const AppContext = React.createContext();

const App = () => {
  const [terms, setTerms] = useState({
    modal1: false,
    modal2: false,
    modal3: false,
  });

  return (
    <>
      <AppContext.Provider value={{ terms, setTerms }}>
        <GlobalStyle />
        <Router />
      </AppContext.Provider>
    </>
  );
};

export default App;
