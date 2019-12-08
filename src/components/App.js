import React, { Component } from 'react';
import Time from './Time'
import Scramble from './Scramble'
import Start from './Start'
import Slider from './Slider'
import handleCube from './HandleCube'
import '../style/App.scss';

class App extends Component {
  state = {
    started: false,
    lastScramble: '',
    results: [],
    resultDate: '',
    cube: {
      f: [],
      b: [],
      l: [],
      r: [],
      u: [],
      d: []
    },
    activeSlidePosition: 0
  }

  handleTimer = (resultDate) => {
    if (this.state.started) { // write date of finished solve as a timestamp
      this.setState({
        resultDate
      })
    }
    this.setState({
      started: !this.state.started
    })
  }

  handleScramble = (lastScramble) => { // for passing scramble to time + results array
    this.setState({
      lastScramble
    })
  }

  handleResults = (results) => { // for passing last result to results array
    this.setState({
      results: results
    })
    localStorage.setItem('resultsArray', JSON.stringify(results))
  }

  handleResultDelete = (item) => {
    let results = this.state.results
    results.splice(item, 1)
    this.handleLocalStorage('w', results)
    this.setState({
      results
    })
  }

  handleKey = (isPressed) => {

    if (isPressed && !this.keydown) {
      this.keydown = true
      if (this.state.started) {
        document.querySelector('.app').click() // emulate click event on key
      }
      let i = 0
      if (document.querySelector('.start__button')) {
        this.timer = setInterval(() => {
          i++
          document.querySelector('.start__button').style.backgroundImage =
            `linear-gradient(90deg, white 0%, white ${(i / 60) * 100}%, transparent ${(i / 60) * 100}%, transparent 100%)`
          if (i >= 60) {
            clearInterval(this.timer)
            this.timerReady = true
            document.querySelector('.start__button').style.background =
              `rgb(103, 255, 92)`
          }
        }, 6);
      }
    }
    if (!isPressed) {
      this.keydown = false
      if (this.timerReady) {
        this.timerReady = false
        this.handleTimer()
      }
      clearInterval(this.timer)
      if (document.querySelector('.start__button')) {
        document.querySelector('.start__button').style.backgroundImage =
          `linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)`
      }
    }
  }

  setCube = (scramble) => {
    this.setState({
      cube: handleCube(scramble)
    })
  }

  handleActiveSlide = (activeSlidePosition) => {
    this.setState({
      activeSlidePosition
    })
  }
  handleLocalStorage = (type, array) => {
    if (type === 'r') { // r for read from localStorage
      if (localStorage.getItem('resultsArray') !== null) {
        const results = JSON.parse(localStorage.getItem('resultsArray'))
        if (results !== this.state.results) {
          this.setState({
            results
          })
        }
      }
    }
    if (type === 'w') { // w for write to localStorage
      localStorage.setItem('resultsArray', JSON.stringify(array))
    }
  }

  componentDidMount() {
    window.onkeydown = this.handleKey.bind(this, true)
    window.onkeyup = this.handleKey.bind(this, false)
    this.handleLocalStorage('r')
  }


  render() {
    return (
      <div className="app"
        onClick={this.state.started ? this.handleTimer.bind(this, new Date().getTime()) : undefined}
        onTouchStart={this.state.started ? this.handleTimer.bind(this, new Date().getTime()) : undefined}
      >
        <Time
          started={this.handleTimer}
          timerActive={this.state.started}
          scramble={this.state.lastScramble}
          results={this.state.results}
          resultsArr={this.handleResults}
          resultDate={this.state.resultDate}
        />

        {!this.state.started && <Scramble showScramble={this.setCube} passScramble={this.handleScramble} />}

        {!this.state.started &&
          <Slider
            cubeGrid={this.state.cube}
            results={this.state.results}
            activeSlidePosition={this.handleActiveSlide}
            slide={this.state.activeSlidePosition}
            deleteResult={this.handleResultDelete}
            resultsUpdated={this.state.resultsUpdated} />}
        {!this.state.started && <Start started={this.handleTimer} />}

      </div >
    )
  }
}

export default App;
