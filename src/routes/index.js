import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from '../Containers/Welcome/index.js';
import Login from '../Containers/Login/index.js';
import Home from '../Containers/Home/index.js';
import MyFarm from '../Containers/MyFarm/index.js';
import News from '../Containers/News/index.js';
import Tutorial from '../Containers/Tutorial/index.js';
import TutorialDetails from '../Containers/TutorialDetails/index.js';
import FourMenuLayout from '../Layouts/FourMenuLayout';

const routes = [
  {
    key: 'welcome',
    title: 'Welcome',
    initial: true,
    component: Welcome,
    layout: FourMenuLayout,
  },
  {
    key: 'login',
    title: 'Login',
    initial: false,
    component: Login,
    layout: FourMenuLayout,
  },
  {
    key: 'home',
    title: 'Home',
    component: Home,
    layout: FourMenuLayout,
  },
  {
    key: 'myfarm',
    title: 'MyFarm',
    component: MyFarm,
    layout: FourMenuLayout,
  },
  {
    key: 'news',
    title: 'News',
    component: News,
    layout: null,
  },
  {
    key: 'tutorial',
    title: 'Tutorial',
    component: Tutorial,
    layout: FourMenuLayout,
  },
  {
    key: 'tutorialDetails',
    title: 'TutorialDetails',
    component: TutorialDetails,
    layout: FourMenuLayout,
  },
];

const Routes = () => (
  <Router>
    <Scene key="root">
      {/* <Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true} />
      <Scene key = "login" component = {Login} title = "Login" />
      <Scene key = "home" component = {Home} title = "Home" />
      <Scene key = "myfarm" component = {MyFarm} title = "My Farm" />
      <Scene key = "news" component = {News} title = "News" />
      <Scene key = "tutorial" component = {Tutorial} title = "Tutorial" />
      <Scene key = "tutorialDetails" component = {TutorialDetails} title = "Tutorial Details" /> */}
      {routes.map((route) => (
        <Scene
          key={route.key}
          // component={
          //   route.layout ? (
          //      React.createElement(
          //         <route.layout>
          //            <route.component />
          //         </route.layout>
          //      )
          //   ) : (
          //     route.component
          //   )
          // }
          component={route.component}
          title={route.title}
          initial={route.initial}
        />
      ))}
    </Scene>
  </Router>
);

export default Routes;
