import React from 'react';

import './Main.css';
import { dish, beverage, dessert } from '../../data/dishes.js';

import DishSection from '../../components/DishSection';
import Scroller from '../../components/Scroller';
import DishCard from '../../components/DishCard';
import Footer from '../../components/Footer';

function Main() {
    return (
        <div className="App">
            <div className="app-content-container">
                <DishSection title="Primeiro, seu prato">
                    <Scroller scrollerID="dish-scroller">
                    {
                        dish.map((dish, index) => <DishCard key={index} dishId={index} dishType="dish" imgSrc={dish.image} name={dish.name} description={dish.description} price={dish.price}/>)
                    }
                    </Scroller>
                </DishSection>
        
                <DishSection title="Agora, sua bebida">
                    <Scroller scrollerID="beverage-scroller">
                    {
                        beverage.map((dish, index) => <DishCard key={index} dishId={index} dishType="beverage" imgSrc={dish.image} name={dish.name} description={dish.description} price={dish.price}/>)
                    }
                    </Scroller>
                </DishSection>
        
                <DishSection title="Por fim, sua sobremesa">
                    <Scroller scrollerID="dessert-scroller">
                    {
                        dessert.map((dish, index) => <DishCard key={index} dishId={index} dishType="dessert" imgSrc={dish.image} name={dish.name} description={dish.description} price={dish.price}/>)
                    }
                    </Scroller>
                </DishSection>
            </div>
            <Footer />
        </div>
    )
}

export default Main;