import React from 'react';
import { ApolloProvider as AP } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

console.log(process.env.GRAPHQL_API_ENDPOINT);

const client = new ApolloClient({
	uri: process.env.GRAPHQL_API_ENDPOINT,
});

const ApolloProvider: React.FC = ({ children }) => {
	return <AP client={client}>{children}</AP>;
};

export default ApolloProvider;
