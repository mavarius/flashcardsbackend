import React, { Component } from 'react'

// import FlashcardActions from '../actions/FlashcardActions'
// import FlashcardStore from '../stores/FlashcardStore'
//
// import UserActions from '../actions/UserActions'
// import UserStore from '../stores/UserStore'

export default class TestView extends Component {
  constructor () {
    super()

    // this.state = UserStore.getAll()
    // this._onChange = this._onChange.bind(this)
  }

  // componentWillMount () {
  //   UserStore.startListening(this._onChange)
  // }
  //
  // componentDidMount () {
  //   UserActions.getStats()
  // }
  //
  // componentWillUnmount () {
  //   UserStore.stopListening(this._onChange)
  // }
  //
  // _onChange () {
  //   this.setState(UserStore.getAll())
  // }

  render () {
    return (
      <div className="row">
        <h1>This is the Test Page</h1>
      </div>
    )
  }
}
