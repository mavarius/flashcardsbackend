import React, { Component } from 'react'
import FlashcardActions from '../actions/FlashcardActions'
import InterfaceActions from '../actions/InterfaceActions'

export default class NewCardForm extends Component {
  submitNewCard (e) {
    e.preventDefault()

    const { newQuestion, newCategory, newAnswer, newOption1, newOption2, newOption3 } = this.refs

    let newCard = {
      question: newQuestion.value,
      category: newCategory.value,
      answer: newAnswer.value,
      options: [newOption1.value, newOption2.value, newOption3.value]
    }

    newQuestion.value = ''
    newCategory.value = ''
    newAnswer.value = ''
    newOption1.value = ''
    newOption2.value = ''
    newOption3.value = ''

    FlashcardActions.createFlashcard(newCard)
    InterfaceActions.modalSwitch(false)
  }

  cancelForm () {
    const { newQuestion, newCategory, newAnswer, newOption1, newOption2, newOption3 } = this.refs

    newQuestion.value = ''
    newCategory.value = ''
    newAnswer.value = ''
    newOption1.value = ''
    newOption2.value = ''
    newOption3.value = ''

    InterfaceActions.modalSwitch(false)
  }

  render () {
    return (
      <div className="row">
        <form onSubmit={(e) => this.submitNewCard(e)}>
          <div className="form-group row">
            <label htmlFor="question" className="col-xs-2 col-form-label">Question:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newQuestion" type="text" placeholder="What is your question?" id="question" required />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="category" className="col-xs-2 col-form-label">Category:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newCategory" type="text" placeholder="Subject / Category" id="category" required />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="answer" className="col-xs-2 col-form-label">Correct Answer:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newAnswer" type="text" placeholder="This is the correct answer" id="answer" required />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="option1" className="col-xs-2 col-form-label">Multiple Choice Option One:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newOption1" type="text" placeholder="Option One" id="option1" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="option2" className="col-xs-2 col-form-label">Multiple Choice Option Two:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newOption2" type="text" placeholder="Option Two" id="option2" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="option3" className="col-xs-2 col-form-label">Multiple Choice Option Three:</label>
            <div className="col-xs-10">
              <input className="form-control" ref="newOption3" type="text" placeholder="Option Three" id="option3" />
            </div>
          </div>
          <button className="btn btn-success">save</button>
        </form>
        <button className="btn btn-default" onClick={() => this.cancelForm()}>cancel</button>
      </div>
    )
  }
}
