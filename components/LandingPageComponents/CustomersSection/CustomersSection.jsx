import { useState, useEffect, useRef } from "react";
import { useEffectOnce } from "../../../custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

// constants
const PAUSED = 0;
const RUNNING = 1;

const CustomersSection = ({ mounted }) => {
  const customersNum = 41;
  const [customers, setCustomers] = useState([]);
  const [selectedSubgroup, setSelectedSubgroup] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [animationState, setAnimationState] = useState(RUNNING);

  const createCustomerIndex = () => {
    // create a list of customers
    for (let i = 1; i <= customersNum; i++) {
      setCustomers((customers) => [...customers, i]);
    }
  };

  useEffectOnce(() => {
    createCustomerIndex();
  }, []);

  // timeout subgroup change
  useEffect(() => {
    if (selectedSubgroup > 0) {
      setTimeout(() => {
        setSelectedSubgroup(0);
      }, 5000);
    }
  }, [selectedSubgroup]);

  // reset translateX to 0 when translateX is -100%
  useEffect(() => {
    if (translateX < -100) {
      setTranslateX(0);
    }
  }, [translateX]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationState === RUNNING) {
        setTranslateX((translateX) => translateX - 0.0035);
      } else if (animationState === PAUSED) {
        setTranslateX((translateX) => translateX);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [animationState]);

  return (
    mounted && (
      <div className={cx("customers-section")}>
        <div className={cx("customers-section__title-wrap")}>
          <h2 className={cx("customers-section__title")}>Trusted By</h2>
        </div>
        {/* create an image for every file in customers-logo folder */}
        <div className={cx("customers-section__logos-wrap")}>
          <div
            className={cx("customers-section__logos-marquee")}
            style={{ transform: `translateX(${translateX}%)` }}
            onMouseEnter={() => setAnimationState(PAUSED)}
            onMouseLeave={() => setAnimationState(RUNNING)}
          >
            <div className={cx("customers-section__logos-row-one")}>
              <div className={cx("customers-section__logos-row-inner-wrap")}>
                {customers.slice(0, 20).map((customer) => (
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
              <div className={cx("customers-section__logos-row-inner-wrap")}>
                {customers.slice(0, 20).map((customer) => (
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
            <div className={cx("customers-section__logos-row-two")}>
              <div className={cx("customers-section__logos-row-inner-wrap")}>
                {customers.slice(20, 41).map((customer) => (
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
              <div className={cx("customers-section__logos-row-inner-wrap")}>
                {customers.slice(20, 41).map((customer) => (
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
