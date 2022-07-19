import styles from "./GuaranteeCards.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const GuaranteeCard = ({ cardData }) => {
  return (
    <div className={cx("guarantee-cards")}>
      {cardData.map((data, key) => {
        return (
          <div className={cx("guarantee-cards__item")} key={key}>
            {data.icon}
            <h2 className={cx("guarantee-cards__item-title")}>{data.title}</h2>
            <p className={cx("guarantee-cards__item-content")}>{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GuaranteeCard;
