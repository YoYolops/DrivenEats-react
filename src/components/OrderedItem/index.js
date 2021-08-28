import React from 'react';

import utils from '../../utils/utils';

function OrderedItem(props) {
    return (
        <p><span className="span" id={`${props.item.type}-name`}>{`${props.item.quantity}x ${props.item.name}`}</span><span className="span" id={`${props.item.type}-price`}>{utils.parsePriceToString(props.item.price * props.item.quantity)}</span></p>
    )
}

export default OrderedItem;