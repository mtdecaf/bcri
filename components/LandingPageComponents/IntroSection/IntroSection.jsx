import styles from "./IntroSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const IntroSection = () => {
  const scrollTo = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <section className={cx("intro-section")}>
      <div className={cx("intro-section__inner-wrap")}>
        <h3 className={cx("intro-section__title")}>
          LET BC ROOF INSPECTIONS CONSULT ON YOUR ROOF TODAY
        </h3>
        <div className={cx("intro-section__text-container")}>
          <p className={cx("intro-section__text")}>
            BC Roof Inspections operates in the Lower Mainland and Fraser
            Valley. We are a full-service inspection and consulting firm founded
            in 2007, with every inspector having more than 20 years of
            experience in the industry to go along with our sterling reputation.
          </p>
          <p className={cx("intro-section__text")}>
            A roof inspection should be done once a year by a third-party,
            qualified roof inspector, to check for wear and damage to the roof.
            It is better and more cost-efficient to maintain your roof, and make
            minor repairs, which will be seen during your roof inspection, to
            maximize the life of your roof, than replace whole areas of your
            roof
          </p>
        </div>
        <button
          className={cx("intro-section__button", "blue-button")}
          onClick={(e) => scrollTo(e, "service-details-section")}
        >
          WHAT WE DO
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
