/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
 * This code is developed to demonstrate the use of ReactJS and ReactNatice
 * The deelopment also allows me to demonstrate my capabilities using the framework
 * Following create-react-app methods, the file structure is made from scratch
 * Copyright - World Food Programmes - Digital Transformation
*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
