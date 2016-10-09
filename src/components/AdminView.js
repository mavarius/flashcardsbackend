import React, { Component } from 'react'

import Modal from './Modal'

import InterfaceActions from '../actions/InterfaceActions'
import InterfaceStore from '../stores/InterfaceStore'

import FlashcardList from './FlashcardList'
import FlashcardCategories from './FlashcardCategories'

import FlashcardActions from '../actions/FlashcardActions'
import FlashcardStore from '../stores/FlashcardStore'

// import UserActions from '../actions/UserActions'
// import UserStore from '../stores/UserStore'

export default class AdminView extends Component {
  constructor () {
    super()

    this.state = {
      modal: InterfaceStore.getModalState(),
      flashcards: FlashcardStore.getFlashcards(),
      cats: FlashcardStore.getCats(),
      testDeck: FlashcardStore.getTestDeck(),
      currentlyEditing: FlashcardStore.getEditing()
      // userDetails: UserStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    FlashcardStore.startListening(this._onChange)
    InterfaceStore.startListening(this._onChange)
    // UserStore.startListening(this._onChange)
  }

  componentDidMount () {
    FlashcardActions.getFlashcards()
    FlashcardStore.getCats()
    // UserActions.getStats()
  }

  componentWillUnmount () {
    FlashcardStore.stopListening(this._onChange)
    InterfaceStore.stopListening(this._onChange)
    // UserStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      modal: InterfaceStore.getModalState(),
      flashcards: FlashcardStore.getFlashcards(),
      cats: FlashcardStore.getCats(),
      testDeck: FlashcardStore.getTestDeck(),
      currentlyEditing: FlashcardStore.getEditing()
      // userDetails: UserStore.getAll()
    })
  }

  _openModal () {
    InterfaceActions.modalSwitch(true)
  }

  render () {
    return (
      <div className="row">
        <h2>Your Flashcards</h2>
        <button className="btn btn-success" onClick={() => this._openModal()}>add new flashcard</button>
        <Modal {...this.state} />
        <FlashcardCategories {...this.state} />
        <FlashcardList {...this.state} />
      </div>
    )
  }
}
