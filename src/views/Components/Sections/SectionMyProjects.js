import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import treasure from "assets/img/TreasureHunt.jpg";
import streamCounter from 'assets/img/streamCounter.jpg'
import playerQueue from 'assets/img/Player-queue.jpg'
import LibrarySet from 'assets/img/LibraryDouble.png'

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
            <Link to='projects-page'><Typography variant='h6'>Read about each one here</Typography></Link>
          </ GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Link to='projects-page' className={classes.link}>
                <img
                  src={LibrarySet}
                  alt="library projects"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="white" size="lg" simple>
                  Projects for the library
                </Button>
              </Link>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <a href='https://billy-moore.github.io/treasure-game/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={treasure}
                  alt="treasure game"
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
            <a href='https://billy-moore.github.io/stream-counter' target='_blank' rel="noopener noreferrer" className={classes.link}>
              <img
                src={streamCounter}
                alt="stream counter"
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
            <a href='https://billy-moore.github.io/player-queue/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={playerQueue}
                  alt="player queue"
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                /> 
                <Button color="white" size="lg" simple>
                  View my Player Queue app
                </Button>
              </a>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
