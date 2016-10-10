// REQUIRES
const express = require('express')
const router = express.Router()
const Flashcards = require('../models/Flashcards')

// MIDDLEWARE
router.get('/make', (req, res) => {
  Flashcards.makeTest(req.query, err => {
    if (err) return res.status(400).send(err)
    res.send()
  })
})

// ROUTES
router.get('/', (req, res) => {
  Flashcards.getTest((err, test) => {
    if (err) return res.status(400).send(err)
    res.send(test)
  })
})

// EXPORTS
module.exports = router
