import { useState, useEffect } from "react";
import { useEffectOnce } from "../../custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CustomersSection = ({ mounted }) => {
  const customersNum = 41;
  const [customers, setCustomers] = useState([]);

  const initializeCustomer = () => {
    // create a list of customers to display
    for (let i = 1; i <= customersNum; i++) {
      setCustomers((customers) => [
        ...customers,
        <div
          className={cx("customers-section__logo-container")}
          key={i + customers.length}
        >
          <img
            className={cx("customers-section__logo")}
            src={`/customers-logo/customer${i}.png`}
            alt={`customer${i}`}
          />
        </div>,
      ]);
    }
  };

  useEffectOnce(() => {
    initializeCustomer();
    initializeCustomer();
  }, []);
  
  return (
    mounted && (
      <div className={cx("customers-section")}>
        <div className={cx("customers-section__title-wrap")}>
          <h2 className={cx("customers-section__title")}>Trusted By</h2>
        </div>
        {/* create an image for every file in customers-logo folder */}
        <div className={cx("customers-section__logos-wrap")}>
          <div className={cx("customers-section__logos-marquee")}>
            {customers}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomersSection;
