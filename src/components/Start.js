import React, { Component } from 'react';
import '../style/Start.scss'


class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startFired: false
        }
    }

    handleStart = (intervalStarted) => {
        console.log(this);
        let i = 0
        if (intervalStarted) {
            this.timer = setInterval(() => {
                i++
                document.querySelector('.start__button').style.backgroundImage =
                    `linear-gradient(90deg, white 0%, white ${i}%, transparent ${i}%, transparent 100%)`
                if (i >= 100) {
                    clearInterval(this.timer)
                    this.timerReady = true
                }
            }, 10);

        } else if (!intervalStarted) {
            clearInterval(this.timer)
            if (this.timerReady) {
                this.timerReady = false
                this.props.started()
            }
            document.querySelector('.start__button').style.backgroundImage =
                `linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)`
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="start">
                <button
                    onMouseDown={this.handleStart.bind(this, true)}
                    onMouseUp={this.handleStart.bind(this, false)}
                    onTouchStart={this.handleStart.bind(this, true)}
                    onTouchEnd={this.handleStart.bind(this, false)}
                    className='start__button'>
                    START</button>
            </div>
        );
    }
}
export default Start;