import React from 'react';

const Dots = (props) => {
    console.log('len ', props.length, props.active);
    const dots = []
    for (let i = 0; i < props.length; i++) {

        dots.push(<div key={i} className={props.active === i ? 'active' : null}></div>)
    }
    return (
        <div className='swipeme__dots'>{dots}</div>

    )
}

export default Dots;