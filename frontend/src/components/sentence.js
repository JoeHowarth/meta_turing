import React, { Component } from 'react';
import '../App.css';

class Sentence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      human_correct: null,
      clicked: false
    }
  }

  render() {
    const {sent, id, display} = this.props

    if (this.state.clicked === (sent.human === 1) && this.state.human
  !=null) {
      this.setState({
        human_correct: true,
      })
    }
    return (
      <div
        className={"Sentence "+sent.class}
        onClick={() => this.props.checkCorrect(sent, id, this)}
      >
        <p className="sentText" >{sent.text}</p>
        <p className="sentClass" >{sent.class}</p>
      </div>
    )
  }

}

export default Sentence;
