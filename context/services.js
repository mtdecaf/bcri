import { createContext, useContext, useState } from "react";
import services from "../data/servicesData.json";

const { servicesData } = services;
const servicesContext = createContext({ title: servicesData[0].title });

export const ServicesContextProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(servicesData[0].title);

  return (
    <servicesContext.Provider value={{ title: selectedService }}>
      {children}
    </servicesContext.Provider>
  );
}

export const useServicesContext = () => {
  return useContext(servicesContext);
}
