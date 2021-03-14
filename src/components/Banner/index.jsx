import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Aux from "hoc/Auxiliary";
import Asish from "assets/asish.JPG";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <Aux>
      <Grid container>
        <Grid container item xs={12} md={6} className={classes.root}>
          <Typography
            align="center"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10%",
            }}
          >
            <img src={Asish} alt="banner" width="41%" />
          </Typography>

          <Typography
            align="center"
            style={{ width: "100%", paddingTop: "5%" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ducimus nostrum laboriosam repellat quo non reprehenderit dolore,
            perspiciatis dignissimos, perferendis natus consequuntur mollitia
            provident ea illo aut qui architecto? Labore.
          </Typography>

          <Typography
            component="div"
            align="center"
            style={{ width: "100%", padding: "1rem 0", paddingTop: "5%" }}
          >
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Write About Me
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default Banner;
