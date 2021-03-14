import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import Aux from "hoc/Auxiliary";
import Asish from "assets/asish.JPG";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: "8rem",
  },
}));

const Skills = () => {
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
              fontSize: "2rem",
            }}
          >
            Skills
          </Typography>
          <Typography
            component="div"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
          </Typography>
          <Typography
            component="div"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
          </Typography>
          <Typography
            component="div"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
            <Typography component="div">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className={classes.large}
              />
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default Skills;
