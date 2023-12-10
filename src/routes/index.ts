import { Request, Response, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import weather from './weather/index';

const routes = Router();
// configure app to use bodyParser()
// this will let us get the data from a POST
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
routes.use(cors());
routes.use(morgan('combined'));
routes.use(helmet());

routes.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Hello world!' });
});

routes.use('/weather', weather);

export default routes;