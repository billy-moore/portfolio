import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h1>A Little About Me</h1>
            <h4>
                I'm a self-taught developer that start with basic HTML and CSS markup, moved into Javascript and have been working in React and the MERN stack for the past couple years.
                I am always learning, challenging myself, and working to make myself a better developer and coder.
                My goal is to create things that will bring value and beauty to the user.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
