import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _flashcards = []

let _categories = []

let _filter = []

let _testDeck = []

let _currentlyEditing = {}

class FlashcardStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_FLASHCARDS':
          _flashcards = action.payload.flashcards
          _flashcards.reverse()
          action.payload.flashcards.forEach(card => {
            _categories.indexOf(card.category) === -1 ? _categories.push(card.category) : _categories
          })
          _categories.sort()
          _filter = _categories
          this.emit('CHANGE')
          break
        case 'FILTER_FLASHCARDS':
          _filter = action.payload.newFilter
          this.emit('CHANGE')
          break
        case 'START_EDIT':
          _currentlyEditing = action.payload.currentlyEditing
          break;
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getFlashcards () {
    return _flashcards
  }

  getTestDeck () {
    return _testDeck
  }

  getCats () {
    return {
      categories: _categories,
      filter: _filter
    }
  }

  getEditing () {
    return _currentlyEditing
  }
}

export default new FlashcardStore()
