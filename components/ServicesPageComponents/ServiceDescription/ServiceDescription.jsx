import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "./ServiceDescription.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceDescription = ({ serviceSelectedData }) => {
  console.log(JSON.stringify(serviceSelectedData?.description)?.slice(1, -1));
  return (
    serviceSelectedData && (
      <div className={cx("service-description")}>
        <div className={cx("service-description__inner-wrap")}>
          <h2 className={cx("service-description__title")}>
            {serviceSelectedData.descriptionTitle}
          </h2>
          <p className={cx("service-description__content")}>
            {JSON.stringify(serviceSelectedData?.description)
              .slice(1, -1)
              .split("\\n")
              .map((line, key) => (
                <span key={key}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
          {serviceSelectedData?.ul ? (
            <div className={cx("service-description__accordion-wrap")}>
              <Accordion
                className={cx("service-description__accordion")}
                disableGutters
              >
                <AccordionSummary
                  className={cx("service-description__accordion-summary")}
                  expandIcon={<AddIcon />}
                >
                  <p className={cx("service-description__accordion-title")}>
                    {serviceSelectedData.ul.summary}
                  </p>
                </AccordionSummary>
                <AccordionDetails
                  className={cx("service-description__accordion-content")}
                >
                  <ul className={cx("service-description__accordion-content")}>
                    {serviceSelectedData.ul.list.map((line, key) => (
                      <li key={key}>{line}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : null}
          {serviceSelectedData?.ol ? (
            <div className={cx("service-description__accordion-wrap")}>
              <Accordion
                className={cx("service-description__accordion")}
                disableGutters
              >
                <AccordionSummary
                  className={cx("service-description__accordion-summary")}
                  expandIcon={<AddIcon />}
                >
                  <p className={cx("service-description__accordion-title")}>
                    {serviceSelectedData.ol.summary}
                  </p>
                </AccordionSummary>
                <AccordionDetails
                  className={cx("service-description__accordion-content")}
                >
                  <ol className={cx("service-description__accordion-content")}>
                    {serviceSelectedData.ol.list.map((line, key) => (
                      <li key={key}>{line}</li>
                    ))}
                  </ol>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : null}
        </div>
      </div>
    )
  );
};

export default ServiceDescription;
