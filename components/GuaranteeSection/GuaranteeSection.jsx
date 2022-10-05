import { IoMdThumbsUp } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import {MdVerified} from "react-icons/md";

import GuaranteeCards from "./GuaranteeCards/GuaranteeCards";

import styles from "./GuaranteeSection.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const GuarenteeSection = () => {
  const cardData = [
    {
      icon: <IoMdThumbsUp className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "Quality Service",
      desc: "Our team is trained to provide our clients with the best service possible. We provide you with accurate, real-time information about your roof and sub-systems promptly. Whether you require a full roof management program implemented or just a leak service call, we treat everyone the way we want to be treated!",
    },
    {
      icon: <IoDocumentText className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "Professional Documentation",
      desc: "When you work with BC Roof Inspections, you will receive professionally prepared documents that provide clarity to the homeowner, which may include roof inspection and maintenance reports, architectural drawings (CAD), detailed roof specifications, and digital photographic documentation.",
    },
    {
      icon: <MdVerified className={cx("guarantee-cards__item-icon")} size={56} color={"#a63523"} />,
      title: "Certified, Expert Professionals",
      desc: "Our team has many years of experience in the roofing industry. If it involves your roof, rest assured, we can inspect it for you. Give us a call today for professional Roof Management, Roof Consulting Services, Roof Maintenance work and more.",
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
