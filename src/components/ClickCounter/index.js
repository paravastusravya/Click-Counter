// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button Has Been Clicked{' '}
          <span className="count-text">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onClick}>
          click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
