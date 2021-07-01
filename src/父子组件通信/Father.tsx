import React, {useState} from "react";
import Son from "./Son";

const Father: React.FC = () => {
    const [msg, setMsg] = useState("李四");

    const changeName = (name) => {
        setMsg(name)
    }
    return (<>

        <h1>我是父亲</h1>
        <Son msg={msg} changeFatherName={changeName}>我是插槽 </Son>
    </>)
}
export default Father;