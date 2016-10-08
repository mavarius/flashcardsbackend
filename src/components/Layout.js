import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    return (
      <div>
        <div className="backgroundImage"></div>
        <div className="container">
          <h1 className="app-title">reactcards</h1>
          <Link className="navBtn" to="/" onlyActiveOnIndex>home</Link>
          <Link className="navBtn" to="/admin">profile</Link>
          <Link className="navBtn" to="/test">test me</Link>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
