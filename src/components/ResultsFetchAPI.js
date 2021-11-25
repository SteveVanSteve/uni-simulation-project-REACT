import React, {useState} from 'react';

function ResultsFetchAPI() {
    const [data, setData] = useState()

    const apiGet = () => {
        fetch("http://127.0.0.1:8000/simulationresult/")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };
    return (
        <div>
            Simulation Results API <br />

            <button onClick={apiGet}>Fetch Simulation Results API</button>
            <br />
            {JSON.stringify(data, null, 2)}
        </div>
    );
}

export default ResultsFetchAPI;

