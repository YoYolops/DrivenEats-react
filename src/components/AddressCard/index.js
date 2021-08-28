import React from 'react';

import './AddressCard.css';
import utils from '../../utils/utils';

function AddressCard() {
    return (
        <div id="address-input-container">
            <div>
                <label>Nome: </label> <input required  id="customer-name-input" class="input-box" type="text" />
            </div>
            <div>
                <label>Endereço: </label> <input required  id="customer-address-input" class="input-box" type="text" />
            </div>
            <a id="address-confirmation-button">Finalizar</a>
            <a href="/" className="address-cancel-button">Cancelar</a>
        </div>
    )
}

export default AddressCard;