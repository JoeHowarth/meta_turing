import React, { Component } from 'react';
import './App.css';
import all_sents from './data/sents.json';
import Sentence from './components/sentence.js';

var sents = getRandom(all_sents, 8);
class App extends Component {
  constructor(props) {
    super(props);
    const machine_corr = sents.reduce((total, s) => s.machine_corr? total + 1: total, 0)
    let h_scores = sents.map((s, ind, sents) => {
      s.human? false : true
    })
    this.state = {
      mach_acc: machine_corr,
      mach_scores: [],
      sents: sents,
      human_scores: [],
      correct: 0,
      human: 0,
      machine: 0,
      display: false,
    }
    this.checkCorrect = this.checkCorrect.bind(this);
    this.onDone       = this.onDone.bind(this);
    this.Reset        = this.Reset.bind(this);
    // window.addEventListener('keydown', this.handleKey);
    console.log(sents);
  }

  checkCorrect(sent, id, child) {
    // if sentence human and clicked, add to correct
    let {clicked} = child.state.clicked
    const human = sent.human
    const {correct, human_scores} = this.state
    if (!clicked && human === 1) {
      // let x = human_scores.copy()
      // x[id] = true
      this.setState({
        correct: this.state.correct + 1,
        // human_scores: this.state.human_scores
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
  Reset() {
    this.setState({
      display: 'answers',
    })
    console.log("hi");
  }

  render() {
    const state = this.state

    let components = sents.map((s, ind, sents) => {
        return (
          <Sentence
            sent={s}
            key={ind}
            checkCorrect={this.checkCorrect}
            display={state.display}/>
      )})

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Meta-Turing Test!</h1>
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
        {/* <div>Your correct choices: {correct + " / " + length}</div> */}
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

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}


// for sents 1 = human
export default App;
