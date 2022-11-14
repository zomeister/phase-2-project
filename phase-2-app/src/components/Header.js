import React from 'react';

const title = "Nondescript Weather Application for Browser";

// function Table(props) {

//     return (

//     )
// }

/**
 * title, nav, simple directions
 *
 */
function Header (props) {
    

    return (
        <header id="header" className="main-header">
            <h1 id="title">{title}</h1>
        </header>

    );

}

export default Header;