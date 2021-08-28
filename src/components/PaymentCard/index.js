import React from 'react';

import './PaymentCard.css';

import OrderedItem from '../../components/OrderedItem';
import utils from '../../utils/utils';

function PaymentCard(props) {
    const order = props.order;

    return (
        <>
            <div id="ordered-items">
                {
                    order.dish.map(item => <OrderedItem key={item.id} item={item}/>)
                }
                {
                    order.beverage.map(item => <OrderedItem key={item.id} item={item}/>)
                }
                {
                    order.dessert.map(item => <OrderedItem key={item.id} item={item}/>)
                }
                <p><span className="span" id="total-price">TOTAL</span> <span className="span" id="total-price">{utils.parsePriceToString(props.paymentValue)}</span></p>
            </div>
            <div>
                <div id="order-confirmation-button" className="confirmation-button" onClick={(event) => props.nextScreen(event)}>
                    <a>Tudo certo, pode pedir!</a>
                </div>
                <a href="/" className="cancel-button">Cancelar</a>
            </div>
        </>
    )
}

export default PaymentCard;