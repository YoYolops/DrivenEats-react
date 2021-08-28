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

    return (
        <div id="popup-container">
            <div className="popup">
                <h3 id="popup-title">Confirme seu pedido</h3>
                {screen === 0 ? <PaymentCard order={order} nextScreen={nextScreen} /> : <AddressCard />}
            </div>
        </div>
    )
}

export default Confirmation;