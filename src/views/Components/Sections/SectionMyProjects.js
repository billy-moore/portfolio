import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
// react components for routing our app without refresh

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import treasure from "assets/img/TreasureHunt.jpg";
import streamCounter from 'assets/img/streamCounter.jpg'
import pprx from 'assets/img/pprx-screen.jpg'
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center" spacing={2}>
          <GridItem xs={12}>
            <Typography variant='h2'>My Projects</Typography>
          </ GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <a href='https://billy-moore.github.io/treasure-game/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={treasure}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="white" size="lg" simple>
                  View my Treasure Hunt game
                </Button>
              </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <a href='https://billy-moore.github.io/stream-counter/' target='_blank' rel="noopener noreferrer" className={classes.link}>
              <img
                src={streamCounter}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button color="white" size="lg" simple>
                View my Stream Counter app
              </Button>
            </a>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <a href='https://billy-moore.github.io/pprx/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={pprx}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="white" size="lg" simple>
                  View my Paper Writing App
                </Button>
              </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
