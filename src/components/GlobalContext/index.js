import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [allProducts, setAllProducts] = useState();
  const [chosenProduct, setChosenProduct] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        allProducts,
        setAllProducts,
        chosenProduct,
        setChosenProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
