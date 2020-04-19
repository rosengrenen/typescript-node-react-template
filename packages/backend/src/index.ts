import 'reflect-metadata';

import RedisSession from 'connect-redis';
import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import redis from 'redis';

import createApolloServer from './apollo';

dotenv.config();

const redisClient = redis.createClient({
	host: 'redis',
	password: String(process.env.REDIS_PASSWORD),
});
const RedisSessionStore = RedisSession(session);

(async function () {
	try {
		const app = express();

		app.get('/', (req, res) => {
			return res.send(req.query);
		});

		app.use(
			session({
				store: new RedisSessionStore({ client: redisClient }),
				secret: String(process.env.SESSION_SECRET),
				resave: false,
				saveUninitialized: false,
			}),
		);

		const server = await createApolloServer();
		server.applyMiddleware({ app });

		app.listen(3000, () => {
			console.log(`Server ready`);
		});
	} catch (e) {
		console.error(e);
	}
})();
