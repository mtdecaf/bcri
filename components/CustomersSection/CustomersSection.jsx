import Image from "next/image";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CustomersSection = () => {
  const customersNum = 29;
  const customers = [];
  for (let i = 1; i <= customersNum; i++) {
    console.log("hi")
    customers.push(
      <div className={cx("customers-section__logo-container")} key={i}>
        <Image 
          className={cx("customers-section__logo")}
          src={`/customers-logo/customer${i}.png`}
          alt={`customer${i}`}
          width="100%"
          height="48px"
        />
      </div>
    );
  }

  return (
    <div className={cx("customers-section")}>
      <div className={cx("customers-section__title-wrap")}>
        <h2 className={cx("customers-section__title")}>Trusted By</h2>
      </div>
      {/* create an image for every file in customers-logo folder */}
      <div className={cx("customers-section__logos-wrap")}>
        {customers}
      </div>
    </div>
  );
};

export default CustomersSection;
