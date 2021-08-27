import React from 'react';

import './Scroller.css';

function Scroller(props) {
    return (
        <div id={props.scrollerID} className="scroller">
            {props.children}
        </div>
    )
}

export default Scroller;