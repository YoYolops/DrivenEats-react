import React, { useContext, useState, useEffect } from 'react';

import './Quantifier.css';
import AppContext from '../context/AppContext';

function Quantifier(props) {
    const [ orderData, setOrderData ] = useState({...props.orderData, quantity: 1});
    const { updateOrderItems } = useContext(AppContext);

    useEffect(() => {
        updateOrderItems({...props.orderData, quantity: 1});
    }, [])

    function incrementQuantity(event) {
        event.stopPropagation();

        const newOrderData = {...orderData};
        newOrderData.quantity += 1;
        updateOrderItems(newOrderData);
        setOrderData(newOrderData);
    }

    function decrementQuantity(event) {
        event.stopPropagation();

        const newOrderData = {...orderData};
        if(newOrderData.quantity-1 === 0) {
            props.toggleClick();
        }

        newOrderData.quantity -= 1;
        updateOrderItems(newOrderData);
        setOrderData(newOrderData);
    }

    return (
        <div className="quantifier">
            <p className="minus" onClick={(event) => {decrementQuantity(event)}}>-</p>
            <p>{orderData.quantity}</p>
            <p className="plus" onClick={(event) => {incrementQuantity(event)}}>+</p>
        </div>
    )
}

export default Quantifier;