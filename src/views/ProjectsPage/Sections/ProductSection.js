import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import treasure from 'assets/img/TreasureHunt.jpg'
import streamCounter from 'assets/img/streamCounter.jpg'
import pprx from 'assets/img/pprx-screen.jpg'

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer> */}
      <div className={classes.container}>
        <GridContainer spacing={3} >
          <GridItem xs={12} sm={4} >
          <a href='https://billy-moore.github.io/treasure-game/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={treasure}
                  alt="..."
                  style={{width:'100%', borderRadius: '10px'}}
                />
                <h3>Treasure Game</h3>
                </a>
          </GridItem>
          <GridItem xs={12} sm={8} style={{color: 'black'}}>
            <h3>Treasure of the Sergio Monco</h3>
                <p>I really wanted to make something to prove I had learned something in React. I came up with the 
                  mechanics for the game in about 4 minutes, but then I kept adding ideas. I created the tiles and icons 
                  using <a href='https://www.pixilart.com' alt='...' target='_blank' rel="noopener noreferrer">pixilart.com</a> and then just kept cleaning up code and 
                  adding as I learned. Built around Context API, useReducer and a fun randomization algorithm.
                </p>
          </GridItem>
          
          <GridItem xs={12} sm={4}>
          <a href='https://billy-moore.github.io/stream-counter/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={streamCounter}
                  alt="..."
                  style={{width:'100%', borderRadius: '10px', border: 'solid 2px #e4e4e4'}}
                />
                <h3>Stream Counter</h3>
                </a>
          </GridItem>
          <GridItem xs={12} sm={8} style={{color: 'black'}}>
              <h3>Twitch Stream Counter</h3>
              <p>I needed a stream counter for a live Twitch stream, and realized that all the options were overly complicated
                and most required Windows, which wasn't an option. "Well, I'm a programmer..." I thought, so I sat down and made one. And 
                like every project, it started out as the standard "counter" tutorial then I added a ton of features to cater to 
                whatever type of stream might be necessary. I used this as an opportunity to learn more about Material-UI. 
              </p>
          </GridItem>

          <GridItem xs={12} sm={4} style={{paddingTop: '50px'}}>
          <a href='https://billy-moore.github.io/pprx/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={pprx}
                  alt="..."
                  style={{width:'100%', borderRadius: '10px', border: 'solid 2px #e4e4e4'}}
                />
                <h3>Paper Outlining App</h3>
                </a>
          </GridItem>
          <GridItem xs={12} sm={8} style={{color: 'black'}}>
              <h3>PPRx Paper Constructing App</h3>
              <p>This is an app that I've been messing around with for a while. It's still very much a work in progress, but I just hooked it up to a Firebase realtime-database, and will continue to hack away at it. I had students struggling with 
                some basic paper structure, and paper writing problems, and I teach a very basic, broken down method, designed on a functional programming model. So I thought "of course, I can make an app for that!" The concept is to be able to add
                your Main Points, then build out multiple sub-points, and then copy and paste quotes, or citations into each of the content areas. There will also be drag-and-drop functionality. Once your paper structure is complete, you'll be able to 
                export it as a Word document, complete with bolded subject heads, bulleted lists, and a Works Cited/Reference page. But again: work in progress
              </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
