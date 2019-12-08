import React, { Component } from 'react';
import '../style/Scramble.scss'

class Scramble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scramble: '',
            scrambleLength: 25
        }
    }

    handleScramble = () => {
        const result = []
        const faceArr = []
        const scramble = {
            face: [['U', 'D'], ['L', 'R'], ['F', 'B']],
            rotation: [``, `'`, `2`]
        }

        for (let i = 0; i < this.state.scrambleLength; i++) {
            let accepted = false
            let randAxis = Math.floor(Math.random() * 3)
            let randFace = Math.floor(Math.random() * 2)

            if (i === 0) {
                faceArr.push(scramble.face[randAxis][randFace]) // first element can be whatever
            } else if (i === 1) {

                while (!accepted) {
                    if (scramble.face[randAxis][randFace] !== faceArr[0]) { // second element can't be first element
                        faceArr.push(scramble.face[randAxis][randFace])
                        accepted = true // for breaking the loop
                    }
                    randAxis = Math.floor(Math.random() * 3)
                    randFace = Math.floor(Math.random() * 2)
                }
                accepted = false // set false for second loop
            }

            while (!accepted && (i > 1)) {
                randAxis = Math.floor(Math.random() * 3)
                randFace = Math.floor(Math.random() * 2)

                if (scramble.face[randAxis][randFace] !== faceArr[i - 1] && // can't be the same as previous
                    (scramble.face[randAxis][randFace] !== faceArr[i - 2] && // cant be the same as 2 elements before if in the same axis
                        !(
                            (scramble.face[0].includes(scramble.face[randAxis][randFace]) && scramble.face[0].includes(faceArr[i - 2])) &&
                            (scramble.face[1].includes(scramble.face[randAxis][randFace]) && scramble.face[1].includes(faceArr[i - 2])) &&
                            (scramble.face[2].includes(scramble.face[randAxis][randFace]) && scramble.face[2].includes(faceArr[i - 2]))
                        ))
                ) {
                    faceArr.push(scramble.face[randAxis][randFace])
                    accepted = true // for breaking the loop
                }
            }
        }

        faceArr.forEach(el => {
            result.push(el + scramble.rotation[Math.floor(Math.random() * 3)]) // ' or 2 or nothing can be added randomly to each element
        })
        this.props.showScramble(result)
        this.props.passScramble(result)
        this.setState({
            scramble: result
        })
    }

    componentDidMount() {
        this.handleScramble()
    }

    render() {
        return (<div className="scramble" onClick={this.handleScramble}>{[...this.state.scramble].join(' ')}</div>);
    }
}

export default Scramble;