import Link from "next/link";
import { IoHome, IoDocumentText } from "react-icons/io5";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { useServicesContext } from "../../../../context/services";

import styles from "./ServicesCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesCard = ({icon, title, description}) => {
    const { handleServiceSelected } = useServicesContext();

    return (
        <div className={cx("services-card")}>
            <div className={cx("services-card__icon-wrap")}>
                {icon === "IoHome" && <IoHome className={cx("services-card__icon")} size={104} color={"#043454"} />}
                {icon === "IoDocumentText" && <IoDocumentText className={cx("services-card__icon")} size={104} color={"#043454"} />}
                {icon === "RiPencilRuler2Fill" && <RiPencilRuler2Fill className={cx("services-card__icon")} size={104} color={"#043454"} />}
            </div>
            <div  className={cx("services-card__title-wrap")}>
                <p className={cx("services-card__title")}>{title}</p>
            </div>
            <div className={cx("services-card__description-wrap")}>
                <p className={cx("services-card__description")}>{description}</p>
            </div>
            <div className={cx("services-card__button-wrap")}>
                <Link href="/services"><a className={cx("services-card__button")} onClick={() => handleServiceSelected(title)}>Learn More &gt;</a></Link>
            </div>
        </div>
    )
}

export default ServicesCard;