import React, { Component } from 'react';
import '../App.css';

class Sentence extends Component {


  render() {
    const sent = this.props.sent


    return (
      <div className={"Sentence "+sent.class}>
        <p className="sentText" >{sent.text}</p>
        <p className="sentClass" >{sent.class}</p>
      </div>
    )
  }

}

export default Sentence;
