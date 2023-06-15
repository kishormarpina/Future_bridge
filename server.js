const express = require('express')
const cors = require('cors')
const movie = require('./routes/movie')

const app = express()
app.use(cors())
app.use(express.json({ extended: false }))
app.get('/', (req, res) => {
    res.send('health check')
})

app.use('/v1', movie)
const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})