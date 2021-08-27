import React, { useState } from 'react';

import './Quantifier.css';

function Quantifier(props) {
    const [ quantity, setQuantity ] = useState(1);

    function incrementQuantity(event) {
        event.stopPropagation();

        setQuantity(quantity + 1);
    }

    function decrementQuantity(event) {
        event.stopPropagation();

        if(quantity-1 === 0) {
            props.toggleClick();
        }

        setQuantity(quantity - 1);
    }

    return (
        <div className="quantifier">
            <p className="minus" onClick={(event) => {decrementQuantity(event)}}>-</p>
            <p>{quantity}</p>
            <p className="plus" onClick={(event) => {incrementQuantity(event)}}>+</p>
        </div>
    )
}

export default Quantifier;