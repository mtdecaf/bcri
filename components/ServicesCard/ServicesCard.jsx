import Link from "next/link";
import { IoHome, IoDocumentText, IoWaterSharp, IoHammerSharp, IoPeopleSharp } from "react-icons/io5";
import { RiPencilRuler2Fill, RiFilePaper2Fill } from "react-icons/ri";
import styles from "./ServicesCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesCard = ({ icon, title, shortDescription }) => {
  return (
    <div className={cx("services-card")}>
      <div className={cx("services-card__content-wrap")}>
        <div className={cx("services-card__icon-wrap")}>
          {icon === "IoHome" && <IoHome className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "IoDocumentText" && <IoDocumentText className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "RiPencilRuler2Fill" && <RiPencilRuler2Fill className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "RiFilePaper2Fill" && <RiFilePaper2Fill className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "IoWaterSharp" && <IoWaterSharp className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "IoHammerSharp" && <IoHammerSharp className={cx("services-card__icon")} size={64} color={"#a63523"} />}
          {icon === "IoPeopleSharp" && <IoPeopleSharp className={cx("services-card__icon")} size={64} color={"#a63523"} />}
        </div>
        <div className={cx("services-card__title-wrap")}>
          <h1 className={cx("services-card__title")}>{title}</h1>
        </div>
        <div className={cx("services-card__description-wrap")}>
          <p className={cx("services-card__description")}>{shortDescription}</p>
        </div>
      </div>
      <div className={cx("services-card__button-wrap")}>
        <Link href={`/services/${title.replace(/\s/g, "").toLowerCase()}`}>
          <button className={cx("services-card__button", "blue-button")}>
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
