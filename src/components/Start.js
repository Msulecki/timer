import React, { Component } from 'react';
import '../style/Start.scss'


class Start extends Component {
    state = {
        startFired: false
    }

    handleStart = (intervalStarted) => {
        let i = 0
        if (intervalStarted) {
            this.timer = setInterval(() => {
                i++
                document.querySelector('.start__button').style.backgroundImage =
                    `linear-gradient(90deg, white 0%, white ${(i / 60) * 100}%, transparent ${(i / 60) * 100}%, transparent 100%)`
                if (i >= 60) {
                    clearInterval(this.timer)
                    this.timerReady = true
                    document.querySelector('.start__button').style.background =
                        `rgb(103, 255, 92)`
                }
            }, 6);

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