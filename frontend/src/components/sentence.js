import React, { Component } from 'react';
import '../App.css';

class Sentence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }


  render() {
    const {sent, id, display} = this.props
    let { clicked} = this.state
    let classes = "Sentence"
    let human_correct = null;
    let label

    if (sent.machine_corr) {
      label = 'Machine: correct'
    } else {
      label = 'Machine: wrong'
    }

    if (display === 'answers') {
      if ((clicked && sent.human) || (!clicked && !sent.human)) {
        human_correct = true
        classes += " h_corr"
      } else {
        human_correct = false
        classes += " h_wrong"
      }
      if (sent.machine_corr ) {
        label += '  ' +( sent.human? 'Hu':'Ma')
      } else {
        label += '  ' +( sent.human? 'Ma':'Hu')
      }
    }
    if (clicked) {
      classes += " clicked"
    }


    return (
      <div
        className={classes}
        onClick={() => this.props.checkCorrect(sent, id, this)}
      >
        <p className="sentText" >{sent.text}</p>
        <p className="sentClass" >{label}</p>
      </div>
    )
  }

}

export default Sentence;
