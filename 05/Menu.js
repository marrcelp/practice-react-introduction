import React from "react";
import MenuItem from "../03/MenuItem";

const Menu = ({items}) => {
    return (
        <ul>
            {items.map((element) => (
                <MenuItem text={element.text} url = {element.url}/>
            ))}
        </ul>
    )
}

// Menu.propTypes = {
//     url: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
// }

export default Menu;