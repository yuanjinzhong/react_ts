import {WithLogSub,WithLogPUb} from "./Hoc";
import React from "react";

class App extends React.Component<any, any> {
    render() {
        return <>
            <WithLogPUb/>
            <WithLogSub/>
        </>;
    }
}

export default App;