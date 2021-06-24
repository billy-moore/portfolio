import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import resume from 'assets/img/Bill Moore Resume.pdf'

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import {Card} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <Card>
                        <h2
                            className={classes.title}
                            style={{
                            marginBottom: '-5px'
                        }}>Contact Me</h2>
                        <h2 className={classes.description}>
                            email:
                            <a href='mailto:billmoore@vivaldi.net'>BillMoore@vivaldi.net</a>
                        </h2>
                        <h2 className={classes.description}>
                            <a
                                href={resume}
                                target='_blank'
                                rel="noopener noreferrer"
                                className={classes.block}>
                                My Resume
                            </a>
                        </h2>
                    </Card>

                    {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
                </GridItem>
            </GridContainer>
        </div>
    );
}
