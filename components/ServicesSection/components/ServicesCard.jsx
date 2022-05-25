import { IoHome, IoDocumentText } from "react-icons/io5";
import { RiPencilRuler2Fill } from "react-icons/ri";
import Link from "next/link";

import styles from "./ServicesCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesCard = (props) => {

    return (
        <div className={cx("services-card")}>
            <div className={cx("services-card__icon-wrap")}>
                {props.icon === "IoHome" && <IoHome className={cx("services-card__icon")} size={104} color={"#043454"} />}
                {props.icon === "IoDocumentText" && <IoDocumentText className={cx("services-card__icon")} size={104} color={"#043454"} />}
                {props.icon === "RiPencilRuler2Fill" && <RiPencilRuler2Fill className={cx("services-card__icon")} size={104} color={"#043454"} />}
            </div>
            <div  className={cx("services-card__title-wrap")}>
                <p className={cx("services-card__title")}>{props.title}</p>
            </div>
            <div className={cx("services-card__description-wrap")}>
                <p className={cx("services-card__description")}>{props.description}</p>
            </div>
            <div className={cx("services-card__button-wrap")}>
                <Link href="/services"><a className={cx("services-card__button")}>Learn More &gt;</a></Link>
            </div>
        </div>
    )
}

export default ServicesCard;