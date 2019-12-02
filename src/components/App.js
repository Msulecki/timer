import React, { Component } from 'react';
import Time from './Time'
import Scramble from './Scramble'
import Start from './Start'
import Swipeme from './Swipeme'


import '../style/App.scss';

class App extends Component {
  state = {
    started: false,
    lastScramble: '',
    finished: false,
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
    rotation: true,
    touchPosition: 0,
    touchPositionSet: false,
    swipeTime: [0, 0],
    swipeSpeed: 0,
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
      //.reverse() // reverse for results newest to oldest
    })
  }

  handleResultDelete = (item) => {
    let results = this.state.results
    results.splice(item, 1)
    this.setState({
      results
    })
  }

  handleKey = (isPressed) => {

    if (isPressed && !this.keydown) {
      this.keydown = true
      if (this.state.started) {
        document.querySelector('.app').click()
      }
      let i = 0
      if (document.querySelector('.start__button')) {
        this.timer = setInterval(() => {
          i++
          document.querySelector('.start__button').style.backgroundImage =
            `linear-gradient(90deg, white 0%, white ${i}%, transparent ${i}%, transparent 100%)`
          if (i >= 100) {
            clearInterval(this.timer)
            this.timerReady = true
            document.querySelector('.start__button').style.background =
              `rgb(103, 255, 92)`
          }
        }, 10);
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

  handleCube = (scramble) => {
    let color = {
      f: 'rgba(99, 255, 71, 1)',
      b: 'rgba(56, 169, 255, 1)',
      l: 'rgba(255, 71, 117, 1)',
      r: 'rgba(255, 150, 97, 1)',
      u: 'rgba(255, 249, 71, 1)',
      d: 'rgba(255, 255, 255, 1)'
    }
    let [f, b, l, r, u, d] = [color.f, color.b, color.l, color.r, color.u, color.d]
    let cubeScrambled = {
      f: [f, f, f, f, f, f, f, f, f],
      b: [b, b, b, b, b, b, b, b, b],
      l: [l, l, l, l, l, l, l, l, l],
      r: [r, r, r, r, r, r, r, r, r],
      u: [u, u, u, u, u, u, u, u, u],
      d: [d, d, d, d, d, d, d, d, d]
    }
    let cube = {
      f: [f, f, f, f, f, f, f, f, f],
      b: [b, b, b, b, b, b, b, b, b],
      l: [l, l, l, l, l, l, l, l, l],
      r: [r, r, r, r, r, r, r, r, r],
      u: [u, u, u, u, u, u, u, u, u],
      d: [d, d, d, d, d, d, d, d, d]
    }
    for (let i = 0; i < scramble.length; i++) {
      const rotation = scramble[i]

      if (rotation === `L`) {
        for (let i = 0; i < 7; i += 3) {
          cubeScrambled.f[i] = cube.u[i]
          cubeScrambled.d[i] = cube.f[i]
          cubeScrambled.b[i] = cube.d[i]
          cubeScrambled.u[i] = cube.b[i]
        }
      }
      if (rotation === `L'`) {
        for (let i = 0; i < 7; i += 3) {
          cubeScrambled.u[i] = cube.f[i]
          cubeScrambled.f[i] = cube.d[i]
          cubeScrambled.d[i] = cube.b[i]
          cubeScrambled.b[i] = cube.u[i]
        }
      }
      if (rotation === `L2`) {
        for (let i = 0; i < 7; i += 3) {
          cubeScrambled.u[i] = cube.d[i]
          cubeScrambled.f[i] = cube.b[i]
          cubeScrambled.d[i] = cube.u[i]
          cubeScrambled.b[i] = cube.f[i]
        }
      }
      if (rotation === `R`) {
        for (let i = 2; i < 9; i += 3) {
          cubeScrambled.u[i] = cube.f[i]
          cubeScrambled.f[i] = cube.d[i]
          cubeScrambled.d[i] = cube.b[i]
          cubeScrambled.b[i] = cube.u[i]
        }
      }
      if (rotation === `R'`) {
        for (let i = 2; i < 9; i += 3) {
          cubeScrambled.f[i] = cube.u[i]
          cubeScrambled.d[i] = cube.f[i]
          cubeScrambled.b[i] = cube.d[i]
          cubeScrambled.u[i] = cube.b[i]
        }
      }
      if (rotation === `R2`) {
        for (let i = 2; i < 9; i += 3) {
          cubeScrambled.u[i] = cube.d[i]
          cubeScrambled.f[i] = cube.b[i]
          cubeScrambled.d[i] = cube.u[i]
          cubeScrambled.b[i] = cube.f[i]
        }
      }
      if (rotation === `U`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.l[i] = cube.f[i]
          cubeScrambled.b[8 - i] = cube.l[i]
          cubeScrambled.r[i] = cube.b[8 - i]
          cubeScrambled.f[i] = cube.r[i]
        }
      }
      if (rotation === `U'`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.r[i] = cube.f[i]
          cubeScrambled.b[8 - i] = cube.r[i]
          cubeScrambled.l[i] = cube.b[8 - i]
          cubeScrambled.f[i] = cube.l[i]
        }
      }
      if (rotation === `U2`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.r[i] = cube.l[i]
          cubeScrambled.b[8 - i] = cube.f[i]
          cubeScrambled.f[i] = cube.b[8 - i]
          cubeScrambled.l[i] = cube.r[i]
        }
      }
      if (rotation === `D`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.l[8 - i] = cube.b[i]
          cubeScrambled.b[i] = cube.r[8 - i]
          cubeScrambled.r[8 - i] = cube.f[8 - i]
          cubeScrambled.f[8 - i] = cube.l[8 - i]
        }
      }
      if (rotation === `D'`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.l[8 - i] = cube.f[8 - i]
          cubeScrambled.b[i] = cube.l[8 - i]
          cubeScrambled.r[8 - i] = cube.b[i]
          cubeScrambled.f[8 - i] = cube.r[8 - i]
        }
      }
      if (rotation === `D2`) {
        for (let i = 0; i < 3; i++) {
          cubeScrambled.r[8 - i] = cube.l[8 - i]
          cubeScrambled.b[i] = cube.f[8 - i]
          cubeScrambled.f[8 - i] = cube.b[i]
          cubeScrambled.l[8 - i] = cube.r[8 - i]
        }
      }
      if (rotation === `F`) {
        for (let i = 0; i < 9; i += 3) {
          cubeScrambled.r[i] = cube.u[6 + (i / 3)]
          cubeScrambled.d[(i / 3)] = cube.r[6 - i]
          cubeScrambled.l[2 + i] = cube.d[(i / 3)]
          cubeScrambled.u[6 + (i / 3)] = cube.l[8 - i]
        }
      }
      if (rotation === `F'`) {
        for (let i = 0; i < 9; i += 3) {
          cubeScrambled.r[i] = cube.d[2 - (i / 3)]
          cubeScrambled.u[6 + (i / 3)] = cube.r[i]
          cubeScrambled.l[2 + i] = cube.u[8 - (i / 3)]
          cubeScrambled.d[(i / 3)] = cube.l[2 + i]
        }
      }
      if (rotation === `F2`) {
        for (let i = 0; i < 7; i += 3) {
          cubeScrambled.r[i] = cube.l[8 - i]
          cubeScrambled.u[8 - (i / 3)] = cube.d[(i / 3)]
          cubeScrambled.l[8 - i] = cube.r[i]
          cubeScrambled.d[(i / 3)] = cube.u[8 - (i / 3)]
        }
      }
      if (rotation === `B`) {
        for (let i = 0; i < 9; i += 3) {
          cubeScrambled.l[i] = cube.u[2 - (i / 3)]
          cubeScrambled.d[6 + (i / 3)] = cube.l[i]
          cubeScrambled.r[2 + i] = cube.d[8 - (i / 3)]
          cubeScrambled.u[(i / 3)] = cube.r[2 + i]
        }
      }
      if (rotation === `B'`) {
        for (let i = 0; i < 9; i += 3) {
          cubeScrambled.l[i] = cube.d[6 + (i / 3)]
          cubeScrambled.u[(i / 3)] = cube.l[6 - i]
          cubeScrambled.r[2 + i] = cube.u[(i / 3)]
          cubeScrambled.d[6 + (i / 3)] = cube.r[8 - i]
        }
      }
      if (rotation === `B2`) {
        for (let i = 0; i < 7; i += 3) {
          cubeScrambled.r[8 - i] = cube.l[i]
          cubeScrambled.u[(i / 3)] = cube.d[8 - (i / 3)]
          cubeScrambled.l[i] = cube.r[8 - i]
          cubeScrambled.d[8 - (i / 3)] = cube.u[(i / 3)]
        }
      }
      if (rotation === `L` || rotation === `R` || rotation === `F` || rotation === `B` || rotation === `U` || rotation === `D`) {
        for (let i = 0; i < 9; i++) {
          if (i !== 4) {// 4 is center cube
            cubeScrambled[rotation.toLowerCase()][i] = cube[rotation.toLowerCase()][8 - ((2 + 3 * i) % 10)]
          }
        }
      }
      if (rotation === `L'` || rotation === `R'` || rotation === `F'` || rotation === `B'` || rotation === `U'` || rotation === `D'`) {
        for (let i = 0; i < 9; i++) {
          if (i !== 4) {// 4 is center cube
            cubeScrambled[rotation[0].toLowerCase()][i] = cube[rotation[0].toLowerCase()][(2 + 3 * i) % 10]
          }
        }
      }
      if (rotation === `L2` || rotation === `R2` || rotation === `F2` || rotation === `B2` || rotation === `U2` || rotation === `D2`) {
        for (let i = 0; i < 9; i++) {
          if (i !== 4) {// 4 is center cube
            cubeScrambled[rotation[0].toLowerCase()][i] = cube[rotation[0].toLowerCase()][8 - i]
          }
        }
      }
      //console.log(rotation, i, cubeScrambled);
      for (let i = 0; i < 9; i++) {
        cube.f[i] = cubeScrambled.f[i]
        cube.b[i] = cubeScrambled.b[i]
        cube.l[i] = cubeScrambled.l[i]
        cube.r[i] = cubeScrambled.r[i]
        cube.u[i] = cubeScrambled.u[i]
        cube.d[i] = cubeScrambled.d[i]
      }
    }
    this.setState({
      cube
    })
  }

  handleActiveSlide = (activeSlidePosition) => {
    this.setState({
      activeSlidePosition
    })
  }
  componentDidMount() {
    window.onkeydown = this.handleKey.bind(this, true)
    window.onkeyup = this.handleKey.bind(this, false)
  }

  componentDidUpdate() {
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
          resultsArr={this.handleResults}
          resultDate={this.state.resultDate}
        />

        {!this.state.started && <Scramble showScramble={this.handleCube} passScramble={this.handleScramble} />}

        {!this.state.started &&
          <Swipeme
            cubeGrid={this.state.cube}
            results={this.state.results}
            activeSlidePosition={this.handleActiveSlide}
            slide={this.state.activeSlidePosition}
            deleteResult={this.handleResultDelete}
            resultsUpdated={this.state.resultsUpdated} />}
        {!this.state.started && <Start started={this.handleTimer} />}

      </div >
    );
  }
}

export default App;
