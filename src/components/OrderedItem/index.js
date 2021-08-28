
import React from 'react';

function OrderedItem(props) {
    return (
        <p><span className="span" id={`${props.type}-name`}>{props.name}</span><span className="span" id={`${props.type}-price`}>{props.price}</span></p>
    )
}

export default OrderedItem;