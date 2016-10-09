import React, { Component } from 'react'

import NewCardForm from './NewCardForm'
import InterfaceActions from '../actions/InterfaceActions'

export default class Modal extends Component {

  _closeModal () {
    InterfaceActions.modalSwitch(false)
  }

  render () {
    const { modal } = this.props

    let modalClass
    modal ? modalClass = 'modalOpen' : modalClass = 'modalClosed'

    return (
      <div id="myModal" className={modalClass}>
        <div className="modalContent">
          <div className="row">
            <span className="close" onClick={() => this._closeModal()}>close</span>
          </div>
          <NewCardForm />
        </div>
      </div>
    )
  }
}
