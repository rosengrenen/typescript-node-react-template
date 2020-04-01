import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import CreateExampleScreen from './screens/create-example';
import ListExamplesScreen from './screens/list-examples';

const ExampleView = () => {
	const { url } = useRouteMatch();

	return (
		<div>
			<ul>
				<li>
					<Link to="/">Go home</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${url}/create`} component={CreateExampleScreen} />
				<Route path={`${url}/list`} component={ListExamplesScreen} />
			</Switch>
		</div>
	);
};

export default ExampleView;
