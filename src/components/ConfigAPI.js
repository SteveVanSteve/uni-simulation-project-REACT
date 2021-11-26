import React, {useState} from 'react';

// Need to POST the simulation config

function ConfigAPI() {
    const [data, setData] = useState()

    const apiGet = () => {
        fetch("http://127.0.0.1:8000/simulationconfig/")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
    });
};

return (
    <div>
        Simulation Configuration API <br />
        <button onClick={apiGet}>Fetch Simulation Configuration API</button>
        <br />
        {JSON.stringify(data, null, 2)}
    </div>
    );
}

export default ConfigAPI;