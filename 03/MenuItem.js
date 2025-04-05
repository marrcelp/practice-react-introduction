import PropTypes from "prop-types";
import React from "react";

const MenuItem = (props) => {
    return(
        <li>
            <a href={props.url}>{props.text}</a>
        </li>
    )
}

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default MenuItem;