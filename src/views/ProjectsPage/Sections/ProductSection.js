import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import treasure from 'assets/img/TreasureHunt.jpg'
import streamCounter from 'assets/img/streamCounter.jpg'
import playerQ from 'assets/img/Player-queue.jpg'
import combo from 'assets/img/comboShot.png'
import moviesApp from 'assets/img/MovieApp.png'

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
              <img
                  src={combo}
                  alt="library and book list"
                  style={{width:'100%', borderRadius: '10px'}}
                />
                  <h3 style={{color: 'black'}}>Library Projects</h3>
            </GridItem>

            <GridItem xs={12} sm={8} style={{color: 'black'}}>
              <h3>Library Home Page & Book List generator</h3>
                  <p>
                    These projects are very real results of being interested in programming while being a librarian during the day. I took over the library website when I became a librarian, and with only a basic understanding of HTML and CSS, I taught myself how to use bootstrap
                    and work in the framework of the Libguides structure which is what the library uses to host its site. You can build a perfectly functioning and usable library website with great features, without knowing any code. But then your website looks like every other academic
                    library website. I designed all the major aspects and used the University's prescibed color palette to make something that was united with the University's marketing materials, but still completely ours. It had to be funcitonal, easy to understand and navigate, dynamic,
                    and maintanable. <br />
                    The Book List Generator was a request from our acquisitions librarian. She needed some way to create a visual book list, so she could send an informational email to the entire campus. I said "I think I can make you something." This very basic application takes the Google Books
                    REST API and allows you to input a book's ISBN number, and choose the correct book cover for the item you selected. It then allows you to modify a few options, delete selections, and then export the document to be saved as a PDF. I put this together in a couple days, error tested
                    it, we've only used it a couple months and saw an instant increase in usage, inquiries and positive feedback. Plus it cut her production time down to minutes, as opposed to hours, which she was spending copy/pasting images from Amazon.
                  </p>
                  <a href='https://cune.libguides.com/home' target='_blank' rel='noopener noreferrer' className={classes.link} >Library Homepage</a>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <a href='https://billy-moore.github.io/book-list/' target='_blank' rel='noopener noreferrer' className={classes.link} >Book List Generator</a>
                  
            </GridItem>

        {/* <GridItem xs={12} sm={4} >
                <img
                  src={combo}
                  alt="library and book list"
                  style={{width:'100%', borderRadius: '10px'}}
                />
                  <h3 style={{color: 'black'}}>Library Projects</h3>
          </GridItem>
          
          <GridItem xs={12} sm={8} container style={{color: 'black'}}>
            <h3>Library Home Page & Book List generator</h3>
                <p>
                  These projects are very real results of being interested in programming while being a librarian during the day. I took over the library website when I became a librarian, and with only a basic understanding of HTML and CSS, I taught myself how to use bootstrap
                  and work in the framework of the Libguides structure which is what the library uses to host its site. You can build a perfectly functioning and usable library website with great features, without knowing any code. But then your website looks like every other academic
                  library website. I designed all the major aspects and used the University's prescibed color palette to make something that was united with the University's marketing materials, but still completely ours. It had to be funcitonal, easy to understand and navigate, dynamic,
                  and maintanable. <br />
                  The Book List Generator was a request from our acquisitions librarian. She needed some way to create a visual book list, so she could send an informational email to the entire campus. I said "I think I can make you something." This very basic application takes the Google Books
                  REST API and allows you to input a book's ISBN number, and choose the correct book cover for the item you selected. It then allows you to modify a few options, delete selections, and then export the document to be saved as a PDF. I put this together in a couple days, error tested
                  it, we've only used it a couple months and saw an instant increase in usage, inquiries and positive feedback. Plus it cut her production time down to minutes, as opposed to hours, which she was spending copy/pasting images from Amazon.
                </p>
                  <GridItem xs={6}>
                      <a href='https://cune.libguides.com/home' target='_blank' rel='noopener noreferrer' className={classes.link}>Library Homepage</a>
                  </GridItem>
                    <GridItem xs={6}>
                      <a href='https://billy-moore.github.io/book-list/' target='_blank' rel='noopener noreferrer' className={classes.link}>Book List Generator</a>
                    </GridItem>
          </GridItem> */}

          <GridItem xs={12} sm={4} >
                <img
                  src={ moviesApp }
                  alt="library and book list"
                  style={{width:'100%', borderRadius: '10px'}}
                />
                  <h3 style={{color: 'black'}}>Movie/Cocktails App</h3>
          </GridItem>

          <GridItem xs={12} sm={8} style={{color: 'black'}}>
            <h3>MERN Stack app (in production)</h3>
                <p>
                  My current project is a complete MERN stack app that combines movies and cocktails into a social platform. React, Express, Node, MongoDB, React Redux, and React Router are the tools that are heavily used in this app. Pulling from TheMovieDb and theCocktailDB, the app (will) allow
                  users to create watch and/or drink lists, and suggest drinks that should pair with movies, and contains instructions on how to make the drinks. I will host this as soon as it's to a point in development where it would be more useful, but until then you can see my updates <a href='https://github.com/billy-moore/movie-list' target='_blank' rel='noopener noreferrer' className={classes.link}>on github</a>
                </p>
                {/* <GridItem xs={6}>
                  <a href='https://cune.libguides.com/home' target='_blank' rel='noopener noreferrer' className={classes.link}>Library Homepage</a>
                </GridItem>
                  <GridItem xs={6}>
                  <a href='https://billy-moore.github.io/book-list/' target='_blank' rel='noopener noreferrer' className={classes.link}>Book List Generator</a>

                  </GridItem> */}
          </GridItem>


          <GridItem xs={12} sm={4} >
          <a href='https://billy-moore.github.io/treasure-game/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={treasure}
                  alt="treasure game"
                  style={{width:'100%', borderRadius: '10px'}}
                />
                <h3>Treasure Game</h3>
                </a>
          </GridItem>

          <GridItem xs={12} sm={8} style={{color: 'black'}}>
            <h3>Treasure of the Sergio Monco</h3>
                <p>The title is a play on Spaghetti Westerns and Treasure of the Sierra Madre. I really wanted to make something to prove I had learned something in React. I came up with the 
                  mechanics for the game quickly as a push-your-luck game where your high score is tied to your cash on hand. I created everything you see on the screen, the icons, shovels, everything but a very light 8-bit button CSS library. I created the tiles and icons 
                  using <a href='https://www.pixilart.com' alt='...' target='_blank' rel="noopener noreferrer">pixilart.com</a> and then just kept cleaning up code and 
                  adding as I learned. This was a chance to use and build around React's Context API, learn how to use useReducer and a build around a fun randomization algorithm. It's a fully functioning game that has some really cool features and functionality, while looking really
                  nice and tells a fun story.
                </p>
          </GridItem>
          
          <GridItem xs={12} sm={4}>
          <a href='https://billy-moore.github.io/stream-counter/' target='_blank' rel="noopener noreferrer" className={classes.link}>
                <img
                  src={streamCounter}
                  alt="stream counter"
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
                  alt="player queue"
                  style={{width:'100%', borderRadius: '10px', border: 'solid 2px #e4e4e4'}}
                />
                <h3>Player Queue App</h3>
                </a>
          </GridItem>
          <GridItem xs={12} sm={8} style={{color: 'black'}}>
              <h3>Player Queue</h3>
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
