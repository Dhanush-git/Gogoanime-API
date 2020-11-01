const scapper = require('./scapper')
const express = require('express')
const { env } = require('process')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('👋 Hello world🌍, Use /api for API Documentation ')
})

app.get('/api', (req, res) => {
    res.send("👋 Welcome to 🦄 GogoAnime API 🧬")
})


app.get('/Popular', async (req, res) => {
    const result = await scapper.popular()
    res.json(result)
})

app.get('/NewSeasons', async (req, res) => {
    const result = await scapper.newSeason()
    res.json(result)
})


port = env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
