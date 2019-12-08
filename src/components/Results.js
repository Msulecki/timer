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
        this.handleResults()
    }
    handleResults = () => {
        if ((this.props.results.length !== this.state.resultsLength) && this.props.results.length > 0) {
            this.setState({
                resultsLength: this.props.results.length,
                nulled: false
            })
            const time = []
            for (let i = 0; i < this.props.results.length; i++) {
                time.push(this.props.results[i][1])
            }

            let median = [...time].sort((a, b) => (a - b))
            if (median.length % 2 === 1) {
                if (median.length > 1) {
                    median = median[Math.floor(median.length / 2)]
                }
            } else {
                median = (median[(median.length / 2) - 1] + median[(median.length / 2)]) / 2
            }
            let best = [...time]
            best = best.sort((a, b) => (a - b))[0]
            const avg = Math.floor([...time].reduce((p, c) => (p + c), 0) / time.length)
            const sDev = Math.sqrt([...time].reduce((acc, val) => acc.concat((val - avg) ** 2), []).reduce((acc, val) => acc + val, 0) / time.length)
            if (avg !== this.state.avg) {
                this.setState({
                    best,
                    avg
                })
                this.props.scores([best, avg, 0, 0, 0, 0, median, sDev])
            }
            if (time.length >= 5) {
                let last5 = []
                for (let i = 0; i < 5; i++) {
                    last5.push(time[i])
                }
                last5 = last5.sort((a, b) => (a - b))
                let mo3 = [...last5]
                mo3.pop()
                mo3.shift()
                const ao5 = Math.floor(last5.reduce((p, c) => (p + c), 0) / last5.length)
                mo3 = Math.floor(mo3.reduce((p, c) => (p + c), 0) / mo3.length)
                if (ao5 !== this.state.ao5) {
                    this.setState({
                        ao5
                    })
                    this.props.scores([best, avg, ao5, 0, mo3, 0, median, sDev])
                }
                if (time.length >= 12) {
                    let last12 = []
                    for (let i = 0; i < 12; i++) {
                        last12.push(time[i])
                    }
                    last12 = last12.sort((a, b) => (a - b))
                    let mo10 = [...last12]
                    mo10.pop()
                    mo10.shift()
                    const ao12 = Math.floor(last12.reduce((p, c) => (p + c), 0) / last12.length)
                    mo10 = Math.floor(mo10.reduce((p, c) => (p + c), 0) / mo10.length)
                    if (ao12 !== this.state.ao12) {
                        this.setState({
                            ao12
                        })
                        this.props.scores([best, avg, ao5, ao12, mo3, mo10, median, sDev])
                    }
                } else {
                    this.setState({
                        ao12: 0
                    })
                    this.props.scores([best, avg, ao5, 0, mo3, 0, median, sDev])
                }
            } else {
                this.setState({
                    ao5: 0
                })
                this.props.scores([best, avg, 0, 0, 0, 0, median, sDev])
            }

        }
        if (this.props.results.length === 0 && !this.state.nulled) {
            this.setState({
                best: 0,
                avg: 0,
                ao5: 0,
                ao12: 0,
                nulled: true
            })
            this.props.scores([0, 0, 0, 0, 0, 0, 0, 0])
        }
    }
    handleTimes = () => {
        const time = {
            best: `${Math.floor(this.state.best / 6000) > 9 ?
                Math.floor(this.state.best / 6000)
                : `0` + Math.floor(this.state.best / 6000)}:${Math.floor((this.state.best / 100) % 60) > 9 ?
                    ((this.state.best / 100) % 60).toFixed(2)
                    : `0` + ((this.state.best / 100) % 60).toFixed(2)}`,
            avg: `${Math.floor(this.state.avg / 6000) > 9 ?
                Math.floor(this.state.avg / 6000)
                : `0` + Math.floor(this.state.avg / 6000)}:${Math.floor((this.state.avg / 100) % 60) > 9 ?
                    ((this.state.avg / 100) % 60).toFixed(2)
                    : `0` + ((this.state.avg / 100) % 60).toFixed(2)}`,
            ao5: `${Math.floor(this.state.ao5 / 6000) > 9 ?
                Math.floor(this.state.ao5 / 6000).toFixed(2)
                : `0` + Math.floor(this.state.ao5 / 6000)}:${Math.floor((this.state.ao5 / 100) % 60) > 9 ?
                    ((this.state.ao5 / 100) % 60).toFixed(2)
                    : `0` + ((this.state.ao5 / 100) % 60).toFixed(2)}`,
            ao12: `${Math.floor(this.state.ao12 / 6000) > 9 ?
                Math.floor(this.state.ao12 / 6000).toFixed(2)
                : `0` + Math.floor(this.state.ao12 / 6000)}:${Math.floor((this.state.ao12 / 100) % 60) > 9 ?
                    ((this.state.ao12 / 100) % 60).toFixed(2)
                    : `0` + ((this.state.ao12 / 100) % 60).toFixed(2)}`
        }
        return time
    }
    render() {
        return (<div className='results'>
            {/* Math.floor(this.result_time / 6000), (this.result_time / 100) % 60) */}
            <div>Best: <span className='results__best'>{this.handleTimes().best}</span></div>
            <div>{`Avg: ${this.handleTimes().avg}`}</div>
            <div>{`Ao5: ${this.handleTimes().ao5}`}</div>
            <div>{`Ao12: ${this.handleTimes().ao12}`}</div>
        </div>);
    }
}

export default Results;