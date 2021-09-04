import { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography, Collapse, IconButton } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

export const ReferenceComp = ({ data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        color="secondary"
      >
        <ExpandMoreIcon />
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Typography
          style={{ color: "#fff", textTransform: "uppercase", fontSize: 12 }}
        >
          References:
        </Typography>
        <ol>
          {data?.map((item, i) => {
            return (
              <li style={{ marginBottom: 5, color: "#119DA4" }} key={i}>
                <a
                  style={{ color: "#119DA4", textDecoration: "none" }}
                  rel="noreferrer"
                  target="_blank"
                  href={item?.link ? item?.link : null}
                >
                  <Typography
                    style={{
                      fontSize: 12
                    }}
                  >
                    {item?.title}
                  </Typography>
                </a>
              </li>
            );
          })}
        </ol>
      </Collapse>
    </>
  );
};

const useStyles = makeStyles(() => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));
