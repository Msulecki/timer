import React from 'react';
import '../style/ResultsList.scss'

function ResultsList(props) {
    let items = props.results
    items = props.results.map((item, index) => {
        return (
            <li key={item[0]}>{item[3]} {new Date(item[0]).toLocaleString()}
                <button
                    onClick={props.deleteResult.bind(this, index)}
                >x</button>
            </li>
        )
    }
    )

    return (
        <>
            <div className="results__header">All results ({items.length})</div>
            <ol>
                {items.length === 0 ? <div>¯\_(ツ)_/¯¯</div> : items}
            </ol>
        </>
    );
}

export default ResultsList;