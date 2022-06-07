import { createContext, useContext } from "react";
import services from "../data/servicesData.json";

const { servicesData } = services;
const servicesContext = createContext({ title: servicesData[0].title });

export const ServicesContextProvider = ({ children }) => {
  return (
    <servicesContext.Provider value={{ title: servicesData[0].title }}>
      {children}
    </servicesContext.Provider>
  );
}

export const useServicesContext = () => {
  return useContext(servicesContext);
}
