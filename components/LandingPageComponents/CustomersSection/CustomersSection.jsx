import { useState, useEffect, useCallback } from "react";
import { useEffectOnce } from "/custom_hooks/useEffectOnce";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Image from "next/image";

import styles from "./CustomersSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const CustomersSection = ({ mounted, windowWidth }) => {
  const customersNum = 48;
  const [customers, setCustomers] = useState([]);
  const createCustomerIndex = () => {
    // create a list of customers
    for (let i = 1; i <= customersNum; i++) {
      setCustomers((customers) => [...customers, i]);
    }
  };

  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const PrevButton = ({ onClick }) => (
    <button
      className={cx(
        "customers-section__grid-carousel-button",
        "customers-section__grid-carousel-button--prev"
      )}
      onClick={onClick}
      aria-label="move carousel left"
    >
      <IoChevronBack
        className={cx("customers-section__grid-carousel-button-icon")}
        color="#514c50"
      />
    </button>
  );

  const NextButton = ({ onClick }) => (
    <button
      className={cx(
        "customers-section__grid-carousel-button",
        "customers-section__grid-carousel-button--next"
      )}
      onClick={onClick}
      aria-label="move carousel right"
    >
      <IoChevronForward
        className={cx("customers-section__grid-carousel-button-icon")}
        color="#514c50"
      />
    </button>
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  useEffectOnce(() => {
    createCustomerIndex();
  }, []);

  return (
    mounted && (
      <div className={cx("customers-section")}>
        <div className={cx("customers-section__inner-wrap")}>
          <div className={cx("customers-section__title-wrap")}>
            <h2 className={cx("customers-section__title")}>Our Customers</h2>
            <p className={cx("customers-section__subtitle")}>
              You&apos;re in good company when you choose to work with BC Roof
              Inspections
            </p>
          </div>
          <div className={cx("customers-section__grid-carousel-viewport-wrap")}>
            <PrevButton onClick={scrollPrev} />
            <div
              className={cx("customers-section__grid-carousel-viewport")}
              ref={viewportRef}
            >
              {windowWidth > 768 ? (
                <div className={cx("customers-section__grid-carousel")}>
                  <div className={cx("customers-section__grid")}>
                    {customers.slice(0, 24).map((customer) => (
                      <div
                        className={cx("customers-section__logo-container")}
                        key={customer}
                      >
                        <Image
                          className={cx("customers-section__logo")}
                          src={`/customers-logo/customer${customer}.png`}
                          alt={`customer${customer}`}
                          width={150}
                          height={150}
                          onError={(event) =>
                            (event.target.style.display = "none")
                          }
                          placeholder="empty"
                        />
                      </div>
                    ))}
                  </div>
                  <div className={cx("customers-section__grid")}>
                    {customers.slice(24).map((customer) => (
                      <div
                        className={cx("customers-section__logo-container")}
                        key={customer}
                      >
                        <Image
                          className={cx("customers-section__logo")}
                          src={`/customers-logo/customer${customer}.png`}
                          alt={`customer${customer}`}
                          width={150}
                          height={150}
                          onError={(event) =>
                            (event.target.style.display = "none")
                          }
                          placeholder="empty"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className={cx("customers-section__flex")}>
                  {customers.slice(0, 41).map((customer) => (
                    <div
                      className={cx("customers-section__logo-container")}
                      key={customer}
                    >
                      <Image
                        className={cx("customers-section__logo")}
                        src={`/customers-logo/customer${customer}.png`}
                        alt={`customer${customer}`}
                        width={150}
                        height={150}
                        onError={(event) =>
                          (event.target.style.display = "none")
                        }
                        placeholder="empty"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <NextButton onClick={scrollNext} />
          </div>
        </div>
      </div>
    )
  );
};

export default CustomersSection;
