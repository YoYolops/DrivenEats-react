import React from 'react';

import './DishSection.css';

function DishSection(props) {
    return (
        <section className="dish-section">
            <h2>{props.title}</h2>
            {props.children}
        </section>
    )
}

export default DishSection;