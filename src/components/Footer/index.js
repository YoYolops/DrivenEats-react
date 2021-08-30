import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import AppContext from '../context/AppContext';

function Footer() {
    const { isValidOrder } = useContext(AppContext);
    const { order } = useContext(AppContext);
    
    return (
        <footer>
            {
                !isValidOrder
                    ? <button disabled >Selecione os 3 itens para fechar o pedido</button>
                    : <Link to={{pathname:"/confirmation", state: order}} className="button" id="enabled">Fechar pedido</Link>
            }
        </footer>
    )
}

export default Footer;