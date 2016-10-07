// REQUIRES
const express = require('express')
const router = express.Router()
const Flashcards = require('../models/Flashcards')

// ROUTES
router.get('/', (req, res) => {
  Flashcards.getRandom(req.query, (err, cards) => {
    if (err) return res.status(400).send(err)
    res.send(cards)
  })
})

// EXPORTS
module.exports = router
