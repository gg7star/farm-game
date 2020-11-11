import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Welcome from '../Containers/Welcome/index.js';
import Login from '../Containers/Login/index.js';
import Home from '../Containers/Home/index.js';
import MyFarm from '../Containers/MyFarm/index.js';
import News from '../Containers/News/index.js';
import Tutorial from '../Containers/Tutorial/index.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true} />
         <Scene key = "login" component = {Login} title = "Login" />
         <Scene key = "home" component = {Home} title = "Home" />
         <Scene key = "myfarm" component = {MyFarm} title = "My Farm" />
         <Scene key = "news" component = {News} title = "News" />
         <Scene key = "tutorial" component = {Tutorial} title = "Tutorial" />
      </Scene>
   </Router>
)
export default Routes;