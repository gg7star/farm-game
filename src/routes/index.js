import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Welcome from '../Welcome/index.js';
import Login from '../Login/index.js';
import Home from '../Home/index.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "home" component = {Home} title = "Home" />
      </Scene>
   </Router>
)
export default Routes;