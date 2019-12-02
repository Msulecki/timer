import React, { Component } from 'react';
import '../style/Results.scss'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsLength: 0,
            best: 0,
            avg: 0,
            ao5: 0,
            ao12: 0,
            nulled: false
        }
    }
    componentDidMount() {
        this.setState({
            resultsLength: this.props.results.length
        })
    }

    componentDidUpdate() {

        if ((this.props.results.length !== this.state.resultsLength) && this.props.results.length > 0) {
            this.setState({
                resultsLength: this.props.results.length,
                nulled: false
            })
            const time = []
            for (let i = 0; i < this.props.results.length; i++) {
                time.push(this.props.results[i][1])
            }
            let best = [...time]
            best = best.sort((a, b) => (a - b))[0].toFixed(2)
            const avg = Math.floor(time.reduce((p, c) => (p + c), 0) / time.length).toFixed(2)
            if (avg !== this.state.avg) {
                this.setState({
                    best,
                    avg
                })
            }
            if (time.length >= 5) {
                let last5 = []
                for (let i = 0; i < 5; i++) {
                    last5.push(time[i])
                }
                last5 = last5.sort((a, b) => (a - b))
                last5.pop()
                last5.shift()
                const ao5 = Math.floor(last5.reduce((p, c) => (p + c), 0) / last5.length).toFixed(2)
                if (ao5 !== this.state.ao5) {
                    this.setState({
                        ao5
                    })
                }
                if (time.length >= 12) {
                    let last12 = []
                    for (let i = 0; i < 12; i++) {
                        last12.push(time[i])
                    }
                    last12 = last12.sort((a, b) => (a - b))
                    last12.pop()
                    last12.shift()
                    const ao12 = Math.floor(last12.reduce((p, c) => (p + c), 0) / last12.length).toFixed(2)
                    if (ao12 !== this.state.ao12) {
                        this.setState({
                            ao12
                        })
                    }
                } else {
                    this.setState({
                        ao12: 0
                    })
                }
            } else {
                this.setState({
                    ao5: 0
                })
            }

        } else if (this.props.results.length === 0 && !this.state.nulled) {
            this.setState({
                best: 0,
                avg: 0,
                ao5: 0,
                ao12: 0,
                nulled: true
            })
        }
        this.handleTimes()
    }

    handleTimes = () => {
        let time = {
            best: `${Math.floor(this.state.best / 6000) > 9 ?
                Math.floor(this.state.best / 6000)
                : `0` + Math.floor(this.state.best / 6000)}:${Math.floor((this.state.best / 100) % 60) > 9 ?
                    (this.state.best / 100) % 60
                    : `0` + ((this.state.best / 100) % 60).toFixed(2)}`,
            avg: `${Math.floor(this.state.avg / 6000) > 9 ?
                Math.floor(this.state.avg / 6000)
                : `0` + Math.floor(this.state.avg / 6000)}:${Math.floor((this.state.avg / 100) % 60) > 9 ?
                    (this.state.avg / 100) % 60
                    : `0` + ((this.state.avg / 100) % 60).toFixed(2)}`,
            ao5: `${Math.floor(this.state.ao5 / 6000) > 9 ?
                Math.floor(this.state.ao5 / 6000)
                : `0` + Math.floor(this.state.ao5 / 6000)}:${Math.floor((this.state.ao5 / 100) % 60) > 9 ?
                    (this.state.ao5 / 100) % 60
                    : `0` + ((this.state.ao5 / 100) % 60).toFixed(2)}`,
            ao12: `${Math.floor(this.state.ao12 / 6000) > 9 ?
                Math.floor(this.state.ao12 / 6000)
                : `0` + Math.floor(this.state.ao12 / 6000)}:${Math.floor((this.state.ao12 / 100) % 60) > 9 ?
                    (this.state.ao12 / 100) % 60
                    : `0` + ((this.state.ao12 / 100) % 60).toFixed(2)}`,
        }
        return time
    }
    render() {
        return (<div className='results'>
            {/* Math.floor(this.result_time / 6000), (this.result_time / 100) % 60) */}
            <div>{`Best: ${this.handleTimes().best}`}</div>
            <div>{`Avg: ${this.handleTimes().avg}`}</div>
            <div>{`Ao5: ${this.handleTimes().ao5}`}</div>
            <div>{`Ao12: ${this.handleTimes().ao12}`}</div>
        </div>);
    }
}

export default Results;