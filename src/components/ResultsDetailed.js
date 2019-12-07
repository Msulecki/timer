import React, { Component } from 'react';
import '../style/ResultsDetailed.scss'

class ResultsDetailed extends Component {
    state = {

    }
    componentDidMount() {

    }
    componentDidUpdate() {
        this.times = this.props.results.map((el, i) => (
            <li key={i}>{el[3]}</li>
        ))
    }

    handleTimes = () => {
        const [best, avg, ao5, ao12] = [this.props.scores[0], this.props.scores[1], this.props.scores[2], this.props.scores[3]]
        const time = {
            best: `${Math.floor(best / 6000) > 9 ?
                Math.floor(best / 6000)
                : `0` + Math.floor(best / 6000)}:${Math.floor((best / 100) % 60) > 9 ?
                    ((best / 100) % 60).toFixed(2)
                    : `0` + ((best / 100) % 60).toFixed(2)}`,
            avg: `${Math.floor(avg / 6000) > 9 ?
                Math.floor(avg / 6000)
                : `0` + Math.floor(avg / 6000)}:${Math.floor((avg / 100) % 60) > 9 ?
                    ((avg / 100) % 60).toFixed(2)
                    : `0` + ((avg / 100) % 60).toFixed(2)}`,
            ao5: `${Math.floor(ao5 / 6000) > 9 ?
                Math.floor(ao5 / 6000).toFixed(2)
                : `0` + Math.floor(ao5 / 6000)}:${Math.floor((ao5 / 100) % 60) > 9 ?
                    ((ao5 / 100) % 60).toFixed(2)
                    : `0` + ((ao5 / 100) % 60).toFixed(2)}`,
            ao12: `${Math.floor(ao12 / 6000) > 9 ?
                Math.floor(ao12 / 6000).toFixed(2)
                : `0` + Math.floor(ao12 / 6000)}:${Math.floor((ao12 / 100) % 60) > 9 ?
                    ((ao12 / 100) % 60).toFixed(2)
                    : `0` + ((ao12 / 100) % 60).toFixed(2)}`,
        }
        return time
    }


    render() {
        return (
            <>
                <div className="results__header">Detailed results</div>
                <div className="results__list">
                    <div>
                        <ol>Best: {this.handleTimes().best}</ol>
                        <ol>Ao5: {this.handleTimes().ao5}</ol>
                        <ol>Last 5: {this.times && this.times.slice(0, 5)}</ol>
                    </div>
                    <div>
                        <ol>Avg: {this.handleTimes().avg}</ol>
                        <ol>Ao12: {this.handleTimes().ao12}</ol>
                        <ol>Last 12: {this.times && this.times.slice(0, 12)}</ol>
                    </div>
                </div>
            </>
        );
    }
}

export default ResultsDetailed;