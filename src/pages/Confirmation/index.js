import React, { useContext } from 'react';

import './Confirmation.css';
import OrderedItem from '../../components/OrderedItem';


function Confirmation(props) {
    const order = props.order;

    return (
        <div id="popup-container">
            <div className="popup">
                <h3 id="popup-title">Confirme seu pedido</h3>
                <div id="ordered-items">
                    {
                        order.dish.map(item => <OrderedItem  type={item.type} name={item.name} price={item.price}/>)
                    }

                    {<p><span className="span" id="total-price">TOTAL</span> <span className="span" id="total-price"></span></p>}
                </div>
                <div>
                    <div id="order-confirmation-button" className="confirmation-button">
                        <a>Tudo certo, pode pedir!</a>
                    </div>
                    <div id="address-confirmation-button" className="hidden">
                        <a>Finalizar</a>
                    </div>
                    <button>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;