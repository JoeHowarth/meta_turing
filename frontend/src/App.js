import React, { Component } from 'react';
import './App.css';
import sents from './data/sents.json';
import Sentence from './components/sentence.js';

class App extends Component {
  constructor(props) {
    super(props);
    const machine_corr = sents.reduce((total, s) => s.machine_corr? total + 1: total, 0)
    this.state = {
      mach_acc: machine_corr,
      sents: sents,
      correct: 0,
      human: 0,
      machine: 0,
      display: false,
    }
    this.checkCorrect = this.checkCorrect.bind(this);
    this.onDone = this.onDone.bind(this);
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

  onDone() {
    this.setState({
      display: 'answers',
    })
    console.log("hi");
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
    const state = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meta Turing Test!</h1>
        </header>
        <div className="main_container">
          <div className="left_container">
            {components}
          </div>
          <InfoContainer
            correct={state.correct}
            length={sents.length}
            display={state.display}
            mach_acc={state.mach_acc}
            onDone={this.onDone}
          />
        </div>
      </div>
    );
  }
}



const InfoContainer = (props) => {
  let {correct, length, display, mach_acc} = props;
  if (display === 'answers') {
    return (
      <div className="info_container">
        <div>Your correct choices: {correct + " / " + length}</div>
        <div>Computer's correct choices: {mach_acc + " / " + length}</div>
      </div>
    );
  }
  else  {
    return (
      <div className="info_container">
        <button onClick={props.onDone}> Done </button>
        <div>5 of the sentences are machine generated and 5 are human</div>
        <div>Click on the sentences you think are human</div>
        <div>Another neural network is given the same choice</div>
        <h3>Are you better than the machine??</h3>
      </div>
    );

  }

}

export default App;
