import Image from "next/image";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CustomersSection = () => {
  const customers = [
    "customer1",
    "customer2",
    "customer3",
    "customer4",
    "customer5",
  ];
  return (
    <div className={cx("customers-section")}>
      <div className={cx("customers-section__title-wrap")}>
        <h2 className={cx("customers-section__title")}>Trusted By</h2>
      </div>
      {/* create an image for every file in customers-logo folder */}
      <div className={cx("customers-section__logos-wrap")}>
        {customers.map((customer, index) => {
          return (
            <div className={cx("customers-section__logo-container")} key={index}>
              <Image
                className={cx(
                  "customers-section__logo",
                  `customers-section__logo--${customer}`
                )}
                src={`/customers-logo/${customer}.svg`}
                alt={customer}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomersSection;
