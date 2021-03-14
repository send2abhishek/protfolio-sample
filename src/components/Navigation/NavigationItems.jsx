import React from "react";
import { makeStyles, Typography } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  navigationRoot: {
    width: "100%",
    margin: "0 auto",
  },
  menuItems: {
    padding: "1rem 0",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    margin: "0 auto",
  },
  menuStyle: {
    margin: "0px",
    padding: "0.25rem 1.2rem",
    border: "1px solid black",
    cursor: "pointer",
  },
}));

const NavigationItems = (props) => {
  const classes = useStyles(props);
  return (
    <Typography
      component="div"
      style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
    >
      Abhsihske
      <Typography
        component="div"
        style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}
      >
        <ul className={classes.menuItems}>
          <li className={classes.menuStyle}>About</li>
          <li className={classes.menuStyle}>Skills</li>
          <li className={classes.menuStyle}>Blogs</li>
          <li className={classes.menuStyle}>Experince</li>
        </ul>
      </Typography>
    </Typography>
  );
};

export default NavigationItems;
