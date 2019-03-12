/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
*/

/* Importing the basic element of react
 * Including React and React dome ino the file
 * Calling other elements of the page
 */

import React from "react";
import ReactDOM from "react-dom";

/* Importing the basic element of react
 * Including React and React dome ino the file
 * Calling other elements of the page
 */

import * as serviceWorker from "./serviceWorker";
import "../src/theme/css/index.css";
import App from "./App";

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
