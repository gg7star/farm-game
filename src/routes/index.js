import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Welcome from '../Containers/Welcome';
import Login from '../Containers/Login';
import Home from '../Containers/Home';
import MyFarm from '../Containers/MyFarm';
import News from '../Containers/News';
import Tutorial from '../Containers/Tutorial';
import TutorialDetails from '../Containers/TutorialDetails';
import Ranking from '../Containers/Ranking';
import Event from '../Containers/Event';
import CropDetails from '../Containers/CropDetails';
import EventTitleAll from '../Containers/EventTitleAll';
import FarmName from '../Containers/FarmName';
import FarmTop from '../Containers/FarmTop';
import Point from '../Containers/Point';
import PointHistory from '../Containers/Point/PointHistory.js';
import Profile from '../Containers/Profile';
import WaitDelivery from '../Containers/WaitDelivery';
import WaitDelivery2 from '../Containers/WaitDelivery/WaitDelivery2';
import AddressList from '../Containers/AddressList';
import AddressInput from '../Containers/AddressInput';
import AddressCheck from '../Containers/AddressInput/AddressCheck';
import Contact from '../Containers/Contact';
import Yamato from '../Containers/Yamato';
import MyMenu from '../Containers/MyMenu';
import AdMob from '../Containers/AdMob';
import Kiyaku from '../Containers/Kiyaku';
import FirstGuide from '../Containers/FirstGuide';
import FirstGuidePage1 from '../Containers/FirstGuide/FirstGuidePage1';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="welcome"
        component={Welcome}
        title="Welcome"
        hideNavBar
        initial={true}
      />
      <Scene key="login" component={Login} title="Login" hideNavBar />
      <Scene key="home" component={Home} title="Home" hideNavBar />
      <Scene key="myfarm" component={MyFarm} title="My Farm" hideNavBar />
      <Scene key="news" component={News} title="News" hideNavBar />
      <Scene key="tutorial" component={Tutorial} title="Tutorial" hideNavBar />
      <Scene
        key="tutorialDetails"
        component={TutorialDetails}
        title="Tutorial Details"
        hideNavBar
      />
      <Scene key="ranking" component={Ranking} title="Ranking" hideNavBar />
      <Scene key="event" component={Event} title="Event" hideNavBar />
      <Scene
        key="eventTitleAll"
        component={EventTitleAll}
        title="EventTitleAll"
        hideNavBar
      />
      <Scene
        key="cropDetails"
        component={CropDetails}
        title="CropDetails"
        hideNavBar
      />
      <Scene key="farmName" component={FarmName} title="FarmName" hideNavBar />
      <Scene key="farmTop" component={FarmTop} title="FarmTop" hideNavBar />
      <Scene key="point" component={Point} title="Point" hideNavBar />
      <Scene
        key="pointHistory"
        component={PointHistory}
        title="PointHistory"
        hideNavBar
      />
      <Scene key="profile" component={Profile} title="Profile" hideNavBar />
      <Scene
        key="waitDelivery"
        component={WaitDelivery}
        title="WaitDelivery"
        hideNavBar
      />
      <Scene
        key="waitDelivery2"
        component={WaitDelivery2}
        title="WaitDelivery2"
        hideNavBar
      />
      <Scene
        key="addressList"
        component={AddressList}
        title="AddressList"
        hideNavBar
      />
      <Scene
        key="addressInput"
        component={AddressInput}
        title="AddressInput"
        hideNavBar
      />
      <Scene
        key="addressCheck"
        component={AddressCheck}
        title="AddressCheck"
        hideNavBar
      />
      <Scene key="contact" component={Contact} title="Contact" hideNavBar />
      <Scene key="yamato" component={Yamato} title="Yamato" hideNavBar />
      <Scene key="myMenu" component={MyMenu} title="MyMenu" hideNavBar />
      <Scene key="admob" component={AdMob} hideNavBar />
      <Scene key="kiyaku" component={Kiyaku} hideNavBar />
      <Scene key="firstGuide" component={FirstGuide} hideNavBar />
      <Scene key="firstGuidePage1" component={FirstGuidePage1} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
