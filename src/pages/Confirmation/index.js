import React, { useState } from 'react';

import './Confirmation.css';
import AddressCard  from '../../components/AddressCard';
import PaymentCard from '../../components/PaymentCard';

function Confirmation(props) {
    const order = props.order;
    const [ screen, setScreen ] = useState(0);

    function nextScreen(event) {
        event.stopPropagation();
        setScreen(screen + 1);
    }

    function paymentValue() {
        const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity);

        const dishValue = order.dish.reduce(reducer, 0);
        const beverageValue = order.beverage.reduce(reducer, 0);
        const dessertValue = order.dessert.reduce(reducer, 0);

        return dishValue + beverageValue + dessertValue;
    }

    return (
        <div id="popup-container">
            <div className="popup">
                <h3 id="popup-title">Confirme seu pedido</h3>{
                screen === 0 
                    ? <PaymentCard order={order} nextScreen={nextScreen} paymentValue={ paymentValue() }/>
                    : <AddressCard order={order} paymentValue={paymentValue()}/>
            }</div>
        </div>
    )
}

export default Confirmation;