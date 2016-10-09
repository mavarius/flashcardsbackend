import API from '../API'
import AppDispatcher from '../AppDispatcher'

const FlashcardActions = {
  getFlashcards () {
    API.getFlashcards()
  },

  filterFlashcards (newFilter) {
    AppDispatcher.dispatch({
      type: 'FILTER_FLASHCARDS',
      payload: { newFilter }
    })
  },

  createFlashcard (newCard) {
    API.createFlashcard(newCard)
  },

  deleteFlashcard (id) {
    API.deleteFlashcard(id)
  },

  startEdit (currentlyEditing) {
    AppDispatcher.dispatch({
      type: 'START_EDIT',
      payload: { currentlyEditing }
    })
  }
}

export default FlashcardActions
