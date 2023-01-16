/* eslint-disable semi */
/* eslint-disable indent */
const { connect } = require('mongoose')

const connectDB = async () => {
   await connect(`${process.env.MONGO_URI}`)
   // eslint-disable-next-line no-console
   console.log('MongoDB connected')
}

module.exports = connectDB
