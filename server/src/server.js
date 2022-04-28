import express from 'express'
import dotenv from 'dotenv'

import calculateRouter from './calculateRouter.js'

dotenv.config({ path: '.env' })
const app = express()
const port = process.env.PORT

app.listen(port, () =>
    console.log(`App running on port ${port}`)
)

app.use('/', calculateRouter)

/*app.get('/', (req, res) => {
    res.send("GET Request Called")
})*/

