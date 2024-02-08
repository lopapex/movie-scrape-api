import { WeatherData } from '../types/weather'
import { Request, Response } from 'express'

const weatherData: WeatherData[] = [
  {
    city: 'Brno',
    temperature: 14,
    chanceOfRain: 5,
  },
  {
    city: 'Prague',
    temperature: 16,
    chanceOfRain: 20,
  },
  {
    city: 'Bratislava',
    temperature: 13,
    chanceOfRain: 20,
  },
  {
    city: 'London',
    temperature: 13,
    chanceOfRain: 10,
  },
  {
    city: 'Vienna',
    temperature: 15,
    chanceOfRain: 0,
  },
  {
    city: 'Paris',
    temperature: 22,
    chanceOfRain: 0,
  },
]

export default (_req: Request, res: Response<WeatherData[]>) => res.send(weatherData)
