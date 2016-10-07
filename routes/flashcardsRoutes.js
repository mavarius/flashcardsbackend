// REQUIRES
const express = require('express')
const router = express.Router()
const Flashcards = require('../models/Flashcards')

// ROUTES
router.get('/', (req, res) => {
  Flashcards.getAll((err, cards) => {
    if (err) return res.status(400).send(err)
    res.send(cards)
  })
})

router.get('/:id', (req, res) => {
  Flashcards.getById(req.params.id, (err, card) => {
    if (err) return res.status(400).send(err)
    res.send(card)
  })
})

router.post('/', (req, res) => {
  Flashcards.create(req.body, err => {
    if (err) return res.status(400).send(err)
    res.send('New card added')
  })
})

router.put('/:id', (req, res) => {
  Flashcards.replace(req.params, req.body, err => {
    if (err) return res.status(400).send(err)
    res.send('card replaced')
  })
})

router.delete('/:id', (req, res) => {
  Flashcards.delete(req.params.id, err => {
    if (err) return res.status(400).send(err)
    res.send('card deleted')
  })
})

// EXPORTS
module.exports = router
