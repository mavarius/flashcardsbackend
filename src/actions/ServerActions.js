import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveFlashcards (flashcards) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_FLASHCARDS',
      payload: { flashcards }
    })
  }
}

export default ServerActions
