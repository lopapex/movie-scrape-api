import { Router } from 'express'
import all from './all'

const routes = Router()

/**
 * @api {get} / All weather data
 * @apiName Get Weather Data
 * @apiGroup Weather
 *
 * @apiSuccess {String} list of weather data.
 * @apiSuccess {String} city City name.
 */
routes.get('/', all)

export default routes
