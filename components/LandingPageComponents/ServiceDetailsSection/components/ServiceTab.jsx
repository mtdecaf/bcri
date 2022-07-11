import {
  Accordion,
  AccordionSummary,
  AccordionActions,
  AccordionDetails,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import styles from "./ServiceTab.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ServiceTab = ({}) => {
  return (
    <Accordion className={cx("service-tab")} disableGutters>
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <p>Hi</p>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default ServiceTab;
