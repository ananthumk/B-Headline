const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const PORT = process.env.PORT || 4000

const route = require('./routes/headingRoutes')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', route)

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Mongo DB connected')
).catch(err => console.log('Mongo DB connection error', err))


app.listen(PORT, () => {
    console.log(`Server running at http://lo0calhost:${PORT}`);
})

module.exports = app;