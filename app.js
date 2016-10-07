const PORT = 8000

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const Flashcards = require('./models/Flashcards')

const app = express()

// MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ROUTES
app.get('/flashcards', (req, res) => {
  Flashcards.getAll((err, cards) => {
    if (err) return res.status(400).send(err)
    res.send(cards)
  })
})

app.get('/flashcards/:id', (req, res) => {
  Flashcards.getById(req.params.id, (err, card) => {
    if (err) return res.status(400).send(err)
    res.send(card)
  })
})

app.get('/random', (req, res) => {
  Flashcards.getRandom(req.query, (err, cards) => {
    if (err) return res.status(400).send(err)
    res.send(cards)
  })
})

app.get('/test', (req, res, next) => {
  Flashcards.makeTest(req.query, err => {
    if (err) return res.status(400).send(err)
  })
  next()
}, (req, res) => {
  Flashcards.testMe((err, QnA) => {
    if (err) return res.status(400).send(err)
    res.send(QnA)
  })
})

app.post('/flashcards', (req, res) => {
  Flashcards.create(req.body, err => {
    if (err) return res.status(400).send(err)
    res.send('New card added')
  })
})

app.put('/flashcards/:id', (req, res) => {
  Flashcards.replace(req.params, req.body, err => {
    if (err) return res.status(400).send(err)
    res.send('card replaced')
  })
})

app.delete('/flashcards/:id', (req, res) => {
  Flashcards.delete(req.params.id, err => {
    if (err) return res.status(400).send(err)
    res.send('card deleted')
  })
})

// LISTENER
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`)
})
