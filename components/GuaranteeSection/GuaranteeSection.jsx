import { IoMdThumbsUp } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import {MdVerified} from "react-icons/md";

import GuaranteeCards from "./GuaranteeCards/GuaranteeCards";

import styles from "./GuaranteeSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const GuarenteeSection = () => {
  const cardData = [
    {
      icon: <IoMdThumbsUp className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "Satisfaction Guaranteed",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
    },
    {
      icon: <MdVerified className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "Certified, Expert Professionals",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
    },
    {
      icon: <IoCheckmarkCircle className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "One More Reason Here",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ",
    },
  ];
  return (
    <div className={cx("guarentee-section")}>
      <div className={cx("guarentee-section__title-wrap")}>
        <h1 className={cx("guarentee-section__title")}>Why Choose BCRI</h1>
      </div>
      <div  className={cx("guarentee-section__cards-wrap")}>
        <GuaranteeCards cardData={cardData} />
      </div>
    </div>
  );
};

export default GuarenteeSection;
