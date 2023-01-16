/* eslint-disable indent */
/* eslint-disable semi */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./database/db')
const postCardRoutes = require('./routes/postCard')
const errorHandler = require('./middleware/error')

connectDB()
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.use('/api/postcard', postCardRoutes)

app.use(errorHandler)

// eslint-disable-next-line no-console
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// this will print readable error
process.on('unhandledRejection', (err, promise) => {
   // eslint-disable-next-line no-console
   console.log(`Logged error: ${err}`)
   server.close(() => process.exit(1))
})
