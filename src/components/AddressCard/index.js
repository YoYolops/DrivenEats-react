import React from 'react';

import './AddressCard.css';

function AddressCard() {
    return (
        <div id="address-input-container">
            <div>
                <label>Nome: </label> <input required  id="customer-name-input" class="input-box" type="text" />
            </div>
            <div>
                <label>Endereço: </label> <input required  id="customer-address-input" class="input-box" type="text" />
            </div>
        </div>
    )
}

export default AddressCard;