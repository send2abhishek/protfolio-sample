import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Aux from "hoc/Auxiliary";
import Asish from "assets/asish.JPG";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
  },
}));

const Blogs = () => {
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
            Blogs
          </Typography>

          <Typography
            component="div"
            style={{ display: "flex", width: "100%" }}
          >
            <Typography
              component="div"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="div"
                style={{ width: "100%", textAlign: "center" }}
              >
                <img src={Asish} alt="blog" width="50%" />
              </Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              dolor nostrum sapiente sunt aliquid tenetur odio dignissimos! A
              molestiae perferendis ducimus excepturi explicabo ea, expedita
              totam, qui, consectetur earum eum!
            </Typography>

            <Typography
              component="div"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="div"
                style={{ width: "100%", textAlign: "center" }}
              >
                <img src={Asish} alt="blog" width="50%" />
              </Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              dolor nostrum sapiente sunt aliquid tenetur odio dignissimos! A
              molestiae perferendis ducimus excepturi explicabo ea, expedita
              totam, qui, consectetur earum eum!
            </Typography>
            <Typography
              component="div"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                component="div"
                style={{ width: "100%", textAlign: "center" }}
              >
                <img src={Asish} alt="blog" width="50%" />
              </Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              dolor nostrum sapiente sunt aliquid tenetur odio dignissimos! A
              molestiae perferendis ducimus excepturi explicabo ea, expedita
              totam, qui, consectetur earum eum!
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Aux>
  );
};

export default Blogs;
