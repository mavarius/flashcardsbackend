import React, { Component } from 'react'
import FlashcardActions from '../actions/FlashcardActions'

export default class FlashcardList extends Component {
  _deleteCard (id) {
    FlashcardActions.deleteFlashcard(id)
  }

  _startEdit (id) {
    const { flashcards } = this.props

    let currentlyEditing = flashcards.filter(flashcard => flashcard.id === id)

    console.log('currentlyEditing: ', currentlyEditing)
    // FlashcardActions.startEdit(currentlyEditing)
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
              <td className="question"><input className="form-control" ref="editQuestion" type="text" defaultValue={flashcard.question} required /><h5 className="category">{flashcard.category.toUpperCase()}</h5></td>
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
