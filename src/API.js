import axios from 'axios'
import ServerActions from './actions/ServerActions'
import FlashcardActions from './actions/FlashcardActions'

const API = {
  getFlashcards () {
    axios.get('/api/flashcards')
      .then(response => {
        let flashcards = response.data

        ServerActions.receiveFlashcards(flashcards)
      })
      .catch(console.error)
  },

  createFlashcard (newFlashcard) {
    axios.post('/api/flashcards', newFlashcard)
      .then(response => {
        console.log('response: ', response)
        this.getFlashcards()
      })
      .catch(console.error)
  },

  deleteFlashcard (id) {
    axios.delete(`/api/flashcards/${id}`)
      .then(response => {
        console.log('response: ', response)
        this.getFlashcards()
      })
      .catch(console.error)
  },

  saveChanges (id, updatedFlashcard) {
    axios.put(`/api/flashcards/${id}`, updatedFlashcard)
      .then(response => {
        console.log('response: ', response)
        FlashcardActions.endEdit()
        this.getFlashcards()
      })
      .catch(console.error)
  },

  makeTestDeck (deckFilter) {
    axios.get('/api/test/make/' + (deckFilter || ''))
      .then(response => {
        this.getTest()
      })
      .catch(console.error)
  },

  getTest () {
    axios.get('/api/test/')
      .then(response => {
        let testDeck = response.data
        // console.log('get response: ', response)
        ServerActions.receiveTestDeck(testDeck)
      })
      .catch(console.error)
  }
}

export default API
