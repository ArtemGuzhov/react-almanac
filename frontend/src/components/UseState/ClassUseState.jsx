import React from 'react'

class ClassUseState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      value: 'React almanac',
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div className="useState">
        <br />
        <div>
          <h1 style={{ fontWeight: 'bolder' }}>Классовый счетчик</h1>
          <h2>{this.state.count}</h2>
          <button className="increment" onClick={this.increment}>
            +
          </button>
          <button className="decrement" onClick={this.decrement}>
            -
          </button>
        </div>
      </div>
    )
  }
}

export default ClassUseState
