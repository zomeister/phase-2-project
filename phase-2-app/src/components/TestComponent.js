import React from "react";

const Button = (...{text}) => {
    
    return <button id="button">{text}</button>
}


const TestComponent = (props) => {
    function testFetch() {
        
        // const configObj = {
        //         method: 'GET',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(data)
        //     }
        const baseURL = "http://localhost:3000/https://api.tomorrow.io/v4/events?insights=&buffer=1&apikey=69cza2iHW7BXSQMMT4tDtklqilbMOklf";
        
        
        fetch(baseURL,
            {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [125.6, 10.1]
                },
                "properties": {
                  "name": "Dinagat Islands"
                }
              }
              ).then(res => console.log(res))
            .then(data => console.log(data))

    }
    return (
        <div id="testcomponent">
            <Button text="GET" onClick="testFetch()"/>
            <Button text="POST" />
        </div>
    );
}

export default TestComponent;

