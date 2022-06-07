import { createContext, useContext, useState } from "react";
import services from "../data/servicesData.json";

const { servicesData } = services;
const servicesContext = createContext(servicesData[0].title);

export const ServicesContextProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState();
  !selectedService && setSelectedService(servicesData[0].title);
  const handleServiceSelected = (title) => {
    setSelectedService(title);
  };
  return (
    <servicesContext.Provider value={{selectedService, handleServiceSelected}}>
      {children}
    </servicesContext.Provider>
  );
}

export const useServicesContext = () => {
  return useContext(servicesContext);
}
