const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const lodash = require('lodash')

const flashcardsJSON = path.join(__dirname, '../data/flashcards.json')
const testJSON = path.join(__dirname, '../data/test.json')

// GET ALL CARDS
exports.getAll = function (cb) {
  fs.readFile(flashcardsJSON, (err, buffer) => {
    if (err) return cb(err)

    let data
    try {
      data = JSON.parse(buffer)
    } catch (e) {
      data = []
    }

    cb(null, data)
  })
}

// GET TEST DECK
exports.getTest = function (cb) {
  fs.readFile(testJSON, 'utf8', (err, buffer) => {
    if (err) return cb(err)

    let data
    try {
      data = JSON.parse(buffer)
    } catch (e) {
      data = []
    }

    cb(null, data)
  })
}

// GET BY ID
exports.getById = function (filterId, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)
    let filtered = items.filter(item => (item.id === filterId))
    cb(null, filtered)
  })
}

// FILTER BY CATEGORY AND RANDOMIZE
exports.randomize = function (query, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)

    if (query.category) {
      items = items.filter(item => (query.category.indexOf(item.category) !== -1))
    }

    let randomized = lodash.shuffle(items)

    cb(null, randomized)
  })
}

// GET RANDOM CARD
exports.getRandom = function (query, cb) {
  exports.randomize(query, (err, randomized) => {
    if (err) return cb(err)

    let random = randomized[0]

    cb(null, random)
  })
}

// WRITE TO FLASHCARDS
exports.write = function (newData, cb) {
  let json = JSON.stringify(newData)
  fs.writeFile(flashcardsJSON, json, cb)
}

// WRITE TO TEST
exports.writeTest = function (newData, cb) {
  let json = JSON.stringify(newData)
  fs.writeFile(testJSON, json, cb)
}

// ADD NEW CARD
exports.create = function (newItem, cb) {
  newItem.id = uuid()
  exports.getAll((err, items) => {
    if (err) return cb(err)
    items.push(newItem)
    exports.write(items, cb)
  })
}

// UPDATE CARD
exports.replace = function (filterId, updatedItem, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)

    items = items.map(item => {
      if (item.id === filterId) {
        let oldId = item.id
        item = updatedItem
        item.id = oldId
        return item
      } else {
        return item
      }
    })

    exports.write(items, cb)
  })
}

// DELETE CARD
exports.delete = function (filterId, cb) {
  exports.getAll((err, items) => {
    if (err) return cb(err)
    items = items.filter(item => (item.id !== filterId))
    exports.write(items, cb)
  })
}

// MAKE TEST
exports.makeTest = function (query, cb) {
  exports.getTest((err, testItems) => {
    if (err) return cb(err)

    if (testItems.length === 0) {
      exports.randomize(query, (err, randomized) => {
        if (err) return cb(err)
        exports.writeTest(randomized, cb)
      })
    }

    return
  })
}

// GIVE TEST QUESTIONS TO THE USER
// exports.testMe = function (cb) {
//   exports.getTest((err, testItems) => {
//     if (err) return cb(err)
//
//     let allOptions = testItems[0].incorrectOptions
//     // allOptions.push(testItems[0].answer)
//     // let options = allOptions.map(option => `${option}\n`)
//
//     console.log('allOptions: ', typeof allOptions)
//
//     let QnA = `${testItems[0].question}\n${allOptions}`
//
//     cb(null, QnA)
//   })
// }
