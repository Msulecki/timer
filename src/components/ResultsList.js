import React from 'react';
import '../style/ResultsList.scss'

function ResultsList(props) {
    console.log(props.results);
    let items = props.results
    items = props.results.map((item, index) => {
        if (index < 15) {
            return (
                <li key={item[3]}>{item[0]} {new Date(item[3]).toLocaleString()}</li>
            )
        }

    }
    )
    return (
        <ol>
            {items}
        </ol>
    );
}

export default ResultsList;