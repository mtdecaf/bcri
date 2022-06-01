import { useState, useEffect, useRef } from "react";
import { useEffectOnce } from "../../custom_hooks/useEffectOnce";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const CustomersSection = ({ mounted }) => {
  const customersNum = 41;
  const [customers, setCustomers] = useState([]);
  const [selectedSubgroup, setSelectedSubgroup] = useState(0);

  const createCustomer = () => {
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
    createCustomer();
    createCustomer();
  }, []);

  // timeout subgroup change
  useEffect(() => {
    if (selectedSubgroup > 0) {
      setTimeout(() => {
        setSelectedSubgroup(0);
      }, 5000);
    }
  }, [selectedSubgroup]);

  const handleSubgroupClick = (subgroup) => {
    if (subgroup === selectedSubgroup) {
      setSelectedSubgroup(0);
    } else {
      setSelectedSubgroup(subgroup);
    }
  };

  // styles for the subgroups
  const subgroupOneStyle = {
    backgroundColor: selectedSubgroup === 1 ? "rgb(94, 94, 94)" : "",
  };
  const subgroupTwoStyle = {
    backgroundColor: selectedSubgroup === 2 ? "rgb(94, 94, 94)" : "",
  };
  const subgroupThreeStyle = {
    backgroundColor: selectedSubgroup === 3 ? "rgb(94, 94, 94)" : "",
  };
  const subgroupFourStyle = {
    backgroundColor: selectedSubgroup === 4 ? "rgb(94, 94, 94)" : "",
  };

  const marqueeDynamicSyle = {
    // animationPlayState: selectedSubgroup > 0 ? "paused" : "",
    // translateX is used to move the marquee
    animation: selectedSubgroup > 0 ? "marquee 0.5s linear infinite" : "",
  };

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
            style={marqueeDynamicSyle}
          >
            {customers}
          </div>
          <div className={cx("customers-section__selector-wrap")}>
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
          </div>
        </div>
      </div>
    )
  );
};

export default CustomersSection;
