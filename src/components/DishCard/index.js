import React from 'react';

import './DishCard.css';

function DishCard(props) {
    const id = props.dishId;

    return (
        <div className="card">
            <div className="img-container">
                <img src={props.imgSrc} alt="Prato principal" />
            </div>
            <h3>{props.name}</h3>
            <p className="dish-description">{props.description}</p>
            <div className="dish-price-container">
                <span className="dish-price">R$</span> <span className="dish-price">{props.price}</span>
            </div>
            <img className="ico" alt="icone de verificacao" src="../../../assets/icos/check.png" />
        </div>
    )
}

export default DishCard;