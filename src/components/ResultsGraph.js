import React, { Component } from 'react';
import Chart from 'chart.js';

import '../style/ResultsGraph.scss'

class ResultsGraph extends Component {

    state = {

    }
    componentDidUpdate() {
        //  console.log(this.props.results);
        let data = []
        let labels = []
        this.props.results.forEach((el, i) => {
            data.push(el[1])
            labels.push(el[3])
        })
        data = data.reverse()
        labels = labels.reverse()
        console.log(data);
        var ctx = document.getElementById('graph').getContext('2d');
        var chart = new Chart(ctx, {
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
        });
    }

    render() {
        return (
            <>
                <canvas id="graph"></canvas>
            </>

        );
    }
}

export default ResultsGraph;