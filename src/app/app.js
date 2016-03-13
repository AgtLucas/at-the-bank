import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './app.css'

export default class App extends Component {
  render () {
    return (
      <div className={styles.container}>Foo</div>
    )
  }
}

render(<App />, document.getElementById('root__app'))
