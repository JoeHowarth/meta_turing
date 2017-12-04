import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sents from './data/sents.json';
import Sentence from './components/sentence.js';

class App extends Component {
  constructor(props) {
    super(props);
    machine_corr = sents.reduce((total, s) => total + s.machine_corr, 0)
    this.state = {
      mach_acc: machine_corr,
      sents: sents,
      correct: 0,
      human: 0,
      machine: 0
    }
    this.checkCorrect = this.checkCorrect.bind(this);
    // this.handleKey = this.handleKey.bind(this);
    // this.reset = this.reset.bind(this);
    // window.addEventListener('keydown', this.handleKey);
  }

  checkCorrect(sent, id, child) {
    // if sentence human and clicked, add to correct
    let clicked = child.state.clicked
    const label = sent.label
    if (!clicked && label === "1") {
      this.setState({
        correct: this.state.correct + 1
      })
      console.log(sent);
    }
    child.setState({
      clicked: true
    })

  }

  render() {
    let components = sents.map((s, ind, sents) => {
        return (
          <Sentence
            sent={s}
            key={ind}
            checkCorrect={this.checkCorrect}>
          </Sentence>
        )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Meta Turing Test!</h1>
        </header>
        <div className="main_container">
          <div className="left_container">
            {components}
          </div>
          <div className="info_container">
            <div>Your correct choices: {this.state.correct}</div>
            <div>Computer's correct choices: {this.state.mach_acc}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
