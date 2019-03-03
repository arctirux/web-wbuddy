/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

import { React, PropTypes, Router, Route } from "./includes/Commons";
import { CssBaseline, Hidden, MuiThemeProvider, theme, withStyles, drawerWidth, styles } from "./theme/styles/index";

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

import "./theme/css/index.css";
import { AllMenus } from "./includes/Menus";
import { LeftSidebar, TopHeader } from "./layout";
import { userIsLoggedIn, handleDrawerToggle, pageRedirect, getUser } from "./includes/Functions";

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

console.log(localStorage);

class App extends React.Component {
 /*
  * This code is developed to demonstrate the use of ReactJS and ReactNatice
  * The deelopment also allows me to demonstrate my capabilities using the framework
  * Following create-react-app methods, the file structure is made from scratch
  * Copyright - World Food Programmes - Digital Transformation
  */

  
 state = {
  loginPage: '/login',
  accessPage: '/access',
  registerPage: '/register',
  page: window.location.pathname,
  isUser: userIsLoggedIn(),
  user: getUser(),
  mobileOpen: false,
  redirect: null,
  title: "Home"
 };

  /*
  * This code is developed to demonstrate the use of ReactJS and ReactNatice
  * The deelopment also allows me to demonstrate my capabilities using the framework
  * Following create-react-app methods, the file structure is made from scratch
  * Copyright - World Food Programmes - Digital Transformation
  */

 static contextTypes = { router: PropTypes.object };
 componentDidMount() { pageRedirect(this); }

 /*
  * This code is developed to demonstrate the use of ReactJS and ReactNatice
  * The deelopment also allows me to demonstrate my capabilities using the framework
  * Following create-react-app methods, the file structure is made from scratch
  * Copyright - World Food Programmes - Digital Transformation
  */

 render() {
   
  /*
   * This code is developed to demonstrate the use of ReactJS and ReactNatice
   * The deelopment also allows me to demonstrate my capabilities using the framework
   * Following create-react-app methods, the file structure is made from scratch
   * Copyright - World Food Programmes - Digital Transformation
   */

  const This = this;
  const { classes } = This.props;
  const Toggle = e => handleDrawerToggle(This);
  const PaperProps = { style: { width: drawerWidth } };

  /*
   * This code is developed to demonstrate the use of ReactJS and ReactNatice
   * The deelopment also allows me to demonstrate my capabilities using the framework
   * Following create-react-app methods, the file structure is made from scratch
   * Copyright - World Food Programmes - Digital Transformation
   */

  return (
   <MuiThemeProvider theme={theme}>
    <Router>
     <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
       <Hidden smUp implementation="js">
        <LeftSidebar this={This} PaperProps={PaperProps} variant="temporary" open={this.state.mobileOpen} onClose={Toggle} onDrawerToggle={Toggle} />
       </Hidden>
       <Hidden xsDown implementation="css">
        <LeftSidebar this={This} PaperProps={PaperProps} onDrawerToggle={Toggle} />
       </Hidden>
      </nav>
      <div className={classes.appContent}>
       <TopHeader this={This} onDrawerToggle={Toggle} />
       <main className={classes.mainContent}>
        { AllMenus.map(({ id: childId, active, path, component }) => 
        <Route exact={true} path={path} component={component} key={childId} handler={component} /> )}
       </main>
      </div>
     </div>
    </Router>
   </MuiThemeProvider>
  );
 }
}

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

App.propTypes = {
 classes: PropTypes.object.isRequired
};

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
 */

export default withStyles(styles)(App);
