import { useState, useEffect } from "react";
import { useEffectOnce } from "/custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

// constants
const PAUSED = 0;
const RUNNING = 1;

const CustomersSection = ({ mounted }) => {
  const customersNum = 24;
  const [customers, setCustomers] = useState([]);
  const createCustomerIndex = () => {
    // create a list of customers
    for (let i = 1; i <= customersNum; i++) {
      setCustomers((customers) => [...customers, i]);
    }
  };

  useEffectOnce(() => {
    createCustomerIndex();
  }, []);

  return (
    mounted && (
      <div className={cx("customers-section")}>
        <div className={cx("customers-section__inner-wrap")}>
          <div className={cx("customers-section__desc-outter-wrap")}>
            <div className={cx("customers-section__desc-container")}>
              <h3 className={cx("customers-section__desc")}>PROPERTIES WHO TRUST BCRI</h3>
            </div>
          </div>
          <div className={cx("customers-section__grid")}>
            {customers.map((customer) => (
              <div
                className={cx("customers-section__logo-wrap")}
                key={customer}
              >
                <img
                  className={cx("customers-section__logo")}
                  src={`/customers-logo/customer${customer}.png`}
                  alt={`customer${customer}`}
                  onError={(event) => event.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default CustomersSection;
