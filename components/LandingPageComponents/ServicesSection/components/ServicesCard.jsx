import Link from "next/link";
import { IoHome, IoDocumentText } from "react-icons/io5";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { useServicesContext } from "../../../../context/services";

import styles from "./ServicesCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesCard = ({icon, title, shortDescription}) => {
    const { handleServiceSelected } = useServicesContext();

    return (
        <div className={cx("services-card")}>
            <div className={cx("services-card__icon-wrap")}>
                {icon === "IoHome" && <IoHome className={cx("services-card__icon")} size={72} color={"#a63523"} />}
                {icon === "IoDocumentText" && <IoDocumentText className={cx("services-card__icon")} size={72} color={"#a63523"} />}
                {icon === "RiPencilRuler2Fill" && <RiPencilRuler2Fill className={cx("services-card__icon")} size={72} color={"#a63523"} />}
            </div>
            <div  className={cx("services-card__title-wrap")}>
                <h1 className={cx("services-card__title")}>{title}</h1>
            </div>
            <div className={cx("services-card__description-wrap")}>
                <p className={cx("services-card__description")}>{shortDescription}</p>
            </div>
            <div className={cx("services-card__button-wrap")}>
                <Link href="/services"><button className={cx("services-card__button")} onClick={() => handleServiceSelected(title)}>Learn More</button></Link>
            </div>
        </div>
    )
}

export default ServicesCard;