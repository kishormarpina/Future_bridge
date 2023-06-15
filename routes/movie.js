const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const movieDataPath = path.join(__dirname, '../models/movies.json')

router.get('/movies', (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(movieDataPath, 'utf-8'))
        res.json(data.movies)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

router.post('/movie', (req, res) => {
    try {
        const { name, rating, releaseDate } = req.body
        if (!name || !rating || !releaseDate) {
            return res.status(400).json({ error: "Missing required Params" })
        }
        const data = JSON.parse(fs.readFileSync(movieDataPath, 'utf-8'))

        console.log("in post", name)
        const newMovie = {
            name,
            rating,
            releaseDate
        }
        data.movies.push(newMovie)
        fs.writeFileSync(movieDataPath, JSON.stringify(data))
        res.json(newMovie)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = router