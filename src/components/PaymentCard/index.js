import React from 'react';

import './PaymentCard.css';

import OrderedItem from '../../components/OrderedItem';
import utils from '../../utils/utils';

function PaymentCard(props) {
    const order = props.order;

    function paymentValue() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

        const dishValue = order.dish.reduce(reducer, 0);
        const beverageValue = order.beverage.reduce(reducer, 0);
        const dessertValue = order.dessert.reduce(reducer, 0);

        return dishValue + beverageValue + dessertValue;
    }

    return (
        <>
            <div id="ordered-items">
                {
                    order.dish.map(item => <OrderedItem key={item.id} type={item.type} name={item.name} price={item.price}/>)
                }
                {
                    order.beverage.map(item => <OrderedItem key={item.id} type={item.type} name={item.name} price={item.price}/>)
                }
                {
                    order.dessert.map(item => <OrderedItem key={item.id} type={item.type} name={item.name} price={item.price}/>)
                }
                <p><span className="span" id="total-price">TOTAL</span> <span className="span" id="total-price">{utils.parsePriceToString(paymentValue())}</span></p>
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