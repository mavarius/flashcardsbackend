import React, { Component } from 'react'

import FlashcardActions from '../actions/FlashcardActions'

export default class FlashcardCategories extends Component {

  _toggleFilter (e) {
    const { filter } = this.props.cats

    let item = e.target.innerText
    let newFilter = filter.slice(0, filter.length)
    let index = newFilter.indexOf(item)

    if (index === -1) {
      newFilter.push(item)
    } else {
      newFilter.splice(index, 1)
    }

    FlashcardActions.filterFlashcards(newFilter)
  }

  render () {
    const { categories, filter } = this.props.cats

    let filterBtn = ''

    let cardCategories = null

    if (categories) {
      cardCategories = categories.map((category, i) => {
        if (filter.indexOf(category) === -1) filterBtn = 'btn filterBtn btn-default'
        else filterBtn = 'btn filterBtn btn-info'
        return (
          <button onClick={(e) => this._toggleFilter(e)} className={filterBtn} ref={category} key={i}>{category}</button>
        )
      })
    }

    return (
      <div className="row categories">
        {cardCategories}
      </div>
    )
  }
}
