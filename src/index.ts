import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';

type WeatherData = {
    city: string;
    temperature: number;
    chanceOfRain: number;
};

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(helmet());

const port = 5000;

const weatherData: WeatherData[] = [
    {
        "city": "Brno",
        "temperature": 14,
        "chanceOfRain": 5
    },
    {
        "city": "Prague",
        "temperature": 16,
        "chanceOfRain": 20
    },
    {
        "city": "Bratislava",
        "temperature": 13,
        "chanceOfRain": 20
    },
    {
        "city": "London",
        "temperature": 13,
        "chanceOfRain": 10
    },
    {
        "city": "Vienna",
        "temperature": 15,
        "chanceOfRain": 0
    },
    {
        "city": "Paris",
        "temperature": 22,
        "chanceOfRain": 0
    },
];

app.get('/api/weather', (_req: Request, res: Response<WeatherData[]>) => res.send(weatherData));

app.listen(port, () => console.log(`API listening at http://localhost:${port}`));
