import React, {Consumer, Context, Provider} from "react";

const stringCtx: Context<string> = React.createContext("defaultValue");

const {Provider, Consumer} = stringCtx;

export default stringCtx;

export {Provider, Consumer};