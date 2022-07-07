import { Component } from 'react'

// in order to tell ClassComponents which props is it going to receive,
// let's shape them down! let's write an INTERFACE for the ClassComponent props!

interface ClassComponentProps {
  title: string
  subTitle?: string // subTitle can be part of the props or not
}
// now the interface is ready, how do we give it to ClassComponent?

interface ClassComponentState {
  counter: number
}

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subTitle || 'Default Subtitle'}</h3>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
        <div>The counter value is {this.state.counter}</div>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1,
            })
          }
        >
          -
        </button>
      </div>
    )
  }
}

export default ClassComponent

// the problem we're getting with the title prop to ClassComponent
// comes from the fact that ClassComponent, by default, is NOT expecting
// to receive any prop!
