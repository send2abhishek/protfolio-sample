import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import NavingationItems from "components/Navigation/NavigationItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  return (
    <section>
      <Grid container>
        <Grid container item xs={11} className={classes.root}>
          <NavingationItems />
        </Grid>
      </Grid>
    </section>
  );
};

export default Navigation;
