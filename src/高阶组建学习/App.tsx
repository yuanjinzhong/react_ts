import {Pub, Sub} from "./Hoc";
import React from "react";

class App extends React.Component<any, any> {
    render() {
        return <>
            <Pub/>
            <Sub/>
        </>;
    }
}

export default App;