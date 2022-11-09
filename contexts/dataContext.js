import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataContextProvider = ({ children, data }) => {
  const { projects, areas, skills, experiences, resume } = data;

  return <DataContext.Provider value={{ projects, areas, skills, experiences, resume }}>{children}</DataContext.Provider>;
};
