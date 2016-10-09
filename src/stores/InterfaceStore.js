import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _modal = false

class InterfaceStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'SWITCH_MODAL':
          _modal = action.payload.modalState
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

  getModalState () {
    return _modal
  }
}

export default new InterfaceStore()
