import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './app.styl'

export default class App extends Component {
  render () {
    return (
      <div className={styles.container}>
        <p className={styles.paragraph}>Foo</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('root__app'))
