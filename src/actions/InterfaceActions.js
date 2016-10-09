import AppDispatcher from '../AppDispatcher'

const InterfaceActions = {
  modalSwitch (modalState) {
    AppDispatcher.dispatch({
      type: 'SWITCH_MODAL',
      payload: { modalState }
    })
  }
}

export default InterfaceActions
