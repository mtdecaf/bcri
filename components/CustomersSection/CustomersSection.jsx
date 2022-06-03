import { useState, useEffect, useRef } from "react";
import { useEffectOnce } from "../../custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const CustomersSection = ({ mounted }) => {
  const customersNum = 41;
  const [customers, setCustomers] = useState([]);
  const [selectedSubgroup, setSelectedSubgroup] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  // const [clientX , setclientX] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);

  const createCustomerIndex = () => {
    // create a list of customers
    for (let i = 1; i <= customersNum; i++) {
      setCustomers((customers) => [...customers, i]);
    }
  };

  useEffectOnce(() => {
    createCustomerIndex();
    const interval = setInterval(() => {
      setTranslateX((translateX) => translateX - 0.05);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // timeout subgroup change
  useEffect(() => {
    if (selectedSubgroup > 0) {
      setTimeout(() => {
        setSelectedSubgroup(0);
      }, 5000);
    }
  }, [selectedSubgroup]);

  //   const handleSubgroupClick = (subgroup) => {
  //     if (subgroup === selectedSubgroup) {
  //       setSelectedSubgroup(0);
  //     } else {
  //       setSelectedSubgroup(subgroup);
  //     }
  //   };

  // styles for the subgroups
  // const subgroupOneStyle = {
  //   backgroundColor: selectedSubgroup === 1 ? "rgb(94, 94, 94)" : "",
  // };
  // const subgroupTwoStyle = {
  //   backgroundColor: selectedSubgroup === 2 ? "rgb(94, 94, 94)" : "",
  // };
  // const subgroupThreeStyle = {
  //   backgroundColor: selectedSubgroup === 3 ? "rgb(94, 94, 94)" : "",
  // };
  // const subgroupFourStyle = {
  //   backgroundColor: selectedSubgroup === 4 ? "rgb(94, 94, 94)" : "",
  // };

  // reset translateX to 0 when translateX is -100%
  useEffect(() => {
    if (translateX < -100) {
      setTranslateX(0);
    }
  }, [translateX]);
  // console.log(translateX)

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
          {/* <div className={cx("customers-section__selector-wrap")}>
            <span
              className={cx("customers-section__selector")}
              onClick={() => handleSubgroupClick(1)}
              style={subgroupOneStyle}
            ></span>
            <span
              className={cx("customers-section__selector")}
              onClick={() => handleSubgroupClick(2)}
              style={subgroupTwoStyle}
            ></span>
            <span
              className={cx("customers-section__selector")}
              onClick={() => handleSubgroupClick(3)}
              style={subgroupThreeStyle}
            ></span>
            <span
              className={cx("customers-section__selector")}
              onClick={() => handleSubgroupClick(4)}
              style={subgroupFourStyle}
            ></span>
          </div> */}
        </div>
      </div>
    )
  );
};

export default CustomersSection;
