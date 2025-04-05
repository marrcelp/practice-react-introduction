import React from "react";
import { createRoot } from "react-dom/client";
import MenuItem from "./MenuItem";

const root = createRoot(document.querySelector('#root'));

const menuElement = { text: "kontakt", url: "/contact" }

const App = (props) => {
    return(
        <MenuItem text ={props.text} url={props.url}/>
    )
}

root.render(<App {...menuElement}/>);