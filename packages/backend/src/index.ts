import express from 'express';

(async function () {
	try {
		const app = express();

		app.get('/', (req, res) => {
			return res.send(req.query);
		});

		app.listen(3000, () => {
			console.log(`Server ready`);
		});
	} catch (e) {
		console.error(e);
	}
})();
