import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'));

const HeaderFn = (props) => {
    return <header style={props.style}>Moja pierwsza strona w React - fn</header>;
}

class HeaderCl extends React.Component {
    render(){
        return <header style={this.props.style}>Moja pierwsza strona w React - cl</header>
    }
}

const myStyles = {
    color: 'lightblue',
    backgroundColor: 'coral',
    fontSize: '26px',
    fontWeight: '600',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '50px'
}

const App = () => {
    return (
        <>
        <HeaderFn style={myStyles}/>
        <HeaderCl style={myStyles}/>
        </>
    )
}

root.render(<App/>);
