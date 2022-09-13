import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./ServiceTab.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceTab = ({ servicesData }) => {

  return (
    <Accordion className={cx("service-tab")} disableGutters>
      <AccordionSummary
        className={cx("service-tab__summary")}
        expandIcon={<AddIcon />}
      >
        <p className={cx("service-tab__title")}>{servicesData.title}</p>
      </AccordionSummary>
      <AccordionDetails className={cx("service-tab__content")}>
        <p>{servicesData.shortDescription}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default ServiceTab;
