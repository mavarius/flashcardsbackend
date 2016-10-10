import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveFlashcards (flashcards) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FLASHCARDS',
      payload: { flashcards }
    })
  },

  receiveTestDeck (testDeck) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_TEST_DECK',
      payload: { testDeck }
    })
  }
}

export default ServerActions
