import React, { useEffect } from 'react';
import InnerComponent from "./InnerComponent";

const App = () => {
    useEffect(() => {
        fetch("http:/localhost:1234/api/health", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(r => r.json())
            .then(data => {
                console.log(data);
                })
            .catch(e => console.log(e))
    },[])
    return (
        <>
            <div>Hello World 123</div>
            <InnerComponent />
        </>
    )

}

export default App;
