import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sents from './data/sents.json';
import Sentence from './components/sentence.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sents: sents,
      human: 0,
      machine: 0
    }


    // this.handleKey = this.handleKey.bind(this);
    // this.reset = this.reset.bind(this);
    // window.addEventListener('keydown', this.handleKey);
  }

  checkCorrect(label, id) {
    // if sentence human and clicked, add to correct
    if (label == 1) {
      this.state.correct += 1
    }
  }

  render() {
    let components = sents.map((s, ind, sents) => {
        return <Sentence sent={s} key={ind} onClick=></Sentence>
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Meta Turing Test!</h1>
        </header>
        {components}
        <Sentence sent={sents[0]}></Sentence>
      </div>
    );
  }
}

export default App;
