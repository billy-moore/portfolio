import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/profile-pic-Me.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="Billy Moore Presents"
        rightLinks={<HeaderLinks />}
        fixed
        
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg2.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Bill Moore</h3>
                    <h6>Web Developer</h6>
                    <Button justIcon link className={classes.margin5} href='https://github.com/billy-moore' target='_blank' >
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button justIcon link className={classes.margin5} href='https://www.linkedin.com/in/bill-moore-online/' target='_blank' >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button justIcon link className={classes.margin5} href='https://twitter.com/sfbilly' target='_blank' >
                      <i className={"fab fa-twitter"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.descriptionMain}> 
            
              <p>
                I first started "coding" while I was getting my Master's 
                in Library Science. I took a simple computer programming 
                course to learn HTML, CSS, and a little JavaSript. 
                I was hooked. My final project, I coded in easter eggs, 
                and hidden pages beyond the standard assignment. But it was 
                only ever a fun thing to play around with.
              </p>
              <p>
                For work, I started creating webpages using those languages, Wordpress, and 
                other frameworks and platforms, and maintaining webpages and content. But, in the middle of my 
                second Masters program I decided I really just want to make an app. I 
                want to learn how to really create, design, and make tools and programs 
                that people want.
              </p>
              <p>
                I finished a javascript course on Udemy and was more 
                excited to get that, than I was my Master's of Education. After that I jumped into learning React, 
                and that’s when I knew I need to do this as a career. I love learning - new languages, concepts and techniques (and things outside coding, as well).
                and I've always loved creating and solving problems and finding solutions. It was some of those traits which
                got me interested in libraries that I got into programming, and because of the education process that I love to 
                dive in, and learn and explore. I wish I had known about programming earlier, but because of my experiences as a librarian
                and and educator, I think I can be a better programmer for it.   
              </p>
            </div>
            <GridContainer justify="center">
              {/* <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem> */}
            </GridContainer>
            <br />
            <br />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
