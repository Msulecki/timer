import React, { Component } from 'react';
import Chart from 'chart.js';

import '../style/ResultsGraph.scss'

class ResultsGraph extends Component {
    state = {}

    handleGraph = () => {
        let data = []
        let labels = []
        this.props.results.forEach(el => {
            data.push(el[1])
            labels.push(el[3])
        })

        data = data.reverse() // reverse for proper direction on graph
        labels = labels.reverse() // reverse for proper direction on graph

        const ctx = document.getElementById('graph').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        display: false
                    }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                maintainAspectRatio: false
            }
        })
    }

    componentDidUpdate() {
        this.handleGraph()
    }

    render() {
        return (
            <canvas id="graph"></canvas>
        )
    }
}

export default ResultsGraph;