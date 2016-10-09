import axios from 'axios'
import ServerActions from './actions/ServerActions'

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
  }
}

export default API
