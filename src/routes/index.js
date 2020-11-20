import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

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

const Routes = () => (
	<Router>
		<Scene key = "root">
			<Scene key = "welcome" component = {Welcome} title = "Welcome" initial = {true} />
			<Scene key = "login" component = {Login} title = "Login" />
			<Scene key = "home" component = {Home} title = "Home" />
			<Scene key = "myfarm" component = {MyFarm} title = "My Farm" />
			<Scene key = "news" component = {News} title = "News" />
			<Scene key = "tutorial" component = {Tutorial} title = "Tutorial" />
			<Scene key = "tutorialDetails" component = {TutorialDetails} title = "Tutorial Details" />
			<Scene key = "ranking" component = {Ranking} title = "Ranking" />
			<Scene key = "event" component = {Event} title = "Event" />
			<Scene key = "eventTitleAll" component = {EventTitleAll} title = "EventTitleAll" />
			<Scene key = "cropDetails" component = {CropDetails} title = "CropDetails" />
			<Scene key = "farmName" component = {FarmName} title = "FarmName" />
			<Scene key = "farmTop" component = {FarmTop} title = "FarmTop" />
			<Scene key = "point" component = {Point} title = "Point" />
			<Scene key = "pointHistory" component = {PointHistory} title = "PointHistory" />
			<Scene key = "profile" component = {Profile} title = "Profile" />
			<Scene key = "waitDelivery" component = {WaitDelivery} title = "WaitDelivery" />
			<Scene key = "waitDelivery2" component = {WaitDelivery2} title = "WaitDelivery2" />
			<Scene key = "addressList" component = {AddressList} title = "AddressList" />
		</Scene>
	</Router>
)
export default Routes;
