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
                I'm a self-taught frontend developer. I love to create things and learn, and becoming a 
                software engineer has enabled me to do both. I'm currently working toward fullstack, at least on my own projects,
                but I'm lookng for a team that creates, designs, and makes awesome user experiences.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
