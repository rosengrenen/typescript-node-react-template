import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { AppTitle } from './app-styles';
import ExampleScreen from './screens/example';
import HomeScreen from './screens/home';

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
