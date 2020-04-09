import 'reflect-metadata';

import { createConnection } from 'typeorm';

import createApolloServer from './apollo';
import typeormConfig from './typeorm-config';

(async function () {
	try {
		await createConnection(typeormConfig);

		const server = await createApolloServer();
		const { url } = await server.listen(3000);
		console.log(`Server ready at ${url}`);
	} catch (e) {
		console.error(e);
	}
})();
