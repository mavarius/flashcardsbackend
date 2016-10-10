import React, { Component } from 'react'
import FlashcardActions from '../actions/FlashcardActions'

export default class CardFront extends Component {
  _nextQuestion () {
    const { testDeck, currentCard } = this.props.test

    if (currentCard < (testDeck.length - 1)) {
      let nextCard = currentCard + 1
      FlashcardActions.nextQuestion(nextCard)
    } else {
      FlashcardActions.endTest()
    }
  }

  render () {
    const { testDeck, currentCard } = this.props.test

    let progressButton
    if (currentCard === (testDeck.length - 1)) {
      progressButton = <button className="btn btn-danger" onClick={() => this._nextQuestion()}>end test</button>
    } else {
      progressButton = <button className="btn btn-info" onClick={() => this._nextQuestion()}>next question</button>
    }

    return (
      <div className="row">
        <div className="card">
          <h5 className="category">{testDeck[currentCard].category.toUpperCase()}</h5>
          <h4 className="question">{testDeck[currentCard].question}</h4>
          <div>
            <div className="answer"><p>{testDeck[currentCard].answer}</p></div>
          </div>
          {progressButton}
        </div>
      </div>
    )
  }
}
