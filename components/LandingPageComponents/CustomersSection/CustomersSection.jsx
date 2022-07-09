import { useState, useEffect } from "react";
import { useEffectOnce } from "/custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

// constants
const PAUSED = 0;
const RUNNING = 1;

const CustomersSection = ({ mounted }) => {
  const customersNum = 21;
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
        {/* create an image for every file in customers-logo folder */}
        <div className={cx("customers-section__logos-wrap")}>
          <div
            className={cx("customers-section__logos-marquee")}
          >
            <div className={cx("customers-section__logos-row-one")}>
              <div className={cx("customers-section__logos-row-inner-wrap")}>
                {customers.map((customer) => (
                  <div
                    className={cx("customers-section__logo-container")}
                    key={customer}
                  >
                    <img
                      className={cx("customers-section__logo")}
                      src={`/customers-logo/customer${customer}.png`}
                      alt={`customer${customer}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomersSection;
