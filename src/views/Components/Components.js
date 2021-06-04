import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import WorkSection from 'views/ProjectsPage/Sections/WorkSection'
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";

import SectionTechnologies from './Sections/SectionTechnologies'
import SectionAboutMe from './Sections/SectionAboutMe'
import SectionMyProjects from './Sections/SectionMyProjects'
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Bill Moore Presents"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg9.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Bill Moore Portfolio</h1>
                <h3 className={classes.subtitle}>
                  I love creating and learning
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <SectionAboutMe />
        <SectionTechnologies />
        <SectionMyProjects />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
