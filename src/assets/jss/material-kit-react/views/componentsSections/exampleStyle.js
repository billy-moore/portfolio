import { containerFluid } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import image from "assets/img/sign.jpg";

const exampleStyle = {
  section: {
    padding: "70px 0",
    //I added this
    backgroundImage: "url(" + image + ")"

  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
