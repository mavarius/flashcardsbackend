// REQUIRES
const express = require('express')
const router = express.Router()
const Flashcards = require('../models/Flashcards')

// ROUTES
// router.get('/', (req, res, next) => {
//   Flashcards.makeTest(req.query, err => {
//     if (err) return res.status(400).send(err)
//   })
//   next()
// }, (req, res) => {
//   Flashcards.testMe((err, QnA) => {
//     if (err) return res.status(400).send(err)
//     res.send(QnA)
//   })
// })

// EXPORTS
module.exports = router
