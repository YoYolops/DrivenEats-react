import React, { useState } from 'react';

import utils from '../../utils/utils.js';
import './DishCard.css';

import Quantifier from '../Quantifier';

function DishCard(props) {
    const dishData = {
        id: props.dishId,
        type: props.dishType,
        name: props.name,
        price: props.price
    }
    const [ isClicked, setIsClicked ] = useState(false);

    function toggleClickedCard() {
        setIsClicked(!isClicked)
    }

    return (
        <div className={isClicked ? "card card-selected" : "card"} onClick={() => setIsClicked(true)}>
            <div className="img-container">
                <img src={props.imgSrc} alt="Prato principal" />
            </div>
            <h3>{props.name}</h3>
            <p className="dish-description">{props.description}</p>
            <div className="dish-price-container">
                <span className="dish-price">R$</span> <span className="dish-price">{utils.parsePriceToString(props.price)}</span>
            </div>
            {isClicked ? <Quantifier orderData={dishData} toggleClick={toggleClickedCard} /> : null}
        </div>
    )
}

export default DishCard;