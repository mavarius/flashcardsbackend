const express = require('express')
const router = express.Router()

const flashcards = require('./flashcardsRoutes')
const random = require('./randomRoutes')
const test = require('./testRoutes')

router.use('/flashcards', flashcards)
router.use('/random', random)
router.use('/test', test)

module.exports = router
