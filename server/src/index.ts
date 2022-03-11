import '../logger';
import express, { Request, Response, NextFunction } from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/health-check', (req: Request, res: Response, next: NextFunction) => {
	res.json({ message: 'Hello from server!' });
});

app.get('/todos', (req, res, next) => {
	fetch('https://jsonplaceholder.typicode.com/todos');
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
