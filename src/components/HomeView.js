import React, { Component } from 'react'

// import UserActions from '../actions/UserActions'
// import UserStore from '../stores/UserStore'

export default class HomeView extends Component {
  // constructor () {
  //   super()

    // this.state = UserStore.getAll()
    // this._onChange = this._onChange.bind(this)
  // }

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
        <h1>This is the Home Page</h1>
      </div>
    )
  }
}
