import '../logger.ts';
import express, { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/health-check', (req: Request, res: Response, next: NextFunction) => {
	res.json({ message: 'Hello from server!' });
});

app.get('/todos', async (req, res, next) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
		method: 'GET',
	});
	const content = await response.json();
	console.log({ response: content });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
