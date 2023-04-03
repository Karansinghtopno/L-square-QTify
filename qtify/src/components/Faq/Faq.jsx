import React from "react";
import classes from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SimpleAccordian = () => {
  return (
    <div className={classes.accordian}>
      <Accordion
        style={{
          border: "1px solid white",
          margin: "15px 0px",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "var(--color-primary)" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            background: "var(--color-black)",
            border: "1px solid var(--color-white)",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography className={classes.accordianSummary}>
            Is QTify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          border: "1px solid white",
          margin: "15px 0px",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "var(--color-primary)" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            background: "var(--color-black)",
            border: "1px solid var(--color-white)",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography className={classes.accordianSummary}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};



const Faq = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>FAQs</h1>
      <SimpleAccordian />
    </div>
  );
};

export default Faq;
