const express = require('express')
const path = require('path')
const {clog} = require('./middleware/clog')
const api = require('./routes/index.js')

const PORT = process.env.PORT ||  3001

const app = express()
// Import cLog
app.use(clog)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
// Middleware
app.use('/api', api) // Routes to index.js in Routes

// GET Route for homepage
app.get('/', (req,res) => 
res.sendFile(path.join(__dirname, '/public/index.html'))
)

// GET Route for notes page
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// Open server log
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`))