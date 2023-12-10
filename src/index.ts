import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 5000;


app.use('/api/', routes);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occured.',
    errors: err.error || [],
  });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

// Start the server
app.listen(port);

console.log(`Server started on port ${port}`);