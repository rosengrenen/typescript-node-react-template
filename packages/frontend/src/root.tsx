import ReactRouter from './config/react-router';
import React from 'react';

import ApolloProvider from './config/apollo-provider';
import AppScreen from './screens/app';

const Root = () => (
	<ApolloProvider>
		<ReactRouter>
			<AppScreen />
		</ReactRouter>
	</ApolloProvider>
);

export default Root;
