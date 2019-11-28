import React from 'react';
import '../style/ResultsList.scss'

function ResultsList(props) {

    let items = props.results
    items = props.results.map((item, index) => {

        return (
            <li key={item[3]}>{item[0]} {new Date(item[3]).toLocaleString()}</li>
        )
    }


    )
    return (
        <ol>
            {items}
        </ol>
    );
}

export default ResultsList;