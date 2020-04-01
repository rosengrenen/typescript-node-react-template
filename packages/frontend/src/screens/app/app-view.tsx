import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import ExampleScreen from './screens/example';

const AppView = () => {
	return (
		<div>
			<h2>Hello</h2>
			<Switch>
				<Route exact path="/" component={HomeScreen} />
				<Route path="/examples" component={ExampleScreen} />
			</Switch>
		</div>
	);
};

export default AppView;
