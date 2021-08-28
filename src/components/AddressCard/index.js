import React, { useState } from 'react';

import './AddressCard.css';
import utils from '../../utils/utils';

function AddressCard(props) {
    const [ customerName, setCustomerName ] = useState("");
    const [ customerAddress, setCustomerAddress ] = useState("");

    function validateData() {
        if(customerName.trim() && customerAddress.trim() !== "") {
            const wppLink = utils.generateLinkToWhatsApp(props.order, {
                name: customerName, 
                address: customerAddress
            }, props.paymentValue);

            window.location.href = wppLink;
        } else {
            alert("Insira dados válidos");
        }
    }

    return (
        <div id="address-input-container">
            <div>
                <label>Nome: </label> <input required  id="customer-name-input" class="input-box" type="text" value={customerName} onChange={ e => setCustomerName(e.target.value) } />
            </div>
            <div>
                <label>Endereço: </label> <input required  id="customer-address-input" class="input-box" type="text" value={customerAddress} onChange={ e => setCustomerAddress(e.target.value) }/>
            </div>
            <button onClick={validateData} id="address-confirmation-button">Finalizar</button>
            <a href="/" className="address-cancel-button">Cancelar</a>
        </div>
    )
}

export default AddressCard;