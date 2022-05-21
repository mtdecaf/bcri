import { useRef, useEffect, useState } from "react";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CustomersSection = () => {
  const customersNum = 29;
  const customers = [];
  const customersRef = useRef(null);

  const createCustomer = () => {
    for (let i = 1; i <= customersNum; i++) {
      customers.push(
        <div
        className={cx("customers-section__logo-container")}
        key={i}
        >
          <img
            className={cx("customers-section__logo")}
            ref={customersRef}
            src={`/customers-logo/customer${i}.png`}
            alt={`customer${i}`}
            />
        </div>
      );
    }
  };

  return (
    <div className={cx("customers-section")}>
      <div className={cx("customers-section__title-wrap")}>
        <h2 className={cx("customers-section__title")}>Trusted By</h2>
      </div>
      {/* create an image for every file in customers-logo folder */}
      <div className={cx("customers-section__logos-wrap")}>
        {createCustomer()}
        {customers}
      </div>
    </div>
  );
};

export default CustomersSection;
