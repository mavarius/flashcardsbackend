import React, { Component } from 'react'

import FlashcardActions from '../actions/FlashcardActions'
import FlashcardStore from '../stores/FlashcardStore'

import FlashcardCategories from './FlashcardCategories'
import FlashcardTest from './FlashcardTest'

// import UserActions from '../actions/UserActions'
// import UserStore from '../stores/UserStore'

export default class TestView extends Component {
  constructor () {
    super()

    this.state = {
      flashcards: FlashcardStore.getFlashcards(),
      cats: FlashcardStore.getCats(),
      test: FlashcardStore.getTestDeck(),
      currentlyEditing: FlashcardStore.getEditing()
      // userDetails: UserStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    FlashcardStore.startListening(this._onChange)
    // UserStore.startListening(this._onChange)
  }

  componentDidMount () {
    FlashcardActions.getFlashcards()
    FlashcardStore.getCats()
    // UserActions.getStats()
  }

  componentWillUnmount () {
    FlashcardStore.stopListening(this._onChange)
    // UserStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      flashcards: FlashcardStore.getFlashcards(),
      cats: FlashcardStore.getCats(),
      test: FlashcardStore.getTestDeck(),
      currentlyEditing: FlashcardStore.getEditing()
      // userDetails: UserStore.getAll()
    })
  }

  _startTest () {
    const { flashcards } = this.state
    const {filter, categories} = this.state.cats

    let deckFilter = `?category=${[...filter]}`
    
    FlashcardActions.makeTestDeck(deckFilter)
  }

  _endTest () {
    FlashcardActions.endTest()
  }

  render () {
    const { testing } = this.state.test

    return (
      <div className="row">
        {testing ? <div>
          <button className="btn btn-danger" onClick={() => this._endTest()}>end test</button>
          <FlashcardTest {...this.state} />
        </div>
        : <div>
          <h4>Select subjects to start test</h4>
          <FlashcardCategories {...this.state} />
          <button className="btn btn-success" onClick={() => this._startTest()}>start test</button>
        </div>}
      </div>
    )
  }
}
