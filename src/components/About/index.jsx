import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import Aux from "hoc/Auxiliary";
import Asish from "assets/asish.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Aux>
      <Grid container>
        <Grid container item xs={12} md={3} className={classes.root}>
          <Typography
            align="center"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={Asish}
              alt="banner"
              width="95%"
              style={{ borderRadius: "15%" }}
            />
          </Typography>
          <Typography
            component="div"
            style={{
              display: "flex",
              paddingTop: "1rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <IconButton>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <YouTubeIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Typography>
        </Grid>
        <Grid container item xs={12} md={7} className={classes.root}>
          <Typography
            align="center"
            style={{
              width: "100%",
              display: "flex",
              fontSize: "1.5rem",
            }}
          >
            About
          </Typography>

          <Typography style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ducimus nostrum laboriosam repellat quo non reprehenderit dolore,
            perspiciatis dignissimos, perferendis natus consequuntur mollitia
            provident ea illo aut qui architecto? Labore.
          </Typography>
          <Typography style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ducimus nostrum laboriosam repellat quo non reprehenderit dolore,
            perspiciatis dignissimos, perferendis natus consequuntur mollitia
            provident ea illo aut qui architecto? Labore.
          </Typography>
          <Typography style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ducimus nostrum laboriosam repellat quo non reprehenderit dolore,
            perspiciatis dignissimos, perferendis natus consequuntur mollitia
            provident ea illo aut qui architecto? Labore.
          </Typography>
          <Typography style={{ width: "100%" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ducimus nostrum laboriosam repellat quo non reprehenderit dolore,
            perspiciatis dignissimos, perferendis natus consequuntur mollitia
            provident ea illo aut qui architecto? Labore.
          </Typography>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default About;
