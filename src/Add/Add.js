import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from './actions'

import style from './Add.styl'

class Add extends Component {

  constructor (props) {
    super(props)
    this.handleDesChange = this.handleDesChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.state = {
      title: '',
      des: ''
    }
  }

  handleSave () {
    const { title, des } = this.state
    const { save } = this.props.actions
    save({ title, des })
  }

  handleTitleChange (ev) {
    const title = ev.target.value
    this.setState({ title })
  }

  handleDesChange (ev) {
    const des = ev.target.value
    this.setState({ des })
  }

  render () {
    const { title, des } = this.state
    return <div className={style.root}>
      <h2>Share your recipe with other poor students</h2>
      <div className={style.infoWrapper}>
        <div className={style.metaWrapper}>
          <div className={style.name}>
            <span>Name of your dish</span>
            <input type='text'
              value={title}
              onChange={this.handleTitleChange} />
          </div>
          <div className={style.difficulty}>
            Difficulty
          </div>
          <input type='button'
            className={style.save}
            value='Save'
            onClick={this.handleSave} />
        </div>
        <div className={style.desWrapper}>
          <textarea
            value={des}
            onChange={this.handleDesChange} />
        </div>
      </div>
    </div>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(state => state, mapDispatchToProps)(Add)

