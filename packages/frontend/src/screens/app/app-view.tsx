import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import ExampleScreen from './screens/example';
import { AppTitle } from './app-styles';

const AppView = () => {
	return (
		<>
			<AppTitle>Hello</AppTitle>
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Route path="/examples" component={ExampleScreen} />
			</Switch>
		</>
	);
};

export default AppView;
