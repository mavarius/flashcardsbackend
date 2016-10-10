import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _flashcards = []

let _categories = []

let _filter = []

let _testDeck = []

let _currentCard = 0

let _phase = 'question'

let _currentlyEditing = {
  id: 'id',
  category: 'category',
  question: 'question',
  answer: 'answer',
  options: ['question1', 'question2', 'question3']
}

let _testing = false

class FlashcardStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_FLASHCARDS':
          _flashcards = action.payload.flashcards
          _flashcards.reverse()
          _categories = []
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
          this.emit('CHANGE')
          break
        case 'END_EDIT':
          _currentlyEditing = {
            id: 'id',
            category: 'category',
            question: 'question',
            answer: 'answer',
            options: ['question1', 'question2', 'question3']
          }
          this.emit('CHANGE')
          break
        case 'RECEIVE_TEST_DECK':
          _testDeck = action.payload.testDeck
          _testing = true
          this.emit('CHANGE')
          break
        case 'END_TEST':
          _testing = false
          _phase = 'question'
          this.emit('CHANGE')
          break
        case 'SHOW_ANSWER':
          _phase = 'answer'
          this.emit('CHANGE')
          break
        case 'NEXT_QUESTION':
          _phase = 'question'
          _currentCard = action.payload.nextCard
          this.emit('CHANGE')
          break
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
    return {
      testDeck: _testDeck,
      testing: _testing,
      currentCard: _currentCard,
      phase: _phase
    }
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
