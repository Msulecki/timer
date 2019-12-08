import React, { Component } from 'react';
import '../style/Cube.scss';

class Cube extends Component {
    state = {}

    handleCubeGrid = () => {
        const cube = this.props.cubeGrid
        const fFace = []
        const bFace = []
        const lFace = []
        const rFace = []
        const uFace = []
        const dFace = []

        cube.f.forEach((el, i) => {
            fFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })
        cube.b.forEach((el, i) => {
            bFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })
        cube.l.forEach((el, i) => {
            lFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })
        cube.r.forEach((el, i) => {
            rFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })
        cube.d.forEach((el, i) => {
            dFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })
        cube.u.forEach((el, i) => {
            uFace.push(<div key={i} style={{ backgroundColor: el }}></div>)
        })

        return [<div key={'f'} className='cube__f cube__face'>{fFace}</div>,
        <div key={'b'} className='cube__b cube__face'>{bFace}</div>,
        <div key={'l'} className='cube__l cube__face'>{lFace}</div>,
        <div key={'r'} className='cube__r cube__face'>{rFace}</div>,
        <div key={'u'} className='cube__u cube__face'>{uFace}</div>,
        <div key={'d'} className='cube__d cube__face'>{dFace}</div>]
    }

    render() {
        return (
            <div className='cube__container'><div className="cube">{this.handleCubeGrid()}</div></div>
        )
    }
}
export default Cube;