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
  },

  endEdit () {
    AppDispatcher.dispatch({
      type: 'END_EDIT'
    })
  },

  saveChanges (id, updatedFlashcard) {
    API.saveChanges(id, updatedFlashcard)
  },

  makeTestDeck (filter) {
    API.makeTestDeck(filter)
  },

  endTest () {
    AppDispatcher.dispatch({
      type: 'END_TEST'
    })
  },

  showAnswer () {
    AppDispatcher.dispatch({
      type: 'SHOW_ANSWER'
    })
  },

  nextQuestion (nextCard) {
    AppDispatcher.dispatch({
      type: 'NEXT_QUESTION',
      payload: { nextCard }
    })
  }
}

export default FlashcardActions
