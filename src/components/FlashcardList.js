import React, { Component } from 'react'
import FlashcardActions from '../actions/FlashcardActions'

export default class FlashcardList extends Component {
  _deleteCard (id) {
    FlashcardActions.deleteFlashcard(id)
  }

  _startEdit (id) {
    const { flashcards } = this.props

    let currentlyEditing = flashcards.filter(flashcard => flashcard.id === id)

    FlashcardActions.startEdit(currentlyEditing[0])
  }

  _endEdit () {
    FlashcardActions.endEdit()
  }

  _saveChanges (id) {
    const { newQuestion, newCategory, newAnswer, newOption1, newOption2, newOption3 } = this.refs

    let updatedFlashcard = {
      question: newQuestion.value,
      category: newCategory.value,
      answer: newAnswer.value,
      options: [newOption1.value, newOption2.value, newOption3.value]
    }

    FlashcardActions.saveChanges(id, updatedFlashcard)
  }

  render () {
    const { flashcards, cats, currentlyEditing } = this.props
    const { filter } = cats

    let flashcardsList = null

    if (flashcards && filter) {
      var filtered = flashcards.filter(flashcard => (filter.indexOf(flashcard.category) !== -1))

      flashcardsList = filtered.map((flashcard, i) => {
        if (currentlyEditing.id === flashcard.id) {
          return (
            <tr key={i}>
              <td className="question"><input className="form-control" ref="newQuestion" type="text" defaultValue={flashcard.question} required /><h5 className="category"><input className="form-control" ref="newCategory" type="text" defaultValue={flashcard.category} required /></h5></td>
              <td>
                <ul>
                  <li className="correct"><input className="form-control" ref="newAnswer" type="text" defaultValue={flashcard.answer} required /></li>
                  <input className="form-control" ref="newOption1" type="text" defaultValue={flashcard.options[0]} />
                  <input className="form-control" ref="newOption2" type="text" defaultValue={flashcard.options[1]} />
                  <input className="form-control" ref="newOption3" type="text" defaultValue={flashcard.options[2]} />
                </ul>
              </td>
              <td><button className="btn btn-success" onClick={() => this._saveChanges(flashcard.id)}>save</button></td>
              <td><button className="btn" onClick={() => this._endEdit()}>cancel</button></td>
            </tr>
          )
        } else {
          return (
            <tr key={i}>
              <td className="question">{flashcard.question}<h5 className="category">{flashcard.category.toUpperCase()}</h5></td>
              <td>
                <ul>
                  <li className="correct">{flashcard.answer}</li>
                  {flashcard.options.map((option, i) => <li className="option" key={i}>{option}</li>)}
                </ul>
              </td>
              <td><button className="btn btn-info" onClick={() => this._startEdit(flashcard.id)}>edit</button></td>
              <td><button className="btn btn-danger" onClick={() => this._deleteCard(flashcard.id)}>x</button></td>
            </tr>
          )
        }
      })
    }

    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>QUESTION</th>
              <th>ANSWERS</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {flashcardsList || <tr><td>You have no flashcards</td></tr>}
          </tbody>
        </table>
      </div>
    )
  }
}
