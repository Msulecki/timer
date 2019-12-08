import React, { Component } from 'react';
import '../style/Time.scss'

class Time extends Component {
    state = {
        lastScramble: [],
        resultsUpdated: false,
        results: []
    }

    handleTimer = () => {
        let mil = 0
        let sec = 0
        let min = 0

        this.timer = setInterval(() => {
            mil++
            this.result_time = mil

            if (mil % 100 === 0) sec++
            if (sec >= 60) {
                sec = 0
                min++
            }

            document.querySelector('.time__clock').textContent = `${min <= 9 ? `0${min}` : min}:${sec <= 9 ? `0${sec}` : sec}.${(mil % 100) <= 9 ? `0${(mil % 100)}` : (mil % 100)}`
        }, 10)
    }

    componentDidMount() {
        this.setState({
            lastScramble: this.props.scramble
        })
    }

    componentDidUpdate() {
        if (this.props.timerActive) {
            this.handleTimer()
        } else {
            clearInterval(this.timer)
            // console.log(this.state.lastScramble, this.props.scramble);
            if ((this.state.lastScramble !== this.props.scramble)) {

                if ((this.state.lastScramble.length > 0) && document.querySelector('.time__clock').textContent !== '00:00.00' && this.state.resultDate !== this.props.resultDate) {
                    this.setState({
                        results: [[this.props.resultDate, this.result_time, this.state.lastScramble, document.querySelector('.time__clock').textContent], ...this.state.results],
                        resultsUpdated: true,
                        resultDate: this.props.resultDate
                    })
                }

                this.setState({
                    lastScramble: this.props.scramble
                })
            }
        }

        if (this.state.resultsUpdated) {
            this.props.resultsArr(this.state.results)
            this.setState({
                resultsUpdated: false
            })
        }
    }

    render() {
        return (
            <div className="time">
                <div className="time__scramble">{!this.props.timerActive && (this.state.results.length > 0) && this.state.results[this.state.results.length - 1][2].join(' ')}</div> {/* If timer isn't active, show last element */}
                <div className="time__clock">00:00.00</div>
            </div>
        );
    }
}

export default Time;