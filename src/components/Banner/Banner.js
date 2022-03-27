import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { SingleCoin } from "./SingleCoin";

const useStyles = makeStyles({
  banner: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: "url(./banner2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: 'center',
  },
  bannerContent: {
    height: 500,
    display: "flex",
    flexDirection: "row",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  }
});

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              textAlign: 'left',
            }}
          ><br/>
            <span className="wave" >📈Crypto Tracker📉</span> 
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "black",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 60,
              textAlign: 'left',
              fontWeight: 'bold'
            }}
          ><br/>
            Track all of your favorite to <span style={{color: "#27CF59"}}>buy the dip!!!</span>
          </Typography>
            
        </div>
      </Container>
      <Container className={classes.bannerContent} style={{ marginBottom: 50 }}>
        <SingleCoin />
      </Container>
    </div>
  );
}

export default Banner;
