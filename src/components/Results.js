import React, { Component } from 'react';
import '../style/Results.scss'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidUpdate() {

    }
    render() {
        return (<div className='results'>
            {/* <ol>
                {this.props.results.map((el, i) => {
                    if (i > this.props.results.length - 5) {
                        return (<li className='results__item' key={i}>
                            <div className='results__time'>{el[0]}</div><div className='results__scramble'>{el[1]}</div>
                        </li>
                        )
                    }
                })}
            </ol> */}
        </div>);
    }
}

export default Results;