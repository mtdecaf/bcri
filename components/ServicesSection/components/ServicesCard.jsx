import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import styles from "./ServicesCard.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServicesCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={cx("services-card__outter-wrap")}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className={cx("services-card__front-wrap", "services-card")} onClick={handleClick}>
                    <img className={cx("services-card__icon")} src="https://via.placeholder.com/150" alt=""/>
                    <h3 className={cx("services-card__title")}>{props.title}</h3>
                </div>
                <div className={cx("services-card__back-wrap", "services-card")} onClick={handleClick}>
                    <p className={cx("services-card__description")}>{props.description}</p>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default ServicesCard;