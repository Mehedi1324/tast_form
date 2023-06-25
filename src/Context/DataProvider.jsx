import React from 'react';
import { createContext, useContext } from 'react';
import useData from './useData';
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const allContext = useData();
  return (
    <DataContext.Provider value={allContext}>{children}</DataContext.Provider>
  );
};

export const travelersData = () => {
  return useContext(DataContext);
};

export default DataProvider;
