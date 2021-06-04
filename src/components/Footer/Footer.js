/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { Button, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import resume from 'assets/img/Bill Moore Resume.pdf'

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to='profile-page' className={classes.block}>
                <Button color='primary' size='small' simple>
                  My Profile
                </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
            <Link to='projects-page' className={classes.block}>
                <Button color='primary' size='small' simple>
                  My Projects Page
                </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href={resume} target='_blank' rel="noopener noreferrer" className={classes.block}>
                <Button color='primary' size='small' simple>
                  My Resume
                </Button>
                </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
