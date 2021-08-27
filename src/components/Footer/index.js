import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';

import './Footer.css';

function Footer(props) {
    const { isValidOrder } = useContext(AppContext);

    return (
        <footer>
            <button id={isValidOrder ? "enabled" : "disabled"} onClick={props.onclickFunction} disabled>
                Selecione os 3 itens para fechar o pedido
            </button>
        </footer>
    )
}

export default Footer;