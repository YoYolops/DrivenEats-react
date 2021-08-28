import React from 'react';

import utils from '../../utils/utils';

function OrderedItem(props) {
    return (
        <p><span className="span" id={`${props.type}-name`}>{props.name}</span><span className="span" id={`${props.type}-price`}>{utils.parsePriceToString(props.price)}</span></p>
    )
}

export default OrderedItem;