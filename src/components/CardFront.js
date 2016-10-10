import React, { Component } from 'react'
import FlashcardActions from '../actions/FlashcardActions'
import lodash from 'lodash'

export default class CardFront extends Component {
  _showAnswer () {
    FlashcardActions.showAnswer()
  }

  render () {
    const { testDeck, currentCard } = this.props.test

    let choices = testDeck[currentCard].options
    if (choices.length < 4) {
      lodash.shuffle(choices.push(testDeck[currentCard].answer))
    }

    return (
      <div className="row">
        <div className="card">
          <h5 className="category">{testDeck[currentCard].category.toUpperCase()}</h5>
          <span className="question">{testDeck[currentCard].question}</span>
          <div>
            {choices.map((option, i) => <div key={i} className="radio" onClick={() => this._showAnswer()}><label><input type="radio" name="optradio" />{option}</label></div>)}
          </div>
        </div>
      </div>
    )
  }
}
