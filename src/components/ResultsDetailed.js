import React, { Component } from 'react';
import '../style/ResultsDetailed.scss'

class ResultsDetailed extends Component {
    state = {}

    componentDidUpdate() {
        this.times = this.props.results.map((el, i) => (
            <li key={i}>{el[3]}</li>
        ))
        this.last5 = this.times.slice(0, 5)
        this.last12 = this.times.slice(0, 12)
    }

    handleTimes = () => {
        const [best, avg, ao5, ao12, mo3, mo10, median, sdev] = [this.props.scores[0], this.props.scores[1], this.props.scores[2], this.props.scores[3], this.props.scores[4], this.props.scores[5], this.props.scores[6], this.props.scores[7]]

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
            mo3: `${Math.floor(mo3 / 6000) > 9 ?
                Math.floor(mo3 / 6000).toFixed(2)
                : `0` + Math.floor(mo3 / 6000)}:${Math.floor((mo3 / 100) % 60) > 9 ?
                    ((mo3 / 100) % 60).toFixed(2)
                    : `0` + ((mo3 / 100) % 60).toFixed(2)}`,
            mo10: `${Math.floor(mo10 / 6000) > 9 ?
                Math.floor(mo10 / 6000).toFixed(2)
                : `0` + Math.floor(mo10 / 6000)}:${Math.floor((mo10 / 100) % 60) > 9 ?
                    ((mo10 / 100) % 60).toFixed(2)
                    : `0` + ((mo10 / 100) % 60).toFixed(2)}`,
            median: `${Math.floor(median / 6000) > 9 ?
                Math.floor(median / 6000).toFixed(2)
                : `0` + Math.floor(median / 6000)}:${Math.floor((median / 100) % 60) > 9 ?
                    ((median / 100) % 60).toFixed(2)
                    : `0` + ((median / 100) % 60).toFixed(2)}`,
            sdev: `${Math.floor(sdev / 6000) > 9 ?
                Math.floor(sdev / 6000).toFixed(2)
                : `0` + Math.floor(sdev / 6000)}:${Math.floor((sdev / 100) % 60) > 9 ?
                    ((sdev / 100) % 60).toFixed(2)
                    : `0` + ((sdev / 100) % 60).toFixed(2)}`
        }
        return time
    }

    render() {
        return (
            <>
                <div className="results__header">Detailed results</div>
                <div className="results__list">
                    <div>
                        <div>Best: {this.handleTimes().best}</div>
                        <div>Ao5: {this.handleTimes().ao5}</div>
                        <div>Mo3: {this.handleTimes().mo3}</div>
                        <div>Median: {this.handleTimes().median}</div>
                        <div>Std dev: {this.handleTimes().sdev}</div>
                        <ol>Last 5: {this.times && this.times.length > 4 && this.last5}</ol>
                    </div>
                    <div>
                        <div>Avg: {this.handleTimes().avg}</div>
                        <div>Ao12: {this.handleTimes().ao12}</div>
                        <div>Mo10: {this.handleTimes().mo10}</div>
                        <ol>Last 12: {this.times && this.times.length > 11 && this.last12}</ol>
                    </div>
                </div>
            </>
        );
    }
}

export default ResultsDetailed;