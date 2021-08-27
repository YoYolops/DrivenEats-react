import React, { useState } from 'react';

import './DishCard.css';

import Quantifier from '../Quantifier';

function DishCard(props) {
    const id = props.dishId;
    const [ isClicked, setIsClicked ] = useState(false);

    function toggleClickedCard() {
        console.log("togglin");
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
                <span className="dish-price">R$</span> <span className="dish-price">{props.price}</span>
            </div>
            {isClicked ? <Quantifier toggleClick={toggleClickedCard} /> : null}
        </div>
    )
}

export default DishCard;