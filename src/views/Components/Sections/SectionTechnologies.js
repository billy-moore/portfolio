import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// logos
import ReactLogo from 'assets/img/logos/react-logo.png'
import ReduxLogo from 'assets/img/logos/redux-logo.png'
import JavaScript from 'assets/img/logos/javaScript-logo.png'
import htmlLogo from 'assets/img/logos/html-logo.png'
import cssLogo from 'assets/img/logos/css-logo.png'
import materialLogo from 'assets/img/logos/material-logo.png'
import bootstrapLogo from 'assets/img/logos/bootstrap-logo.png'
import sassLogo from 'assets/img/logos/sass-logo.png'
import FirebaseLogo from 'assets/img/logos/firebase-logo.png'

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTechnologies() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                <h1>Technologies</h1>
                <h3>
                    Proficient
                </h3>
                </GridItem>
            </GridContainer>
            <br />
            <GridContainer justify="center" spacing={2}>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={ReactLogo} style={{height: 100}} alt='react-logo' />
                    <Typography variant='h4'>React</Typography>
                </GridItem>
                
                <GridItem xs={6} sm={4} md={3}>
                    <img src={JavaScript} style={{height: 100}} alt='JS-logo' />
                    <Typography variant='h4'>JavaScript</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={htmlLogo} style={{height: 100}} alt='html-logo' />
                    <Typography variant='h4'>HTML 5</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={cssLogo} style={{height: 100}} alt='css-logo' />
                    <Typography variant='h4'>CSS 3</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={materialLogo} style={{height: 100}} alt='material-logo' />
                    <Typography variant='h4'>Material UI</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={bootstrapLogo} style={{height: 100}} alt='html-logo' />
                    <Typography variant='h4'>Bootstrap</Typography>
                </GridItem>
                </GridContainer>
        <GridContainer justify="center" style={{marginTop: '1rem'}}>
            <GridItem xs={12} sm={12} md={8}>

                <h3>
                Exposure
                </h3>
            </GridItem>
            </GridContainer>
            <GridContainer justify='center'>
            <GridItem xs={6} sm={4} md={3}>
                    <img src={ReduxLogo} style={{height: 100}} alt='redux-logo' />
                    <Typography variant='h4'>Redux</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={sassLogo} style={{height: 100}} alt='css-logo' />
                    <Typography variant='h4'>Sass</Typography>
                </GridItem>
                <GridItem xs={6} sm={4} md={3}>
                    <img src={FirebaseLogo} style={{height: 100}} alt='firebase-logo' />
                    <Typography variant='h4'>Firebase</Typography>
                </GridItem>
                
            </GridContainer>
        </div>
    </div>
    );
}
