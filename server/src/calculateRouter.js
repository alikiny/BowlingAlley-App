import express from 'express'

import { calculate } from './calculateHandler.js'

const calculateRouter = express.Router()
calculateRouter.get('/', calculate)

export default calculateRouter