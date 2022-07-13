import styles from "./IntroSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const IntroSection = () => {
  return (
    <section className={cx("intro-section")}>
      <div className={cx("intro-section__inner-wrap")}>
        <h3 className={cx("intro-section__title")}>PROVIDING PEACE OF MIND</h3>
        <p className={cx("intro-section__text")}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ul
          iriu feugiat nulla facilisis at vero. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
          veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        </p>
        <button className={cx("intro-section__button", "blue-button")}>WHAT WE DO</button>
      </div>
    </section>
  );
};

export default IntroSection;