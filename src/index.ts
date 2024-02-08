import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'

const app = express()
const port = process.env.PORT || 3978

app.use('/api/', routes)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(400).json({
    success: false,
    message: err.message || 'An error occured.',
    errors: err.name || [],
  })
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  res.status(404).json({ success: false, message: 'Resource not found.' })
})

// Start the server
app.listen(port)

console.log(`Server started on port ${port}`)
