import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

async function createApolloServer() {
	const schema = await buildSchema({
		resolvers: [__dirname + '/modules/**/*.{mutation,query,field}.{js,ts}'],
	});

	return new ApolloServer({ schema });
}

export default createApolloServer;
