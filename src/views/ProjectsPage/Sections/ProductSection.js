import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import treasure from 'assets/img/TreasureHunt.jpg'
import streamCounter from 'assets/img/streamCounter.jpg'
import playerQ from 'assets/img/Player-queue.jpg'

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
          <a href='https://github.com/billy-moore/player-queue.git' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={playerQ}
                  alt="..."
                  style={{width:'100%', borderRadius: '10px', border: 'solid 2px #e4e4e4'}}
                />
                <h3>Player Queue App</h3>
                </a>
          </GridItem>
          <GridItem xs={12} sm={8} style={{color: 'black'}}>
              <h3>Player Qeue</h3>
              <p>I managed a bunch of kids who wanted to play the popular game "Smash Bros." and there were always
                more kids than controllers. This app was a way to make sure everyone got their turn. The app allows for
                users to input names, and queus the names accordingly. You can hold/lock players into position, add more names 
                and even remove or add controller spots as needed. Uses React, Material-UI and React Context. 
              </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
