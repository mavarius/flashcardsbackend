import React, { Component } from 'react'

import CardFront from './CardFront'
import CardBack from './CardBack'

export default class FlashcardTest extends Component {
  render () {
    const { phase } = this.props.test

    let currCard = null

    if (phase === 'answer') {
      currCard = <CardBack {...this.props} />
    } else {
      currCard = <CardFront {...this.props} />
    }

    return (
      <div className="row">
        {phase ? currCard : null}
      </div>
    )
  }
}
